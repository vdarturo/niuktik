import { NavLink } from "react-router-dom"


const NavBar = () => {
  return (
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <NavLink className="mr-5 hover:text-blue-500" to="/category/1">Dulces</NavLink>
      <NavLink className="mr-5 hover:text-blue-500" to="/category/2">Botanas</NavLink>
    </nav>
  )
}

export default NavBar