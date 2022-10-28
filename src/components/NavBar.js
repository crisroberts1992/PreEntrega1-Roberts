import CartWidget from "./CartWidget";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../logo.jpg";
import "../App.css"

function NavBar () {
    return(
        <Navbar bg="black" variant="dark">
        <Container>
          <span><img src={logo} alt="logo"></img> </span>  
          <Navbar.Brand href="#home">TODO-VINO</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#nosotros">Nosotros</Nav.Link>
            <Nav.Link href="#productos">Productos</Nav.Link>
            <Nav.Link href="#contacto">Contacto</Nav.Link>
            <Nav.Link href="#carrito"><CartWidget/></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
    )
}



export default NavBar