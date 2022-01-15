import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import {collection, getDocs, getFirestore, query, limit, where} from "firebase/firestore"
import { useEffect } from "react/cjs/react.development"
import { useParams } from "react-router-dom"
import ItemList from "../presentation/ItemList"
import Subtitle from '../presentation/Subtitle'
import { GlobalContext } from "../context/GlobalContext"
import SearchForm from "../presentation/SearchForm"
import {add, remove} from "../../utils/EventManager"

const ItemListContainer = ()=>{
    const [items, setItems] = useState(false)
    const {categoryId} = useParams()

    const globalCtx = useContext(GlobalContext)

    //Montaje
    useEffect(()=>{
        add("onFilter", queryList)

        const db= getFirestore();
        globalCtx.setLoading(true)

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
            globalCtx.setLoading(false)
        })
    }, [categoryId])
    //Desmonaje
    useEffect(()=>()=>{
        remove("onFilter", queryList)
    })

    const queryList = ()=>{
        setItems(undefined)
        const db= getFirestore();
        globalCtx.setLoading(true)
        
        const NAME = document.getElementById("filter-text").value
        let category = document.getElementById("filter-tags").value
        //Si no hay parametro no buscamos por categoria
        let q = null
        if(category === "Todos") q = query(
            collection(db, "items"),
            )
        else q = query(
            collection(db, "items"),
            where("category", "array-contains", category),
            )
        getDocs(q).then(snapshot =>{
            let newItems = []
            snapshot.docs.forEach(doc => {
                if(doc.data().name.toLowerCase().includes(NAME.toLowerCase()))
                    newItems.push({id: doc.id, ...doc.data()})
            })
            if(!newItems.length) newItems = null
            setItems(newItems)
            globalCtx.setLoading(false)
        })
    }

    if(globalCtx.loading || items === undefined)
        return (
            <section className="content-box light-background d-flex flex-column align-items-center justify-content-center">
                <Subtitle text={"Lista de productos"}/>
                <div style={{fontWeight:"bolder", fontSize:"3rem"}}>Cargando...</div>
            </section>
        )

    return (
        <section className="content-box light-background d-flex flex-column align-items-center justify-content-center">
            <Subtitle text={"Lista de productos"}/>
            <SearchForm/>
            <div style={{margin:"3rem", padding:"1rem", backgroundColor:"#553528", borderRadius:"1.5rem"}}>
                <ItemList items={items}/>
                <Link to="/cart">Terminar compra</Link>
            </div>
        </section>
    )
}

export default ItemListContainer;