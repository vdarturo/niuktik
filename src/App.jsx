import './App.css'
import Header from "./components/Header/Header"
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route element={<ItemListContainer/>} path="/"></Route>
          <Route element={<ItemListContainer/>} path="/category/:idCategory"></Route>
          <Route element={<ItemDetailContainer/>} path="/item/:idItem"></Route>  
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App