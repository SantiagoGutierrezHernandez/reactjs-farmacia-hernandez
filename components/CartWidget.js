//import widget from "/images/cart-widget.png"
const CartWidget = ()=>{
    return (
        <div style={{height:"3rem"}}>
          <img className="h-100" src={process.env.PUBLIC_URL +"/images/cart-widget.png"} alt="Cart icon"/>   
        </div>
    );
}
export default CartWidget;