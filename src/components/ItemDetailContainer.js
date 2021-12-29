import ItemDetail from "./ItemDetail"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getFirestore, getDocs, collection} from "firebase/firestore"
import { Link } from "react-router-dom"

const ItemDetailContainer = ()=>{
    const {itemId} = useParams()

    const [details, setDetails] = useState(undefined)
    
    //Al cambiar el item parametro, volvemos a obtener los detalles
    useEffect(()=>{
        const db= getFirestore();
        
        const itemsCollection = collection(db, "items")

        /* const q = query(
            collection(db, "items"),
            where("id", "==", itemId),
            limit(1)
        ) */

        /* Había intentado utilizando query con el id, pero ya que no funcionaba
        (Habia puesto algo similar a where("id", "==", itemId), limit(1)), 
        tome la base de datos y agarre solo el item
        que coincide manualmente con un iterador*/

        getDocs(itemsCollection).then(snapshot =>{
            let match = false

            //Buscamos una coincidencia con el id
            snapshot.docs.forEach(doc =>{
                if(!match && doc.id === itemId)
                {
                    setDetails({id: doc.id, ...doc.data()})
                    match = true;
                }
            })
            if(!match){
                console.log(`No se encontro ningun item con el id ${itemId}`)
                setDetails(undefined)
            }
        })
    }, [itemId])
    
    if(details === undefined) return <div style={{display:"none"}}></div>

    return (
        <div style={{position:"fixed", top:0, left:0,height:"100vh", width:"100vw",backgroundColor:"rgba(0,0,0,0.2)"}}>
            <div style={{margin:"0px 5rem",padding:"5rem", backgroundColor:"lightgray", borderRadius:"1rem"}}>
                <p>Detalles:</p>
                <ItemDetail details={details} onClose={()=>{setDetails(undefined)}}/>
                <Link to="/cart">Ir al carrito</Link>
            </div>
        </div>
    )
}

export default ItemDetailContainer