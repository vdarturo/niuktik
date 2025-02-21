import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({id, name, price, img, stock, description}) => {
  // eslint-disable-next-line no-unused-vars
  const [quantityItem, setQuantityItem] = useState(0); 
  const { addProduct } = useContext(CartContext); 

  const quantityHandler = (quantity) => {
    setQuantityItem(quantity);
    const item = {id, name, price}; 
    addProduct(item, quantity); 
  }

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-3/5 mx-auto flex flex-wrap">
          <img alt={name} className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={img}/>
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{name}</h1>
            <p className="leading-relaxed">{description}</p>
            <div className="flex items-center pb-5 border-b-2 border-gray-100 mb-5"></div>
            <div className="flex justify-between">
              <span className="title-font font-medium text-2xl text-gray-900">${price}</span>
              <ItemCount stock={stock} addItemCart={quantityHandler}/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ItemDetail