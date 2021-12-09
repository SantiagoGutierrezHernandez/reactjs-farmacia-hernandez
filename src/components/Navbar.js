import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";

const Navbar = () =>{
    return (
    <nav className="nav-box d-none d-sm-flex black-background sticky-top flex-row align-items-center justify-content-between">
        <NavLink to="/">
            <img className="nav-item" style={{height: "45px", width: "auto", padding: "0"}} src={process.env.PUBLIC_URL +"/images/brand.png"} alt="Farmacia Hernandez"/>
        </NavLink>
        <NavLink to="/" className="nav-item text-center d-flex justify-content-center">
            <span className="nav-text">Home</span>
            <div className="nav-border-bottom"></div>
        </NavLink>
        <NavLink to="/" className="nav-item text-center d-flex justify-content-center">
            <span className="nav-text">Sobre Nosotros</span>
            <div className="nav-border-bottom"></div>
        </NavLink>
        <NavLink to="/" className="nav-item text-center d-flex justify-content-center">
            <span className="nav-text">Nuestros Productos </span>
            <div className="nav-border-bottom"></div>
        </NavLink>
        <NavLink to="/" className="nav-item text-center d-flex justify-content-center">
            <span className="nav-text">Contáctanos</span>
            <div className="nav-border-bottom"></div>
        </NavLink>
        <NavLink to="/cart">
            <CartWidget/>
        </NavLink>
    </nav>
    );
}

export default Navbar;