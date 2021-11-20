const ItemListContainer = ()=>{
    const products = ["Prod 1", "Prod 2", "Prod 3", "Prod 4", "Prod 5"]
    return (
        <ul>
            {products.map((i)=>{
                return <li>{i}</li>
            })}
        </ul>
    )
}
export default ItemListContainer;