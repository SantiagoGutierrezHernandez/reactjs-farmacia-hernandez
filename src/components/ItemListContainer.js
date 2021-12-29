import ItemList from "./ItemList"
import { useState } from "react"
import { Link } from "react-router-dom"
import {collection, getDocs, getFirestore, query, limit, where} from "firebase/firestore"
import { useEffect } from "react/cjs/react.development"
import { useParams } from "react-router-dom"
const ItemListContainer = ()=>{
    const [items, setItems] = useState(false)

    /*CATEGORIAS ACTUALES PARA PRUEBAS:
    Económico
    Crema
    Preparado
    */
    const {categoryId} = useParams()

    useEffect(()=>{
        const db= getFirestore();

        //Si no hay parametro no buscamos por categoria
        let q = null
        if(!categoryId)
            q = query(
                collection(db, "items"),
                limit(20)
            )
        else
            q = query(
                collection(db, "items"),
                where("category", "array-contains", categoryId),
                limit(20)
            )
        getDocs(q).then(snapshot =>{
            setItems(snapshot.docs.map(doc => ({id: doc.id, ...doc.data()})))
        })
    }, [categoryId])

    if(!items)
        return (<div>Cargando...</div>)
    return (
        <div>
            <ItemList items={items}/>
            <Link to="/cart">Terminar compra</Link>
        </div>
    )
}

export default ItemListContainer;