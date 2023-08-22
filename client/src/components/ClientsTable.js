import Table from 'react-bootstrap/Table';
import Client from './Client';
import axios from "axios";
import { useEffect, useState } from "react";
import ModalNewClient from './ModalNewClient';

function ClientsTable() {
  
 const[clients,setClients]=useState([])
 const[filteredClients,setFilteredClients]=useState([]);
 
  const filterClients = (e)=>{
    e.preventDefault()
    let value=e.target.value;
    
    if (value.length===0){      
      setFilteredClients(clients);
    }else{      
      let filtered = clients.filter(client=>{        
        return client.dni.includes(value)        
      })      
      setFilteredClients(filtered)
    }
    return
  }
    
    const getAllClients= async ()=>{
        try {
            const {data} = await axios.get(`http://localhost:5000/clients/all`);
            setClients(data)
            setFilteredClients(data)                    
        } catch (error) {
            console.log(error)
        }
        return
    }
    
    useEffect(() => {        
        getAllClients() },[]);

    const renderClients = () => {
            return (filteredClients.map((client) => {
                return <Client clientData={client} getAllClients={getAllClients}/> 
            }))
    }
  return (<>
    <div className="d-flex justify-content-between p-1">      
      <h3 className="text-white">Clients Table</h3>
      <div className="d-flex flex-column m-1">
      <label className="text-white">Filter by DNI</label>
      <input onChange={(e) => { filterClients(e)}}></input>
      </div>     
      <ModalNewClient  getAllClients={getAllClients}/>
    </div> 
    <Table striped bordered hover variant = "dark">      
      <thead>                    
        <tr>
          <th>ID</th>            
          <th>First Name</th>
          <th>Last Name</th>
          <th>Sex</th>
          <th>DNI</th>
          <th>Phone Number</th>
          <th>Actions</th>          
        </tr>
      </thead>
      <tbody>
          {renderClients()}    
      </tbody>
    </Table>
    </>
  );
}

export default ClientsTable;