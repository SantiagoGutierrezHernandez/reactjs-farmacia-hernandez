const add = (eType, listener)=>{
    document.addEventListener(eType, listener)
}
const remove = (eType, listener) =>{
    document.removeEventListener(eType, listener)
}
const fire = (eType, data) => {
    const e = new CustomEvent(eType, {detail: data})
    document.dispatchEvent(e)
}

export {add, remove, fire}