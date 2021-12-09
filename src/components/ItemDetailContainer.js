import ItemDetail from "./ItemDetail"
import { useState, useEffect } from "react"
import getProducts from "./Products"
import { useParams } from "react-router-dom"

const ItemDetailContainer = ()=>{
    const {itemId} = useParams()

    const [details, setDetails] = useState(undefined)
    
    const getDetails = new Promise((resolve) => {
        setTimeout(()=>{resolve(getProducts()[itemId])}, 2000)
    })
    
    //Al cambiar el item parametro, volvemos a obtener los detalles
    useEffect(()=>{
        getDetails.then(result =>{
            setDetails(result)
        })
    }, [itemId])
    
    if(details === undefined) return <div style={{display:"none"}}></div>

    return (
        <div style={{position:"fixed", top:0, left:0,height:"100vh", width:"100vw",backgroundColor:"rgba(0,0,0,0.2)"}}>
            <p>Detalles:</p>
            <ItemDetail details={details} onClose={()=>{setDetails(undefined)}}/>
        </div>
    )
}

export default ItemDetailContainer