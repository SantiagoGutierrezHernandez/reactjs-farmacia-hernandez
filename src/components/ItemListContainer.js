import ItemList from "./ItemList"
import { useState } from "react"
import { Link } from "react-router-dom"

const ItemListContainer = ({products})=>{
    const getProducts = new Promise((resolve) => {
        setTimeout(()=>{resolve(products)}, 500)
    })

    const [items, setItems] = useState([])
    
    getProducts.then(result => {
        setItems(result)
    })

    return (
        <div>
            <ItemList items={items}/>
            <Link to="/cart">Terminar compra</Link>
        </div>
    )
}

export default ItemListContainer;