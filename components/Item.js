import ItemCount from "./ItemCount"

const Item = ({item, loadDetails}) => {
    return (
        <li style={{backgroundColor:"lightgray", margin:"1rem auto", padding:"1rem", width:"fit-content", listStyle:"none", borderRadius:"1rem"}}>
            <p>{item.name}</p>
            <p>${item.price}</p>
            <ItemCount stock={item.stock} initial={1}/>
            <button onClick={()=>{loadDetails(item)}} style={{border:"cornflowerblue", borderRadius:"1rem"}}>Ver Detalles</button>
            <br/>
            <button style={{border:"cornflowerblue", borderRadius:"1rem"}}>Agregar al carrito</button>
        </li>
    )
}

export default Item