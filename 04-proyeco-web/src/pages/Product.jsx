import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
const Product = () => {
  const myRequest = new Request('../assets/lentes.json')
  const [product, setProduct] = useState({})
  const productId = useParams().id /* guarda valor de id que esta en el route product/:id */
  useEffect(() => {
    fetch(myRequest)
      .then((response) => {
        return response.json()
      }).then((glasses) => {
        const oneProduct = glasses.find((item) => item.id === productId)
        setProduct(oneProduct)
      }).catch((error) => {
        console.error(error)
      })
  }, [])

  if (!product) {
    return <div>Error:produco no encontrado</div>
  }
  /* productId saca solo el id con ayuda del useParam.id */
  return (
    <div>
      <p>El ID del producto es {productId}</p>
      <h2>Producto:{product.title}</h2>
      <p>Description:{product.description}</p>
      <h2>Precio: {product.price}</h2>

    </div>
  )
}

export default Product
