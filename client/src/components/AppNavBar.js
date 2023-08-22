import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function AppNavBar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/"><strong>HomePage</strong></Navbar.Brand>
          <Nav className="me-auto">
          <Nav.Link href="/clients">Clientes</Nav.Link>            
          </Nav>          
        </Container>
      </Navbar>
    </>
  );
}

export default AppNavBar;