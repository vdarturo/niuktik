//import NavBar from "../NavBar/NavBar"
//import ShoppingCartWidget from "../ShoppingCartWidget/ShoppingCartWidget"

import NavBar from "../NavBar/NavBar"
import ShoppingCartWidget from "../ShoppingCartWidget/ShoppingCartWidget"

const Header = () => {
  return (
    <>
      <header className="p-4 border-y-2 flex items-center">
          <h1 className="text-2xl">Niuktik</h1>
          <NavBar/>
          <ShoppingCartWidget/>
      </header>
    </>
  )
}

export default Header
