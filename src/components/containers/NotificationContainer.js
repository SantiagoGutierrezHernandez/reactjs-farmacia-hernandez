import { GlobalContext } from "../context/GlobalContext"
import { useContext } from "react"
import { useEffect, useState } from "react/cjs/react.development"
import {add, remove} from "../../utils/EventManager"
import Notification from "../presentation/Notification"

const NotificationContainer = () =>{
    const globalCtx = useContext(GlobalContext)
    let navHeight=45

    const [notifications, setNotifications] = useState(globalCtx.notifications.slice(0))

    const updateNotifications = ()=>{setNotifications(globalCtx.notifications.slice(0))}

    useEffect(()=>{
        add("onNotification", updateNotifications)
        navHeight = document.getElementsByTagName("nav")[0].clientHeight
    }, [])
    useEffect(()=>()=>{
        remove("onNotification", updateNotifications)
    },[])

    return (
        <div style={{position:"sticky", top: navHeight+"px", width: "100%", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
            {notifications.map((elem, index)=>{
                return <Notification key={elem.toString() + index} notificationObj={elem} clickCallback={()=>{globalCtx.deleteNotification(elem)}}/>
            })}
        </div>
    )
}

export default NotificationContainer