import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from "./components/ItemListContainer"

//Agregar color de fondo
document.getElementsByTagName("body")[0].style.backgroundColor = "cornflowerblue"

//Estructura del HTML
function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer/>
    </div>
  );
}

export default App;