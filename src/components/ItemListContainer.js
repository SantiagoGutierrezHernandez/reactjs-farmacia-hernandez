import ItemList from "./ItemList"
import { useState } from "react"

const ItemListContainer = ({products})=>{
    const getProducts = new Promise((resolve) => {
        setTimeout(()=>{resolve(products)}, 500)
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