import './App.css'
import Navbar from './components/navbar/Navbar'
import ItemListContainer from './components/itemListContainer/ItemListContainer'
import { BrowserRouter, Routes, Route, Navigate,Link } from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import CartView from './components/CartView/CartView';
import { CartProvider } from './context/CartContext';
import { UserProvider } from './context/UserContext';
import Checkout from './components/checkout/Checkout';
import Button from './components/utilidades/Button';
function App() {
  return (
    <CartProvider>
      <BrowserRouter>

        <Navbar />

        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<CartView />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path="/not-found" element={<div>
            <h2 className='text-4xl font-semibold'>Elemento no encontrado</h2> 
            <button className="rounded-md bg-gray-300 hover:bg-blue-500 hover:text-white w-1/6 p-3 m-4 text-lg font-semibold">
                    <Link to="/">Volver al inicio</Link></button>
            </div>} />
          <Route path="*" element={<Navigate to={"/not-found"} />} />
        </Routes>

      </BrowserRouter>
    </CartProvider>
  )
}

export default App
