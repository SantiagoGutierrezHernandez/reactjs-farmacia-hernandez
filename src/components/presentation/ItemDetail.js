import { Link } from "react-router-dom"
import ItemCount from "../containers/ItemCount"

const ItemDetail = ({details}) =>{
    
    return (
        <div>
            <Link to={"/"} style={{backgroundColor:"rgb(239, 239, 239)",border:"cornflowerblue 1px solid", borderRadius:"1rem", padding:"1px 6px", color:"black", fontStyle:"normal", fontWeight:"normal"}}>Cerrar</Link>
            <p style={{fontWeight:"bolder"}}>{details.name}</p>
            <img src={process.env.PUBLIC_URL + details.img} alt={details.name} style={{width:"30rem"}}></img>
            <p>{details.desc}</p>
            <p>${details.price}</p>
            <p>Stock disponible: {details.stock}</p>
            <ItemCount item={details} stock={details.stock} initial={1}/>
        </div>
    )
}

export default ItemDetail