import { useState } from "react";
import Counter from "./Counter";
import {fire} from "../utils/EventManager"
const ItemCount = ({stock, initial})=>{
    //Funcion de utilidad para hacer que el numero se mantenga entre dos valores
    const clamp = (number, min, max) => {
        if(number > max) return max;
        if(number < min) return min;
        return number;
    }
    //Estado de la cantidad
    const [amount, setAmount] = useState(clamp(initial, 1, stock))
    
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
            <button onClick={()=>{fire("onAdd", {amount:amount})}} style={{border:"cornflowerblue 1px solid", borderRadius:"1rem"}}>Agregar al carrito</button>
        </div>
    );
}

export default ItemCount