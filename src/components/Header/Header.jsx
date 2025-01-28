import NavBar from "../NavBar/NavBar"
import CartWidget from "../CartWidget/CartWidget"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <>
      <header className="p-4 border-y-2 flex items-center">
        <Link to="/">
          <h1 className="text-2xl">Niuktik</h1>
        </Link>
        <NavBar/>
        <CartWidget/>
      </header>
    </>
  )
}

export default Header
