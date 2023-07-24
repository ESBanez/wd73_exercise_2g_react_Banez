import { useEffect, useState } from "react"
import ProductItem from "../components/ProductItem"

function ProductGallery() {
  const [products, setProducts] = useState([])
  const [cartItemCounter, setCartItemCounter] = useState(0)
  
  useEffect(() => {
    document.title = 'Products'
  }, [])

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data.products)
      })
  }, [setProducts])

  function addToCart() {
    setCartItemCounter(cartItemCounter + 1)
  }

  return (
    <>
      <h3>Cart Items: <span className="fw-bold">{cartItemCounter}</span></h3>
      <div className="d-flex flex-wrap">
        {
          products.map(
            product => <ProductItem
              key={product.id}
              title={product.title}
              description={product.description}
              thumbnail={product.thumbnail}
              discountPercentage={product.discountPercentage}
              addToCart={addToCart}
            />
          )
        }
      </div>
    </>
  )
}

export default ProductGallery
