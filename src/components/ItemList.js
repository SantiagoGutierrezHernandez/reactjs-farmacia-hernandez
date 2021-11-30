import Item from "./Item"

const ItemList = ({items}) => {
    return (<ul className="d-flex flex-wrap">
            {items.map((item)=>{
                return (
                    <Item item={item}/>
                )
            })}
        </ul>)
}

export default ItemList