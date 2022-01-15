import { useContext, useState } from "react";
import Counter from "../presentation/Counter";
import {add, fire, remove} from "../../utils/EventManager"
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { clamp } from "../../utils/Maths";
import { useEffect } from "react/cjs/react.development";

const ItemCount = ({item, stock, initial})=>{
    const cartCtx = useContext(CartContext)
    
    //Estado de la cantidad
    const [amount, setAmount] = useState(clamp(initial, 1, stock))

    //Guardamos los siguientes valores en states para que rerenderice y no tener que calcularlos cada vez que los utilizamos
    const [cartItem, setCartItem] = useState(cartCtx.cart[cartCtx.cartFind(item.name)])
    const [cartAmount, setCartAmount] = useState(cartItem ? cartItem.amount : 0)

    const updateValues = ()=>{
        setCartItem(cartCtx.cart[cartCtx.cartFind(item.name)])
        setCartAmount(cartItem ? cartItem.amount : 0)
    }

    useEffect(()=>{
        add("cartChange", updateValues)
        return ()=>{
            remove("cartChange", updateValues)
        }
    })
    //Si la cantidad es la misma que el stock no dejamos que se agreguen mas
    if(cartAmount >= stock) return <div><Link to="/cart">Cantidad máxima. Terminar compra?</Link><br/></div>
    //Creación del elemento 
    return (
        <div>
            <div className="d-flex align-items-center justify-content-center"
            style={{margin:"1rem auto",width:"fit-content", backgroundColor:"white", borderRadius:"1rem"}}>
                <button onClick={()=>{
                    setAmount(clamp(amount - 1, 1, stock))
                }} style={{border:"none", backgroundColor: "unset", color:"cornflowerblue", fontSize:"3rem"}}>-</button>
                <Counter amount={amount}/>
                <button onClick={()=>{
                    setAmount(clamp(amount + 1, 1, stock))
                }} style={{border:"none", backgroundColor: "unset", color:"cornflowerblue", fontSize:"3rem"}}>+</button>
            </div>
            <button onClick={()=>{fire("onAdd", {item:item, amount:amount})}} style={{border:"cornflowerblue 1px solid", borderRadius:"1rem"}}>Agregar al carrito</button>
        </div>
    );
}

export default ItemCount