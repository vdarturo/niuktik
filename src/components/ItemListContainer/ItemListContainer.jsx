import { useParams } from "react-router-dom";
import { getProducts, getProductsByCategory } from "../../../asyncmock";
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";

const ItemDetailContainer = () => {
  const [products, setProducts] = useState([]);
  const { idCategory } = useParams();

  useEffect(() => {
    if(idCategory){
      getProductsByCategory(idCategory).then(response => setProducts(response))
    }else{
      getProducts().then(response => setProducts(response))
    }
  }, [idCategory])

  return (
    <div>
        <ItemList products={products} />
    </div>
  )
}

export default ItemDetailContainer