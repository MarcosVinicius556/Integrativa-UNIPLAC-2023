import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Header() { 
  return (
    <Row>
    <Navbar bg="light" expand="lg">
    
      <Container fluid>

          <Col xs={3} lg = {3} className='text-center mt-2' >
          <Navbar.Brand as={Link} to="/">
          <h1>Sintax</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
          </Col >
        



          <Col  xs={6} className='d-flex flex-column align-items-center'>
          <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 " 
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
          </Navbar.Collapse>
          </Col>



          <Col   xs={3} className='d-flex flex-column align-items-center '>
            <Button variant="secondary">
            <Nav.Link as={Link} to="/cad-login">
              Login / Cadastro
            </Nav.Link>
          </Button>
          </Col>
          
    
      
      </Container>
  
    </Navbar>
    </Row>
  );
}
export default Header;
