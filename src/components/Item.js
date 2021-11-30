import ItemCount from "./ItemCount"

const Item = ({item}) => {
    return (
        <li style={{backgroundColor:"lightgray", margin:"1rem auto", padding:"1rem", width:"fit-content", listStyle:"none", borderRadius:"1rem"}}>
            <p>{item.name}</p>
            <p>${item.price}</p>
            <img src={process.env.PUBLIC_URL +item.img} alt={item.name} style={{width:"30rem"}}/>
            <ItemCount stock={item.stock} initial={1}/>
            <button style={{border:"cornflowerblue", borderRadius:"1rem"}}>Agregar al carrito</button>
        </li>
    )
}

export default Item