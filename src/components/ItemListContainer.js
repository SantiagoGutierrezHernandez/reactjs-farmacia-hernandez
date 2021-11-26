import ItemCount from "./ItemCount"

const ItemListContainer = ()=>{
    const products = [
    {name: "Prod1", stock: 4},
    {name: "Prod2", stock: 3},
    {name: "Prod3", stock: 7}
]

    return (
        <ul>
            {products.map((product)=>{
                return <li style={{backgroundColor:"lightgray", margin:"1rem auto", padding:"1rem", width:"fit-content", listStyle:"none", borderRadius:"1rem"}}>
                    <div>{product.name}</div>
                    <ItemCount initial={1} stock={product.stock} />
                    <button style={{border:"cornflowerblue", borderRadius:"1rem"}}>Agregar al carrito</button>
                </li>
            })}
        </ul>
    )
}
export default ItemListContainer;