import './App.css'
import Header from "./components/Header/Header"
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import Cart from './components/Cart/Cart'

function App() {

  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <Header/>
          <Routes>
            <Route element={<ItemListContainer/>} path="/"></Route>
            <Route element={<ItemListContainer/>} path="/category/:idCategory"></Route>
            <Route element={<ItemDetailContainer/>} path="/item/:idItem"></Route>
            <Route element={<Cart/>} path='/cart'></Route>
          </Routes>
          </CartProvider>
      </BrowserRouter>
    </>
  )
}

export default App