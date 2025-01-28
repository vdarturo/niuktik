const products = [
  {id:1, name: "Bubbaloo", price: 50, stock: 5, img: "../img/bubbaloo.jpeg", idCategory: 1, description: "Goma de mascar, caja con 30 piezas, sabor fresa"},
  {id:2, name: "TixTix", price: 60, stock: 3, img: "../img/tixtix.jpeg", idCategory: 1, description: "Barritas aciditas, caja con 25 piezas, sabor limon"},
  {id:3, name: "Mentos", price: 40, stock: 1, img: "../img/mentos.jpeg", idCategory: 1, description: "Caramelo suave, caja con 25 piezas, sabor menta"},
  {id:4, name: "Pelon Pelo Rico", price: 80, stock: 4, img: "../img/pelon.jpeg", idCategory: 1, description: "Dulce enchilado, caja con 12 piezas, sabor tamarindo"},
  {id:5, name: "Kipi Chuchitos", price: 48, stock: 7, img: "../img/kipis.jpeg", idCategory: 2, description: "Botana de maíz enchilada, con 20 piezas"},
  {id:6, name: "Totis", price: 70, stock: 2, img: "../img/totis.jpeg", idCategory: 2, description: "Botana de trigo sabor a sal y limón, con 25 piezas"},
  {id:7, name: "Cacahuate Japones", price: 25, stock: 6, img: "../img/cacahuates_japoneses.jpeg", idCategory: 2, description: "Cacahuate estilo japonés, con 50 piezas"}
]

export const getProducts = () => {
  return new Promise( resolve => {
    setTimeout(() => {
      resolve(products);
    }, 500)
  })
}

export const getProduct = (idProduct) => {
  return new Promise( resolve => {
    setTimeout(() => {
      const product = products.find(item => item.id == idProduct)
      resolve(product);
    }, 500)
  })
} 

export const getProductsByCategory = (idCategory) => {
  return new Promise(resolve => {
    setTimeout(() => {
      const productsCategory = products.filter(item => item.idCategory == idCategory)
      resolve(productsCategory);
    }, 500)
  })
}