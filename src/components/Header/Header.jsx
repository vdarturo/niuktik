import NavBar from "../NavBar/NavBar"
import CartWidget from "../CartWidget/CartWidget"

const Header = () => {
  return (
    <>
      <header className="p-4 border-y-2 flex items-center">
          <h1 className="text-2xl">Niuktik</h1>
          <NavBar/>
          <CartWidget/>
      </header>
    </>
  )
}

export default Header
