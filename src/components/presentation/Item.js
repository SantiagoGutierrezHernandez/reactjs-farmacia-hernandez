import { Link } from "react-router-dom"
import ItemCount from "../containers/ItemCount"

const Item = ({item}) => {
    return (
        <li className="d-flex flex-column align-items-center" style={{backgroundColor:"lightgray", margin:"1rem", padding:"1rem", width:"fit-content", listStyle:"none", borderRadius:"1rem"}}>
            <p style={{fontWeight:"bolder"}}>{item.name}</p>
            <img style={{width:"25rem"}} src={process.env.PUBLIC_URL + item.img} alt={item.name}></img>
            <p>Precio: ${item.price}</p>
            <ul className="d-flex flex-column align-items-center justify-content-center category-list">
                {item.category.map((category, index)=>{
                    //Si es el ultimo item no tiene bordes, sino tiene solo abajo para marcar una separacion
                    switch (index) {
                        case item.category.length -1:
                            return (<li key={category} className="category-item list-unstyled">{category}</li>)
                        default:
                            return (<li key={category} className="category-item list-unstyled" style={{borderBottom:"1px solid lightgray"}}>{category}</li>)
                    }
                })}
            </ul>
            <ItemCount item={item} stock={item.stock} initial={1}/>
            <Link to={`/item/${item.id}`} style={{backgroundColor:"rgb(239, 239, 239)",border:"cornflowerblue 1px solid", borderRadius:"1rem", padding:"1px 6px", color:"black", fontStyle:"normal", fontWeight:"normal"}}>Ver Detalles</Link>
        </li>
    )
}

export default Item