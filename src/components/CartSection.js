import { useContext } from "react"
import { CartContext } from "./CartContext"
const CartSection = () =>{
    const cartCtx = useContext(CartContext)

    const items =  cartCtx.cart.map(i =>{
        return <p>{i.item.name}, {i.amount}</p>
    })

    return (
        <div style={{position:"fixed", top:0, left:0,height:"100vh", width:"100vw",backgroundColor:"rgba(0,0,0,0.2)"}}>
            <div style={{margin:"5rem 10rem",padding:"5rem", backgroundColor:"lightgray", borderRadius:"1rem"}}>
                {items.length ? items : <p>Carrito vacío</p>}
            </div>
        </div>
    )
}

export default CartSection