import { useContext, useState } from "react";
import Counter from "./Counter";
import {add, fire} from "../utils/EventManager"
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";

const ItemCount = ({item, stock, initial})=>{
    const cartCtx = useContext(CartContext)
    //Funcion de utilidad para hacer que el numero se mantenga entre dos valores
    const clamp = (number, min, max) => {
        if(number > max) return max;
        if(number < min) return min;
        return number;
    }
    //Estado de la cantidad
    const [amount, setAmount] = useState(clamp(initial, 1, stock))

    //Guardamos los siguientes valores en states para que rerenderice y no tener que calcularlos cada vez que los utilizamos
    const [cartItem, setCartItem] = useState(cartCtx.cart[cartCtx.cartFind(item.name)])
    const [cartAmount, setCartAmount] = useState(cartItem ? cartItem.amount : 0)

    add("cartChange", ()=>{
        setCartItem(cartCtx.cart[cartCtx.cartFind(item.name)])
        setCartAmount(cartItem ? cartItem.amount : 0)
    })

    //Si la cantidad es la misma que el stock no dejamos que se agreguen mas
    if(cartAmount >= stock) return <div><Link to="/cart">Cantidad máxima. Terminar compra?</Link><br/></div>
    //Creación del elemento 
    //TODO: prohibir que la cantidad del counter + la del carrito exceda el stock
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