import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ModalNewClient from './ModalNewClient';


function AppNavBar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="me-auto">
          <Nav.Link href="/clients">Clientes</Nav.Link>            
          </Nav>
          <ModalNewClient/>
        </Container>
      </Navbar>
    </>
  );
}

export default AppNavBar;