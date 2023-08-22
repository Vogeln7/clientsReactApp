import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function HomePage() {
  return (
    <Container className="my-5 text-white">
      <Row>
        <Col md={6}>
          <h1>Welcome to ClientCRUD APP</h1>
          <p>Your Ultimate Solution To Manage Your Customers</p>
          <ul>
            
            <li><strong>Create new clients:</strong> We have a Mongo DB database for yoo to save the information of your clients.</li>
            <li><strong>List your clients:</strong> You can have a list of the created clients.</li>
            <li><strong>Filter By DNI:</strong> As you type an DNI, it will find clients that match that search criteria.</li>
            <li><strong>Edit or Delete Clients:</strong> If you want, you can edit an already created customer, or completely delete all records from it.</li>
          </ul>
          <Button variant="primary" href="/clients">
            Start Now
          </Button>
        </Col>
        <Col md={6}>
          <img
            src="https://www.syncfusion.com/blogs/wp-content/uploads/2021/09/How-to-Perform-CRUD-Actions-in-a-React-Data-Grid-Using-Redux-A-Complete-Guide.png"
            alt="App Screenshot"
            className="img-fluid"
          />
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <h2>Why Choose ClientCRUD APP?</h2>
          <p>
            ClientCRUD APP is designed to revolutionize the way you manage your clients list. With a user-friendly interface and powerful features, you'll experience a seamless and efficient workflow like never before.
          </p>
          
        </Col>
      </Row>
    </Container>
  );
}

export default HomePage;