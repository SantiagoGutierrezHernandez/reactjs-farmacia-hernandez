import React from "react";
import { useEffect, useState } from "react/cjs/react.development";
import {add, fire} from "../utils/EventManager"

const CartContext = React.createContext([])

const CartProvider = ({defaultValue = [], children})=>{
    const [cart, setCart] = useState(defaultValue)
    
    //Montaje
    useEffect(()=>{
        //Hacemos que se agreguen los elementos al carrito escuchando eventos
        add("onAdd", (e)=>{
            addItem(e.detail.item, e.detail.amount)
            //Unificamos eventos del carrito en uno por si solo necesitamos saber si cambió
            add("cartAdd", ()=>{fire("cartChange", null)})
            add("cartRemove", ()=>{fire("cartChange", null)})
        })
    },[])
    
    //Funcion para encontrar el indice de un item segun su nombre. Si no hay devuelve -1
    const cartFind = (name)=>{
        return cart.findIndex(element => element.item.name === name)
    }

    const addItem = (item, amount) =>{
        //Si la cantidad no es valida ignoramos todo y retornamos, ahorrandonos crear variables
        if(amount < 1) return;
    
        const itemIndex = cartFind(item.name)
    
        //Si se encuentra en el carrito sumamos la cantidad y terminamos la funcion
        if(itemIndex !== -1)
        {
            cart[itemIndex].amount += amount;
            setCart(cart)
            fire("cartAdd", {item:item, amount:amount})
            return;
        }
        //Sino, lo agregamos al carrito
        cart.push({item:item, amount: amount})
        setCart(cart)
        fire("cartAdd", {item:item, amount:amount})
    }
    
    //Remover el item si existe
    const removeItem = (item)=>{
        const itemIndex = cartFind(item.name)
        if(itemIndex !== -1){
            cart.splice(itemIndex, 1)
            setCart(cart)
            fire("cartRemove", item)
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
    }

    return(
        <CartContext.Provider value={{cart, cartFind, addItem, removeItem, getItemsAmount, getTotal, clear}}>
            {children}
        </CartContext.Provider>
    )
}

export {CartContext}
export default CartProvider