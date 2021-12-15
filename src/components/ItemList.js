import Item from "./Item"

const ItemList = ({items}) => {
    return (<ul className="d-flex flex-wrap">
            {items.map((item)=>{
                return (
                    <Item key={item.name} item={item}/>
                )
            })}
        </ul>)
}

export default ItemList