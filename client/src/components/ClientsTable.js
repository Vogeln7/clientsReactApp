import Table from 'react-bootstrap/Table';
import Client from './Client';
import axios from "axios";
import { useEffect, useState } from "react";





function ClientsTable() {
  
 const[clients,setClients]=useState([])
    
    const getAllClients= async ()=>{
        try {
            const {data} = await axios.get(`http://localhost:5000/clients/all`);
            setClients(data)         
                      
        } catch (error) {
            console.log(error)
        }
        return
    }
    
    useEffect(() => {        
        getAllClients() });

    const renderClients = () => {
            return (clients.map((client) => {
                return <Client clientData={client}/> 
            }))
    }
  return (
    <Table striped bordered hover variant = "dark">
      <thead>
        <tr><h3>Clients Table</h3></tr>
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
  );
}

export default ClientsTable;