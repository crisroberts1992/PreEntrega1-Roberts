import CartWidget from "./CartWidget"


function NavBar () {
    return(
        <nav className="NavBarItems">
            <h1 className="NavTitulo">Todo-Vino</h1>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Productos</a></li>
                <li><a href="#">Nosotros</a></li>
                <li><a href="#">Contacto</a></li>
                <li><a href="#">Preguntas</a></li>
                <li><a href="#"> <CartWidget/> </a></li>
            </ul>
            
        </nav>
    )
}



export default NavBar