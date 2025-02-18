import './App.css';
import ItemDetailContainer from './Components/ItemDetailContainer';
import ItemListContainer from './Components/ItemListContainer';
import Navbar from './Components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contacto from "./Components/Contacto"
import Checkout from './Components/Checkout';
import Cart from './Components/Cart';
import { CartProvider } from './Components/CartContext';
import './Components/firebase/data.js'

function App() {

  return (
    <div>
    <CartProvider>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/Productos' element={<ItemListContainer/>}/>
          <Route path='/Productos/:category' element={<ItemListContainer/>}/>
          <Route path='/item/:id' element={<ItemDetailContainer/>}/>
          <Route path='/Contacto' element={<Contacto/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
          <Route path='/Cart' element={<Cart/>}/>
        </Routes>
      </BrowserRouter>
    </CartProvider>
    </div>
  );
}
export default App;
