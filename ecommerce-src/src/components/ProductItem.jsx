function ProductItem(props) {
  const { title, description, thumbnail, discountPercentage, addToCart } = props

  let saleBanner;
  if (discountPercentage > 10) {
    saleBanner = <span className="fw-bold text-danger">SALE!!!</span>
  }
  
  return (
    <>
    <div className="card" style={{
      width: '18rem'
    }}>
      <img src={thumbnail} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title} {saleBanner}</h5>
        <p className="card-text">{description}</p>
        <button className="btn btn-primary" onClick={addToCart}>Add to Cart</button>
      </div>
    </div>
    </>
  )
}

export default ProductItem
