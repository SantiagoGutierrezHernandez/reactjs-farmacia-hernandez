import ItemDetail from "../presentation/ItemDetail"
import { useState, useEffect, useContext } from "react"
import { useParams } from "react-router-dom"
import { getFirestore, getDocs, collection} from "firebase/firestore"
import { Link } from "react-router-dom"
import Subtitle from "../presentation/Subtitle"
import { GlobalContext } from "../context/GlobalContext"

const ItemDetailContainer = ()=>{
    const {itemId} = useParams()

    const [details, setDetails] = useState(undefined)
    
    const globalCtx = useContext(GlobalContext)
    
    //Al cambiar el item parametro, volvemos a obtener los detalles
    useEffect(()=>{
        const db= getFirestore();
        
        const itemsCollection = collection(db, "items")

        globalCtx.setLoading(true)

        /* const q = query(
            collection(db, "items"),
            where("id", "==", itemId),
            limit(1)
        ) */

        /* Había intentado utilizando query con el id, pero ya que no funcionaba
        (No leia bien la propiedad id a pesar que en el console log figuraba como tal,
        el codigo original se encuentra arriba), 
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
            globalCtx.setLoading(false)
        })
    }, [itemId])
    
    if(details === undefined) return (
        <section className="content-box light-background d-flex flex-column align-items-center justify-content-center">
            <Subtitle text={"Detalles del producto"}/>
            <div style={{fontWeight:"bolder", fontSize:"3rem"}}>Cargando...</div>
        </section>
    )
    return (
        <section className="content-box light-background d-flex flex-column align-items-center justify-content-center">
            <Subtitle text={"Detalles del producto"}/>
            <ItemDetail details={details} onClose={()=>{setDetails(undefined)}}/>
            <Link to="/cart">Ir al carrito</Link>
        </section>
    )
}

export default ItemDetailContainer