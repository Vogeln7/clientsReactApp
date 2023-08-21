import { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { Form, FormGroup } from 'react-bootstrap';

function ModalEditClient({ data }) {

  const [show, setShow] = useState(false);
  const [formValues, setFormValues] = useState(
    {
      firstname: data.firstname,
      lastname: data.lastname,
      sex: data.sex,
      dni: data.dni,
      phoneNumber: data.phoneNumber
    }
  )

  const updateClient = async (id) => {
    try {
      const { data } = await axios.put(`http://localhost:5000/clients/update/${id}`, formValues)
      console.log(data)
    } catch (error) {
      console.log(error)
    }
    return
  }
  const handleEdit = (e) => {
    updateClient(data._id)
    handleClose()
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="warning" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update CLient</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Firstname</Form.Label>
              <Form.Control
                type="text"
                autoFocus
                name='firstname'
                value={formValues.firstname}
                onChange={(e) => { setFormValues({ ...formValues, firstname: e.target.value }) }}
              />
              <Form.Label>Lastname</Form.Label>
              <Form.Control
                type="text"
                name='lastname'
                value={formValues.lastname}
                onChange={(e) => { setFormValues({ ...formValues, lastname: e.target.value }) }}
              />
              <Form.Label>Sex</Form.Label>
              <FormGroup>
                <Form.Check
                  label="Masculino"
                  value="Masculino"
                  name="sex"
                  type="radio"
                  onChange={(e) => { setFormValues({ ...formValues, sex: e.target.value }) }}
                />
                <Form.Check
                  label="Femenino"
                  value="Femenino"
                  name="sex"
                  type="radio"
                  onChange={(e) => { setFormValues({ ...formValues, sex: e.target.value }) }}
                />
              </FormGroup>
              <Form.Label>DNI</Form.Label>
              <Form.Control
                type="text"
                name='dni'
                value={formValues.dni}
                onChange={(e) => { setFormValues({ ...formValues, dni: e.target.value }) }}
              />
              <Form.Label>Phone number</Form.Label>
              <Form.Control
                type="text"
                name='phoneNumber'
                value={formValues.phoneNumber}
                onChange={(e) => { setFormValues({ ...formValues, phoneNumber: e.target.value }) }}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleEdit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalEditClient;