import { getProduct } from "../../../asyncmock";
import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null); 

    const { idItem } = useParams();

    useEffect( () => {
        getProduct(idItem)
            .then(respuesta => setProduct(respuesta))
    }, [idItem])

  return (
    <div>
        <ItemDetail {...product} />
    </div>
  )
}

export default ItemDetailContainer