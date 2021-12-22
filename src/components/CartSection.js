import CartTable from "./CartTable"

const CartSection = () =>{

    return (
        <div style={{position:"fixed", top:0, left:0,height:"100vh", width:"100vw",backgroundColor:"rgba(0,0,0,0.2)"}}>
            <div style={{margin:"5rem 10rem",padding:"5rem", backgroundColor:"lightgray", borderRadius:"1rem"}}>
                <CartTable/>
            </div>
        </div>
    )
}

export default CartSection