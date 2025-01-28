

const ItemCount = () => {
  return (
    <div className="flex justify-between">
      <div className="input-group max-w-32" data-input-number>
        <span className="input-group-text gap-3">
          <button type="button" className="btn btn-primary btn-soft size-[22px] rounded min-h-0 p-0" aria-label="Decrement button" data-input-number-decrement>
            <span className="icon-[tabler--minus] size-3.5 flex-shrink-0"></span>
          </button>
        </span>
        <input className="input text-center" id="number-input-mini" type="text" value="0" data-input-number-input />
        <span className="input-group-text gap-3">
          <button type="button" className="btn btn-primary btn-soft size-[22px] rounded min-h-0 p-0" aria-label="Increment button" data-input-number-increment>
            <span className="icon-[tabler--plus] size-3.5 flex-shrink-0"></span>
          </button>
        </span>
      </div>
      <button className="flex mx-auto ms-8 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Agregar</button>
    </div>
  )
}

export default ItemCount
