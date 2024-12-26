import './App.css'
import Header from "./components/Header/Header"
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {

  return (
    <>
      <Header/>
      <main>
        <ItemListContainer greeting="Hola!!!"/>
      </main>
    </>
  )
}

export default App
