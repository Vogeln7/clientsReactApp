import { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



function ModalDeleteClient({clientId , getAllClients}) {
    
    const [show, setShow] = useState(false);

  const deleteClient=async(id)=>{
    try {
        const {data}= await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/clients/delete/${id}`)
        getAllClients();
        console.log(data)
    } catch (error) {
        console.log(error)
    }
    return
  }
  const handleDelete = (e)=>{            
    deleteClient(clientId)
    handleClose()       
 }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);




  return (
    <>
      <Button variant="danger" onClick={handleShow}>
        Delete
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete CLient</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          ¿Do you really want to delete this client?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalDeleteClient;