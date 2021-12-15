import ItemCount from "./ItemCount"
import { Link } from "react-router-dom"

const Item = ({item}) => {
    return (
        <li className="d-flex flex-column align-items-center" style={{backgroundColor:"lightgray", margin:"1rem auto", padding:"1rem", width:"fit-content", listStyle:"none", borderRadius:"1rem"}}>
            <p>{item.name}</p>
            <img style={{width:"25rem"}} src={process.env.PUBLIC_URL + item.img} alt={item.name}></img>
            <p>${item.price}</p>
            <ItemCount stock={item.stock} initial={1}/>
            <Link to={`/item/${item.id}`} style={{backgroundColor:"rgb(239, 239, 239)",border:"cornflowerblue 1px solid", borderRadius:"1rem", padding:"1px 6px", color:"black", fontStyle:"normal", fontWeight:"normal"}}>Ver Detalles</Link>
        </li>
    )
}

export default Item