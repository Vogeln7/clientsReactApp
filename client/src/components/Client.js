import React from "react";
import ModalEditClient from "./ModalEditClient";
import ModalDeleteClient from "./ModalDeleteClient";


function Client ({clientData,getAllClients}) {
    
    const data={...clientData}    
    return <tr key={data._id}>
    <td >{data._id}</td>
    <td>{data.firstname}</td>
    <td>{data.lastname}</td>
    <td>{data.sex}</td>
    <td>{data.dni}</td>
    <td>{data.phoneNumber}</td>
    <td>
      <ModalEditClient data={data} getAllClients={getAllClients}/>
      <ModalDeleteClient clientId={data._id} getAllClients={getAllClients}/>
    </td>
  </tr>
}

export default Client