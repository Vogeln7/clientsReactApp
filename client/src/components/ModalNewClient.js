import { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form, FormGroup } from 'react-bootstrap';
import Swal from 'sweetalert2'

function ModalNewClient() {
    
    const [show, setShow] = useState(false);
    const [formValues, setFormValues] = useState(
        {
            firstname: "",
            lastname: "",
            dni: "",
            sex: "",
            phoneNumber: ""
        }
    )

    const saveNewClient = async () => {
        
        try {
            const response  = await axios.post(`http://localhost:5000/clients/new`, formValues)
                     
            if (response.status===200){
                Swal.fire('Success!',`Client ${response.data.firstname} successfully created!`,'success')                
            }           
        } catch (error) {
            console.log(error.response.data)
              
            Swal.fire('Error',`${error.response.data.message}`,'error')
        }
        
        return
    }

    const handleSave = (e) => {
        saveNewClient()
        handleClose()
    }
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="success" onClick={handleShow}>New Client</Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Creating a new client</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Firstname</Form.Label>
                            <Form.Control
                                type="text"
                                autoFocus
                                name='firstname'
                                onChange={(e) => { setFormValues({ ...formValues, firstname: e.target.value }) }}
                            />
                            <Form.Label>Lastname</Form.Label>
                            <Form.Control
                                type="text"
                                name='lastname'
                                onChange={(e) => { setFormValues({ ...formValues, lastname: e.target.value }) }}
                            />
                            <Form.Label>Sex</Form.Label>
                            <FormGroup>
                            <Form.Check                                
                                label="Masculino"
                                value="Masculino"
                                name="sex"
                                type="radio"
                                onChange={(e) => { setFormValues({ ...formValues, sex: e.target.value}) }}                                
                            />
                            <Form.Check                                
                                label="Femenino"
                                value="Femenino"
                                name="sex"
                                type="radio"
                                onChange={(e) => { setFormValues({ ...formValues, sex: e.target.value}) }}                                
                            />
                            </FormGroup>
                            <Form.Label>DNI</Form.Label>
                            <Form.Control
                                type="text"
                                name='dni'
                                onChange={(e) => { setFormValues({ ...formValues, dni: e.target.value }) }}
                            />
                            <Form.Label>Phone number</Form.Label>
                            <Form.Control
                                type="text"
                                name='phoneNumber'
                                onChange={(e) => { setFormValues({ ...formValues, phoneNumber: e.target.value }) }}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSave}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalNewClient;