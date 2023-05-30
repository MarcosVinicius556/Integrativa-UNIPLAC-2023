import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function Header() { 
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">
          <h1>Sintax</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/">
              <h4>Home</h4>
            </Nav.Link>
            <Nav.Link></Nav.Link>
            <Nav.Link as={Link} to="/about">
              <h4>Sobre</h4>
            </Nav.Link>
            <Nav.Link></Nav.Link>
            <Nav.Link as={Link} to="/contact">
              <h4>Contato</h4>
            </Nav.Link>
            <Nav.Link></Nav.Link>
          </Nav>
          <Button variant="outline-primary">
            <Nav.Link as={Link} to="/cad-login">
              Login / Cadastro
            </Nav.Link>
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Header;
