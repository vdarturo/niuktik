import { useContext} from "react"
import { CartContext} from "../../context/CartContext"
import CartItem from "../CartItem/CartItem";

const Cart = () => {
  const { cart, clear, total, quantityTotal} = useContext(CartContext);

  if(quantityTotal === 0){
    return (
      <>
        <h2>No hay productos en el carrito</h2>
      </>
    )
  }
  return(
    <>
      {
        cart.map(product => <CartItem key={product.item.id}{...product}/>)
      }
      <h3>Total: ${total}</h3>
      <h3>Total de productos: ${quantityTotal}</h3>
      <button className="flex mx-auto ms-8 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={()=> clear()}>Vaciar Carrito</button>
    </>
  )
}

export default Cart
