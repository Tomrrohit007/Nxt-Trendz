import './index.css'
import CartContext from '../../context/CartContext'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const SimilarProductItem = props => {
  const {productDetails} = props
  const {id, title, brand, imageUrl, rating, price} = productDetails

  return(
    <CartContext.Consumer>
      {value => {
      const {getSimilarItemId} = value

      const similarId=()=>{
        getSimilarItemId(id)
      }
  
        return (
          <Link className='nav-link' to={`/products/${id}`} onClick={similarId}>
    <motion.li 
    whileHover={{y:-10}}
    className="similar-product-item">
      <img
        src={imageUrl}
        className="similar-product-img"
        alt={`similar product ${title}`}
      />
      <p className="similar-product-title">{title}</p>
      <p className="similar-products-brand">by {brand}</p>
      <div className="similar-product-price-rating-container">
        <p className="similar-product-price">Rs {price}/-</p>
        <div className="similar-product-rating-container">
          <p className="similar-product-rating">{rating}</p>
          <img
            src="https://assets.ccbp.in/frontend/react-js/star-img.png"
            alt="star"
            className="similar-product-star"
          />
        </div>
      </div>
    </motion.li>
      </Link>
        )
      }}
    </CartContext.Consumer>
  )
}

export default SimilarProductItem
