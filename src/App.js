import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import getProducts from "./utils/Products"
import CartSection from './components/CartSection';
import CartProvider from './components/CartContext';

//Estructura del HTML
function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <Navbar/>
          <Routes>
              <Route exact path="/" element={<ItemListContainer products={getProducts()}/>}/>
              <Route path="/item/:itemId" element={<ItemDetailContainer/>}/>
              <Route path="/cart" element={<CartSection/>}/>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;