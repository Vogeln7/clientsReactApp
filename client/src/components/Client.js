import React from "react";
import ModalEditClient from "./ModalEditClient";
import ModalDeleteClient from "./ModalDeleteClient";


function Client ({clientData}) {
    
    const data={...clientData}    
    return <tr key={data._id}>
    <td >{data._id}</td>
    <td>{data.firstname}</td>
    <td>{data.lastname}</td>
    <td>{data.sex}</td>
    <td>{data.dni}</td>
    <td>{data.phoneNumber}</td>
    <td>
      <ModalEditClient data={data}/>
      <ModalDeleteClient clientId={data._id}/>
    </td>
  </tr>
}

export default Client