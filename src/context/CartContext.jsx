import { useState, createContext } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const CartContext = createContext({
  cart: [],
  total: 0,
  quantityTotal: 0
})

export const CartProvider = ({children}) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [quantityTotal, setQuantityTotal] = useState(0);

  const addProduct = (item, quantity) => {
    const product = cart.find(prod => prod.item.id === item.id);

    if (!product) {
      setCart(prev => [...prev, { item, quantity }]);
      setQuantityTotal(prev => prev + quantity);
      setTotal(prev => prev + (item.price * quantity));
    } else {
      const updateCart = cart.map(prod => {
        if (prod.item.id === item.id) {
          return { ...prod, quantity: prod.quantity + quantity };
        } else {
          return prod;
        }
      })
      setCart(updateCart);
      setQuantityTotal(prev => prev + quantity);
      setTotal(prev => prev + (item.price * quantity));
    }
  }

  const removeProduct = (id) => {
    const removeProduct = cart.find(prod => prod.item.id === id);
    const updateCart = cart.filter(prod => prod.id !== id);

    if(removeProduct.quantity > 0){
      setCart(updateCart);
      setQuantityTotal(prev => prev - removeProduct.quantity);
      setTotal(prev => prev - (removeProduct.item.price * removeProduct.quantity));
    }
  }

  const clear = () => {
    setCart([]);
    setQuantityTotal(0);
    setTotal(0);
  }

    return (
      <CartContext.Provider value={{cart, total, quantityTotal, addProduct, removeProduct, clear}}>
        {children}
      </CartContext.Provider>
    )
}
//En el value enviamos el valor actual del carrito, los items, el total de la compra y las funciones de agregar, eliminar y vaciar carrito. 