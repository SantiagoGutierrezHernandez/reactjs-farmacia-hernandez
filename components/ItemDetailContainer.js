import ItemDetail from "./ItemDetail"
import { useState, useEffect } from "react"

const ItemDetailContainer = ({item})=>{
    
    const [details, setDetails] = useState(undefined)
    
    const getDetails = new Promise((resolve) => {
        setTimeout(()=>{resolve(item)}, 2000)
    })
    
    //Al cambiar el item parametro, volvemos a obtener los detalles
    useEffect(()=>{
        getDetails.then(result =>{
            setDetails(result)
        })
    }, [item])
    
    if(details === undefined) return <div style={{display:"none"}}></div>

    return (
        <div style={{position:"fixed", top:0, left:0,height:"100vh", width:"100vw",backgroundColor:"rgba(0,0,0,0.2)"}}>
            <p>Detalles:</p>
            <ItemDetail details={details} onClose={()=>{setDetails(undefined)}}/>
        </div>
    )
}

export default ItemDetailContainer