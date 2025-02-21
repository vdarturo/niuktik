import { NavLink } from "react-router-dom";

const Item = ({id, name, price, img}) => {
  return (
    <div className="xl:w-1/6 md:w-1/2 p-4">
      <div className="p-6 border-2 border-gray-200 border-opacity-60 rounded-lg">
        <img className="h-40 rounded w-lg object-cover object-center mb-6" src={img} alt={name}/>
        <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{name}</h2>
        <span className="title-font font-medium text-2xl text-gray-900">${price}</span>
        <div className="flex items-center flex-wrap h-10">
          <NavLink className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0" to={`/item/${id}`}>Ver Detalles</NavLink>
        </div>
      </div>
    </div>
  )
}

export default Item