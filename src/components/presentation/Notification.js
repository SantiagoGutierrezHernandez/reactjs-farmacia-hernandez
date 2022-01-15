const Notification = ({notificationObj, clickCallback}) =>{
    let bgcolor
    let color = "white"
    
    switch (notificationObj.severity) {
        case "warning":
            bgcolor = "#ffc107"
            color="black"
            break;
        case "error":
            bgcolor = "#dc3545"
            break;
        default:
            bgcolor = "#198754"
            break;
        }

    return <div style={{backgroundColor: bgcolor, color:color, fontSize:"1.6rem", padding:"1rem", width:"100%", minHeight:"10vh", 
        display:"flex", justifyContent:"center", alignItems:"center", border:"1px solid black"}}
        onClick={clickCallback}> {notificationObj.message + "\nToque para cerrar."} </div>
    
}

export default Notification