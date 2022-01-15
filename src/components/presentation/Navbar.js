import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react/cjs/react.development";
import CartWidget from "./CartWidget";

const Navbar = () =>{
    //El código className={isActive => `nav-item text-center d-flex justify-content-center ${isActive? "nav-current" : ""}`}
    //Siempre daba true, y me saltaba error al ponerle la prop exact, por lo que lo implemente yo mismo
    const [currentPath, setCurrentPath] = useState(window.location.pathname)

    const updatePath = ()=>{
        setCurrentPath(window.location.pathname)
    }

    useEffect(()=>{
        //Verificamos 5 veces por segundo si coinciden las urls ya que no existe un evento para ello
        setInterval(()=>{
            if(window.location.pathname !== currentPath) updatePath()
        }, 200)
    }, [])

    const isCurrent = (path, exact) => {
        if(exact)
            return (path === window.location.pathname)
        return (window.location.pathname.includes(path))
    }
    return (
        <nav className="nav-box d-flex black-background flex-row align-items-center justify-content-between">
            <Link to="/">
                <img className="nav-item" style={{height: "45px", width: "auto", padding: "0"}} src={process.env.PUBLIC_URL +"/images/brand.png"} alt="Farmacia Hernandez"/>
            </Link>
            <NavLink to="/" className={`nav-item text-center d-flex justify-content-center ${isCurrent("/", true)? "nav-current" : ""}`}>
                <span className="nav-text">Home</span>
                <div className="nav-border-bottom"></div>
            </NavLink>
            <NavLink to="/about" className={`nav-item text-center d-flex justify-content-center ${isCurrent("/about", false)? "nav-current" : ""}`}>
                <span className="nav-text">Sobre Nosotros</span>
                <div className="nav-border-bottom"></div>
            </NavLink>
            <NavLink to="/cart" className={`nav-item text-center d-flex justify-content-center ${isCurrent("/cart", false)? "nav-current" : ""}`}>
                <span className="nav-text d-flex"><p>Carrito</p><CartWidget/></span>
                <div className="nav-border-bottom"></div>
            </NavLink>
        </nav>
    );
}

export default Navbar;