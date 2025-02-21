import { CartContext} from "../../context/CartContext"
import { useContext} from "react"

const CartItem = ({item, quantity}) => {
  const { removeProduct} = useContext(CartContext)

  return (
    <div>
      <h4>{item.name}</h4>
      <p>Cantidad: {quantity}</p>
      <p>Precio: {item.price}</p>
      <button onClick={()=> removeProduct(item.id)}>Eliminar</button>
      <hr/>
    </div>
  )
}

export default CartItem