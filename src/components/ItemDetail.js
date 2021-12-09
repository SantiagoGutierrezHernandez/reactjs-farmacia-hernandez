import { Link } from "react-router-dom"
const ItemDetail = ({details}) =>{
    return (
        <div style={{margin:"5rem 10rem",padding:"5rem", backgroundColor:"lightgray", borderRadius:"1rem"}}>
            <Link to={"/"} style={{backgroundColor:"rgb(239, 239, 239)",border:"cornflowerblue 1px solid", borderRadius:"1rem", padding:"1px 6px", color:"black", fontStyle:"normal", fontWeight:"normal"}}>Cerrar</Link>
            <p>{details.name}</p>
            <img src={process.env.PUBLIC_URL + details.img} alt={details.name} style={{width:"30rem"}}></img>
            <p>{details.desc}</p>
            <p>${details.price}</p>
        </div>
    )
}

export default ItemDetail