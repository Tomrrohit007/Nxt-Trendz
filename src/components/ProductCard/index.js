import {Link} from 'react-router-dom'
import { motion } from 'framer-motion'
import './index.css'


const itemVariants = {
  initial:{
    y:"10vh",
    opacity:0.8,
    scale:0.9
  },
  final:{
    y:0,
    scale:1,
    opacity:1,
    transition:{
      duration:0.1,
      type:"spring",
      mass:0.3,
      damping:12,
      ease:"easeInOut"
    }
  }
} 


const ProductCard = props => {
  const {productData} = props
  const {title, brand, imageUrl, rating, price, id} = productData

  return (
    <motion.li whileHover={{y:-10}} variants={itemVariants} initial="initial" whileInView="final" className="product-item" >
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
