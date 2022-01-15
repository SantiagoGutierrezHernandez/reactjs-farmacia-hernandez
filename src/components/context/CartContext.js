import { getFirestore, collection, getDocs } from "firebase/firestore";
import React from "react";
import { useContext, useEffect, useState } from "react/cjs/react.development";
import {add, fire, remove} from "../../utils/EventManager"
import {GlobalContext} from "./GlobalContext"

const CartContext = React.createContext([])

const CartProvider = ({defaultValue = [], children})=>{
    const [cart, setCart] = useState(defaultValue)
    const globalCtx = useContext(GlobalContext)
    
    //Montaje
    useEffect(()=>{
        const callback = (e)=>{
            addItem(e.detail.item, e.detail.amount)
            //Unificamos eventos del carrito en uno por si solo necesitamos saber si cambió
            add("cartAdd", ()=>{fire("cartChange", null)})
            add("cartRemove", ()=>{fire("cartChange", null)})
        }
        //Hacemos que se agreguen los elementos al carrito escuchando eventos
        add("onAdd", callback)

        //Desmontaje
        return ()=>{remove("onAdd", callback)}
    },[])
    
    //Funcion para encontrar el indice de un item segun su nombre. Si no hay devuelve -1
    const cartFind = (name)=>{
        return cart.findIndex(element => element.item.name === name)
    }

    const addItem = (item, amount) =>{
        //Si la cantidad no es valida ignoramos todo y retornamos, ahorrandonos crear variables
        if(amount < 1) return;

        //Hacemos una consulta al servidor para averiguar el stock
        const db = getFirestore()
        const itemsCollection = collection(db, "items")

        let stock = 0

        getDocs(itemsCollection).then(snapshot =>{
            let match = false

            //Buscamos una coincidencia con el id
            snapshot.docs.forEach(doc =>{
                if(!match && doc.id === item.id)
                {
                    match = true;
                    stock = doc.data().stock
                }
            })
            if(!match){
                console.log(`No se encontro ningun item con el id ${item.id}`)
            }

            const itemIndex = cartFind(item.name)
        
            //Si se encuentra en el carrito sumamos la cantidad y terminamos la funcion
            if(itemIndex !== -1)
            {
                //Encontramos por cuanto supera la cantidad al stock, y arreglamos la cantidad
                let newAmount = amount
                let diff = cart[itemIndex].amount + amount - stock
                if(diff > 0){
                    newAmount -= diff
                    globalCtx.addNotification({message:`La cantidad excede al stock. Agregado(s) ${item.name} X ${newAmount} en su lugar.`, severity:"warning"})
                    cart[itemIndex].amount += newAmount;
                    setCart(cart)
                    fire("cartAdd", {item:item, amount:amount})
                    return;
                } 
    
                cart[itemIndex].amount += newAmount;
                setCart(cart)
                fire("cartAdd", {item:item, amount:amount})
                globalCtx.addNotification({message:`${item.name} X ${newAmount} han sido agregados al carrito!.`, severity:"success"})
                return;
            }
            //Sino, lo agregamos al carrito
            cart.push({item:item, amount: amount})
            globalCtx.addNotification({message:`${item.name} X ${amount} han sido agregados al carrito!.`, severity:"success"})
            setCart(cart)
            fire("cartAdd", {item:item, amount:amount})
        })
    }
    
    //Remover el item si existe
    const removeItem = (item)=>{
        const itemIndex = cartFind(item.name)
        if(itemIndex !== -1){
            cart.splice(itemIndex, 1)
            setCart(cart)
            fire("cartRemove", item)
            globalCtx.addNotification({message:`${item.name} ha sido removido del carrito.`, severity:"success"})
        }
    }
    //Obtener cantidad de items en carrito
    const getItemsAmount = ()=>{
        let i = 0;
        for (const element of cart) {
            i += element.amount
        }
        return i
    }
    //Obtener precio total
    const getTotal = ()=>{
        let total = 0;
        for (const elem of cart) {
            total += parseFloat(elem.item.price) * parseFloat(elem.amount)
        }
        return total
    }
    //Vaciar el carrito
    const clear = ()=>{
        cart.splice(0, cart.length)
        setCart(cart)
        fire("cartChange", null)
    }

    return(
        <CartContext.Provider value={{cart, cartFind, addItem, removeItem, getItemsAmount, getTotal, clear}}>
            {children}
        </CartContext.Provider>
    )
}

export {CartContext}
export default CartProvider