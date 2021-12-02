const ItemDetail = ({details, onClose}) =>{
    return (
        <div style={{margin:"5rem 10rem",padding:"5rem", backgroundColor:"lightgray", borderRadius:"1rem"}}>
            <button style={{}} onClick={onClose}>Cerrar</button>
            <p>{details.name}</p>
            <img src={process.env.PUBLIC_URL + details.img} alt={details.name} style={{width:"30rem"}}></img>
            <p>{details.desc}</p>
            <p>${details.price}</p>
        </div>
    )
}

export default ItemDetail