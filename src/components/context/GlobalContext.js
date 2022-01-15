import React from "react"
import { useState } from "react/cjs/react.development"
import { fire } from "../../utils/EventManager"

const GlobalContext = React.createContext(null)

//En este context almacenaremos variables globales de nuestra app
const GlobalProvider = ({defaultValue = null, children})=>{
    const [loading, setLoading] = useState(false)
    const [notifications, setNotifications] = useState([])

    const addNotification = (paramNotification)=>{

        notifications.push(paramNotification)
        fire("onNotification", null)

        //Borrar la notificacion despues de 10 segundos
        setTimeout(()=>{
            deleteNotification(paramNotification)
        }, 10000)
    }

    const deleteNotification = (paramNotification)=>{
        notifications.splice(notifications.findIndex((elem)=>{return elem === paramNotification}), 1)
        fire("onNotification", null)
    }

    return (
        <GlobalContext.Provider value={{loading, setLoading, notifications, addNotification, deleteNotification}}>
            {children}
        </GlobalContext.Provider>
    )
}

export {GlobalContext}
export default GlobalProvider