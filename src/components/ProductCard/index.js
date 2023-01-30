import {Link} from 'react-router-dom'
import { motion } from 'framer-motion'
import './index.css'

const ProductCard = props => {
  const {productData} = props
  const {title, brand, imageUrl, rating, price, id} = productData

  return (
    <motion.li whileHover={{scale:1.02, padding:14, borderRadius:13}} initial={{y:"100vh", opacity:0, scale:0.4}} animate={{y:0, opacity:1, scale:1}} transition={{type:"spring", mass:0.4, damping:10}} className="product-item" >
      <Link to={`/products/${id}`} className="link-item">
        <img src={imageUrl} alt="product" className="thumbnail" />
        <h1 className="title">{title}</h1>
        <p className="brand">by {brand}</p>
        <div className="product-details">
          <p className="price">Rs {price}/-</p>
          <div className="rating-container">
            <p className="rating">{rating}</p>
            <img
              src="https://assets.ccbp.in/frontend/react-js/star-img.png"
              alt="star"
              className="star"
            />
          </div>
        </div>
      </Link>
    </motion.li>
  )
}
export default ProductCard
