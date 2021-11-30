import ItemList from "./ItemList"
import { useState } from "react"

const ItemListContainer = ()=>{
    const products = [
    {name: "Crema de limpieza", stock: 4, price: 230.5, img:"/images/crema-limpieza.jpg"},
    {name: "Agua de rosas", stock: 3, price: 320, img:"/images/agua-rosas.jpg"},
    {name: "Crema antiage con acido hialuronico", stock: 7, price: 460.5, img:"/images/crema-antiage-hialuronico.jpg"}
]

    const getProducts = new Promise((resolve) => {
        setTimeout(()=>{resolve(products)}, 2000)
    })

    const [items, setItems] = useState([])
    
    getProducts.then(result => {
        setItems(result)
    })

    return (
        <container>
            <ItemList items={items}/>
        </container>
    )
}

export default ItemListContainer;