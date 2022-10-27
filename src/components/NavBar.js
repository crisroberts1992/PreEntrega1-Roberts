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
            <Nav.Link href="#features">Nosotros</Nav.Link>
            <Nav.Link href="#pricing">Productos</Nav.Link>
            <Nav.Link href="#pricing">Contacto</Nav.Link>
            <Nav.Link href="#pricing"><CartWidget/></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
       /* <nav className="NavBarItems">
            <h1 className="NavTitulo">Todo-Vino</h1>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Productos</a></li>
                <li><a href="#">Nosotros</a></li>
                <li><a href="#">Contacto</a></li>
                <li><a href="#">Preguntas</a></li>
                <li><a href="#"> <CartWidget/> </a></li>
            </ul>
            
        </nav> */
    )
}



export default NavBar