import { Link } from "react-router-dom"

const ButtonLink = ({light, goTo, text}) =>{
    return (
        <Link to={goTo} className="row justify-content-center">
            <div className={`text-center link ${light ? "button-light" : "button-dark"}`}>{text}</div>
        </Link>
    )
}

export default ButtonLink