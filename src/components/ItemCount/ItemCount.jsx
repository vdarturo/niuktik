import { useState } from "react";

const ItemCount = ({stock, addItemCart}) => {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    if(counter < stock) {
      setCounter(counter+1);
    }
  }

  const decrementCounter = () => {
    if(counter > 0){
      setCounter(counter-1);
    }
  }

  return (
    <div className="flex justify-between">
      <div className="flex justify-between border-2">
        <button className="flex text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={decrementCounter}> - </button>
        <span className="flex px-8 py-2">{counter}</span>
        <button className="flex text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={incrementCounter}> + </button>
      </div>
      <button className="flex mx-auto ms-8 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={() => addItemCart(counter)}>Agregar</button>
    </div>
  )
}

export default ItemCount
