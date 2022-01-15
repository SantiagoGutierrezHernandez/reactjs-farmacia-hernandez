import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import CartProvider from './components/context/CartContext';
import GlobalProvider from './components/context/GlobalContext';

import CartSection from './components/containers/CartSection';
import TitleCarousel from "./components/presentation/TitleCarousel"
import Navbar from './components/presentation/Navbar';
import ItemListContainer from "./components/containers/ItemListContainer"
import ItemDetailContainer from "./components/containers/ItemDetailContainer"
import AboutUs from './components/presentation/AboutUs';
import Footer from './components/presentation/Footer';

//Inicializacion de firebase
import { initializeApp } from 'firebase/app';
import NotificationContainer from './components/containers/NotificationContainer';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId
};
initializeApp(firebaseConfig);

//Estructura del HTML
function App() {
  return (
    <div className="App">
      <GlobalProvider>
        <CartProvider>
          <BrowserRouter>
            <Navbar/>
            <TitleCarousel/>
            <NotificationContainer/>
            <Routes>
                <Route exact path="/" element={<ItemListContainer/>}/>
                <Route exact path="/:categoryId" element={<ItemListContainer/>}/>
                <Route path="/about" element={<AboutUs/>}/>
                <Route path="/item/:itemId" element={<ItemDetailContainer/>}/>
                <Route path="/cart" element={<CartSection/>}/>
            </Routes>
            <Footer/>
          </BrowserRouter>
        </CartProvider>
      </GlobalProvider>
    </div>
  );
}

export default App;