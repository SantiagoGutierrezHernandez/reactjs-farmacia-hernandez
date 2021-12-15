import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import getProducts from "./utils/Products"
import CartSection from './components/CartSection';

//Estructura del HTML
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<ItemListContainer products={getProducts()}/>}/>
          <Route path="/item/:itemId" element={<ItemDetailContainer/>}/>
          <Route path="/cart" element={<CartSection/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;