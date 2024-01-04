import './App.css'
import Navbar from './components/navbar/Navbar'
import ItemListContainer from './components/itemListContainer/ItemListContainer'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import CartView from './components/CartView/CartView';
import {CartProvider } from './context/CartContext';
import { UserProvider } from './context/UserContext';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>

        <Navbar />

          <Routes>
            <Route path="/" element={ <ItemListContainer /> } />
            <Route path="/category/:categoryId" element={ <ItemListContainer /> } />
            <Route path="/item/:itemId" element={ <ItemDetailContainer /> } />
            <Route path="/cart" element={ <CartView />} />
            <Route path="/not-found" element={ <h2>Not found</h2> }/>
            <Route path="*" element={ <Navigate to={"/not-found"}/> }/>
          </Routes>
      
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
