import CartWidget from "./CartWidget";
//import brand from "/images/brand.png"
const Navbar = () =>{
    return (
    <nav className="nav-box d-none d-sm-flex black-background sticky-top flex-row align-items-center justify-content-between">
        <img className="nav-item" style={{height: "45px", width: "auto", padding: "0"}} src={process.env.PUBLIC_URL +"/images/brand.png"} alt="Farmacia Hernandez"/>
        <a href="#inicio" className="nav-item text-center d-flex justify-content-center">
            <span className="nav-text">Home</span>
            <div className="nav-border-bottom"></div>
        </a>
        <a href="#sobre-nosotros" className="nav-item text-center d-flex justify-content-center">
            <span className="nav-text">Sobre Nosotros</span>
            <div className="nav-border-bottom"></div>
        </a>
        <a href="./html/productos.html" className="nav-item text-center d-flex justify-content-center">
            <span className="nav-text">Nuestros Productos </span>
            <div className="nav-border-bottom"></div>
        </a>
        <a href="#contacto" className="nav-item text-center d-flex justify-content-center">
            <span className="nav-text">Contáctanos</span>
            <div className="nav-border-bottom"></div>
        </a>
        <a href="./html/cart.html" className="nav-item text-center d-flex justify-content-center">
            <span className="nav-text">Mi Carrito</span>
            <div className="nav-border-bottom"></div>
        </a>
        <CartWidget/>
    </nav>
    );
}

export default Navbar;