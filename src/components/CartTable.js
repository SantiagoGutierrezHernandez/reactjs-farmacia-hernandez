import { useContext, useState } from "react"
import { CartContext } from "./CartContext"
import CartItem from "./CartItem"
import { Link } from "react-router-dom"
import { useEffect } from "react/cjs/react.development"
import { add } from "../utils/EventManager"

const CartTable = () => {
    const cartCtx = useContext(CartContext)
    const [items, setItems] = useState([])

    useEffect(()=>{
        add("cartChange", cartUpdate);
    }, [])
    //Mount y cambio de prop
    useEffect(()=>{
        cartUpdate()
    }, [cartCtx.cart])


    const cartUpdate = ()=>{
        setItems(cartCtx.cart.map((elem)=>{
            return <CartItem item={elem.item} amount={elem.amount} onRemove={cartUpdate} key={elem.item.name} />
        }))
    }

    if(!items.length) return (<div><p>Carrito vacío</p><Link to={"/"}>Volver al inicio</Link></div>)
    else return (
        <table id="cart-products" className="center" style={{borderRadius: "0.5rem", padding: "100rem"}}>
            <tbody>
                <tr className="cart-header d-flex justify-content-evenly align-items-center">
                    <th className="cart-img text-center" style={{width: "10rem"}}>Imagen</th>
                    <th className="cart-name text-center" style={{width: "15rem"}}>Nombre</th>
                    <th className="cart-amount text-center" style={{width: "15rem"}}>Cantidad</th>
                    <th className="cart-unit-price text-center" style={{width: "15rem"}}>Precio unitario</th>
                    <th className="cart-amount-price text-center" style={{width: "15rem"}}>Precio por cantidad</th>
                    <th className="cart-header-remove text-center" style={{width: "10rem"}}>Eliminar del carrito</th>
                </tr>
                {items}
                <tr className="d-flex justify-content-center align items center"><td style={{fontSize:"2rem"}}>TOTAL:{cartCtx.getTotal()}</td></tr>
            </tbody>
        </table>
    );
}

export default CartTable