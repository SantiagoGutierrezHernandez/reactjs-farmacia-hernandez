import { Link } from "react-router-dom"
import ItemCount from "./ItemCount"
import {add, remove} from "../utils/EventManager"
import { useEffect, useState } from "react/cjs/react.development"

const ItemDetail = ({details}) =>{
    const [amount, setAmount] = useState(0)
    const updateAmount = (e)=>{
        setAmount(e.detail.amount)
    }
    
    //Al montar registramos el evento
    useEffect(()=>{
        add("onAdd", updateAmount)
    },[])

    //Al desmontar eliminamos el vento
    useEffect(()=>()=>{
        remove("onAdd", updateAmount)
    },[])

    return (
        <div style={{margin:"0px 5rem",padding:"5rem", backgroundColor:"lightgray", borderRadius:"1rem"}}>
            <Link to={"/"} style={{backgroundColor:"rgb(239, 239, 239)",border:"cornflowerblue 1px solid", borderRadius:"1rem", padding:"1px 6px", color:"black", fontStyle:"normal", fontWeight:"normal"}}>Cerrar</Link>
            <p>{details.name}</p>
            <img src={process.env.PUBLIC_URL + details.img} alt={details.name} style={{width:"30rem"}}></img>
            <p>{details.desc}</p>
            <p>${details.price}</p>
            <ItemCount stock={details.stock} initial={1}/>
            <p>En el carrito: {amount}</p>
            <Link to="/cart">Terminar compra</Link>
        </div>
    )
}

export default ItemDetail