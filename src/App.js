import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import CartSection from './components/CartSection';
import CartProvider from './components/CartContext';

//Inicializacion de firebase
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyAwU5V7H6FxXecskA1otTOadBZDkgnJMZo",
  authDomain: "farmacia-hernandez-react.firebaseapp.com",
  projectId: "farmacia-hernandez-react",
  storageBucket: "farmacia-hernandez-react.appspot.com",
  messagingSenderId: "86002687439",
  appId: "1:86002687439:web:9a7f80baab004fd008c6ba"
};

initializeApp(firebaseConfig);

//Estructura del HTML
function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <Navbar/>
          <Routes>
              <Route exact path="/" element={<ItemListContainer/>}/>
              <Route exact path="/:categoryId" element={<ItemListContainer/>}/>
              <Route path="/item/:itemId" element={<ItemDetailContainer/>}/>
              <Route path="/cart" element={<CartSection/>}/>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;