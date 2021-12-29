import CartTable from "./CartTable"
import { CartContext } from "./CartContext"
import { useContext } from "react"
import { addDoc, collection, getFirestore } from "firebase/firestore"
import { useState } from "react/cjs/react.development"

const CartSection = () =>{
    const cartCtx = useContext(CartContext)

    const [display, setDisplay] = useState(cartCtx.cart.length !== 0)

    const sendOrder = ()=>{
        const NAME = document.getElementById("buyerName").value
        const MAIL = document.getElementById("buyerMail").value
        const PHONE = document.getElementById("buyerPhone").value
        const ITEMS = cartCtx.cart.map((element)=>{
            return {
                name:element.item.name,
                id: element.item.id,
                price: element.item.price,
                amount:element.amount
            }
        })

        const ORDER = {
            buyer: {NAME, PHONE, MAIL},
            items: ITEMS,
            total: cartCtx.getTotal()
        }

        const db = getFirestore();
        const ordersCollection = collection(db, "orders")
        addDoc(ordersCollection, ORDER).then((result)=>{
            console.log("Compra realizada!", result)
            console.log(cartCtx.cart); 
            cartCtx.clear()
        }).catch((error)=>{
            console.error("Error en la compra: ", error)
        }).finally(()=>{
            setDisplay(cartCtx.cart.length !== 0)
        })
    }

    return (
        <div style={{position:"fixed", top:0, left:0,height:"100vh", width:"100vw",backgroundColor:"rgba(0,0,0,0.2)"}}>
            <div style={{margin:"5rem 10rem",padding:"5rem", backgroundColor:"lightgray", borderRadius:"1rem"}}>
                <CartTable/>
                {display ? <div className="d-flex flex-column justify-content-center- align-items-center">
                    <label htmlFor="name">Nombre y Apellido</label>
                    <input id="buyerName" type={"text"} name="name"></input>
                    <label htmlFor="mail">Correo electrónico</label>
                    <input id="buyerMail" type={"text"} name="mail"></input>
                    <label htmlFor="phone">Teléfono</label>
                    <input id="buyerPhone" type={"text"} name="phone"></input>
                    <button name="COMPRAR" onClick={()=>{sendOrder()}}>COMPRAR</button>
                </div> : null}
            </div>
        </div>
    )
}

export default CartSection