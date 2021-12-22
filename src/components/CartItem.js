import { useContext } from "react"
import { CartContext } from "./CartContext"

const CartItem = ({item, amount, onRemove}) =>{
    const cartCtx = useContext(CartContext)

    return (
        <tr className="cart-row d-flex justify-content-evenly align-items-center" style={{height: "10rem", borderBottom: "2px solid grey"}}>
            <td className="h-100 d-flex justify-content-center align-items-center" style={{width:"10rem", height:"15rem"}}>
                <img src={process.env.PUBLIC_URL + item.img} className="h-100" alt={item.name}/>
            </td>
            <td className="h-100 d-flex justify-content-evenly align-items-center" style={{width: "15rem"}}>
                <p className="text-center" style={{width: "10rem"}}>{item.name}</p>
            </td>
            <td className="h-100 d-flex justify-content-evenly align-items-center" style={{width: "15rem"}}>
                <p>{amount}</p>
            </td>
            <td className="h-100 d-flex justify-content-evenly align-items-center" style={{width: "15rem"}}>
                <p>{item.price}</p>
            </td>
            <td className="h-100 d-flex justify-content-evenly align-items-center" style={{width: "15rem"}}>
                <p>{item.price * amount}</p>
            </td>
        <td><button onClick={()=>{cartCtx.removeItem(item) ; onRemove()} } className="btn-danger" style={{width: "10rem", height: "3rem", fontSize: "1.6rem"}}>REMOVER</button></td></tr>
    )
}

export default CartItem