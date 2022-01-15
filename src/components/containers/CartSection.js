import CartTable from "./CartTable"
import { CartContext } from "../context/CartContext"
import { useContext } from "react"
import { addDoc, collection, getFirestore } from "firebase/firestore"
import { useState } from "react/cjs/react.development"
import Subtitle from "../presentation/Subtitle"
import { GlobalContext } from "../context/GlobalContext"
import { Link } from "react-router-dom"

const CartSection = () =>{
    const cartCtx = useContext(CartContext)
    const globalCtx = useContext(GlobalContext)

    const [display, setDisplay] = useState(cartCtx.cart.length !== 0)

    const sendOrder = ()=>{
        if(!cartCtx.cart.length){
           globalCtx.addNotification({message:"El carrito está vacío.", severity: "error"})
           return
        } 

        globalCtx.setLoading(true)

        const NAME = document.getElementById("buyerName").value
        const MAIL = document.getElementById("buyerMail").value
        const PHONE = document.getElementById("buyerPhone").value

        if(NAME === "" || MAIL === "" || PHONE === ""){
            globalCtx.setLoading(false)
            globalCtx.addNotification({message:"Datos inválidos. Por favor reingreselos.", severity: "error"})
            return
        }

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
            globalCtx.addNotification({message:"Compra realizada con éxito!", severity: "success"})
            console.log("Compra realizada!", result)
            cartCtx.clear()
        }).catch((error)=>{
            globalCtx.addNotification({message:"Hubo un error en la compra. Por favor intente nuevamente.", severity: "error"})
            console.error("Error en la compra: ", error)
        }).finally(()=>{
            setDisplay(cartCtx.cart.length !== 0)
            globalCtx.setLoading(false)
        })
    }

    return (
        <div style={{backgroundColor:"#ececec", padding: "3rem"}}>
            <Subtitle text={"Mi carrito"}/>
            <div style={{margin:"2.5rem 5rem",padding:"5rem", backgroundColor:"lightgray", borderRadius:"1rem", overflow:"auto"}}>
                {display ? <CartTable/> : <div><p>Carrito vacío</p><Link to={"/"}>Volver al inicio</Link></div>}
                {display ? <div className="cart-form d-flex flex-column justify-content-center align-items-center">
                    <label htmlFor="name" className="form-label">Nombre y Apellido</label>
                    <input id="buyerName" className="form-control fit" type={"text"} name="name"></input>
                    <label htmlFor="mail" className="form-label">Correo electrónico</label>
                    <input id="buyerMail" className="form-control fit" type={"text"} name="mail"></input>
                    <label htmlFor="phone" className="form-label">Teléfono</label>
                    <input id="buyerPhone" className="form-control fit" type={"text"} name="phone"></input>
                    <button name="COMPRAR" className="button-dark" onClick={()=>{sendOrder()}}>COMPRAR</button>
                </div> : null}
            </div>
        </div>
    )
}

export default CartSection