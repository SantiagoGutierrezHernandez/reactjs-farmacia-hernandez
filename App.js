import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer"
import {useState} from "react"

//Agregar color de fondo
document.getElementsByTagName("body")[0].style.backgroundColor = "cornflowerblue"

//Estructura del HTML
function App() {
  const products = [
    {name: "Crema de limpieza", stock: 4, price: 230.5, img:"/images/crema-limpieza.jpg", desc:"Descripcion del producto"},
    {name: "Agua de rosas", stock: 3, price: 320, img:"/images/agua-rosas.jpg", desc:"Descripcion del producto"},
    {name: "Crema antiage con acido hialuronico", stock: 7, price: 460.5, img:"/images/crema-antiage-hialuronico.jpg", desc:"Descripcion del producto"}
]

 const [itemDetail, setItemDetail] = useState(undefined)

  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer products={products} loadDetails={(item)=>{setItemDetail(item)}}/>
      <ItemDetailContainer item={itemDetail}/>
    </div>
  );
}

export default App;