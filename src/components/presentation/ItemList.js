import Item from "./Item"

const ItemList = ({items}) => {
    if(!items) return <div style={{fontWeight:"bolder", fontSize:"3rem", color:"white"}}>No hay items</div>
    return (<ul className="d-flex flex-wrap justify-content-center">
            {items.map((item)=>{
                return (
                    <Item key={item.name} item={item}/>
                )
            })}
        </ul>)
}

export default ItemList