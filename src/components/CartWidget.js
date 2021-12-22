import { useContext, useState } from "react";
import { useEffect } from "react/cjs/react.development";
import { add } from "../utils/EventManager";
import { CartContext } from "./CartContext";
const CartWidget = ()=>{
  const cartCtx = useContext(CartContext)
    const [amount, setAmount] = useState(cartCtx.getItemsAmount())

    const updateAmount = ()=>{
      setAmount(cartCtx.getItemsAmount())
    }

    //BUG: la cantidad no se actualiza al agregar un item por primera vez
    useEffect(()=>{
      updateAmount()
      add("cartChange", updateAmount)
    },[])

    return (
        <div style={{height:"3rem", display: amount === 0? "none":"block"}}>
          <div style={{fontSize:"1rem",backgroundColor:"lightblue", width:"1.5rem", height:"1.5rem", borderRadius: "1rem", position:"absolute"}}>{amount}</div>
          <img className="h-100" src={process.env.PUBLIC_URL +"/images/cart-widget.png"} alt="Cart icon"/>   
        </div>
    );
}
export default CartWidget;