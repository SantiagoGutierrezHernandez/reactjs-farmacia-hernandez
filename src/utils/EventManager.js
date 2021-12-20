//Agrega al listener a la lista de receptores de evento eType
const add = (eType, listener)=>{
    document.addEventListener(eType, listener)
}
//Elimina al listener de los eventos
const remove = (eType, listener) =>{
    document.removeEventListener(eType, listener)
}
//Crea y dispara un evento con los datos y tipo especificados
const fire = (eType, data) => {
    const e = new CustomEvent(eType, {detail: data})
    document.dispatchEvent(e)
}

export {add, remove, fire}