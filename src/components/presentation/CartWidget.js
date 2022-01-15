import { useContext, useState } from "react";
import { useEffect } from "react/cjs/react.development";
import { add } from "../../utils/EventManager";
import { CartContext } from "../context/CartContext";

const CartWidget = ()=>{
  const cartCtx = useContext(CartContext)
    const [amount, setAmount] = useState(cartCtx.getItemsAmount())

    const updateAmount = ()=>{
      setAmount(cartCtx.getItemsAmount())
    }

    useEffect(()=>{
      add("cartChange", updateAmount)
    },[])
    
    return (
        <div style={{height:"3rem"}}>
          {amount > 0 ? <div style={{fontSize:"1rem",color:"black",backgroundColor:"cornflowerblue", width:"1.5rem", height:"1.5rem", borderRadius: "1rem", position:"absolute"}}>{amount}</div> : null}
          <img className="h-100" src={process.env.PUBLIC_URL +"/images/cart-widget.png"} alt="Cart icon"/>   
        </div>
    );
}
export default CartWidget;