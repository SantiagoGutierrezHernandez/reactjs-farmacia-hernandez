import Item from "./Item"

const ItemList = ({items, loadDetails}) => {
    return (<ul className="d-flex flex-wrap">
            {items.map((item)=>{
                return (
                    <Item item={item} loadDetails={loadDetails}/>
                )
            })}
        </ul>)
}

export default ItemList