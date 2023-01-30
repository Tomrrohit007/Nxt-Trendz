import {Link} from 'react-router-dom'
import {motion} from "framer-motion"

import './index.css'
const childVariants = {
  initial:{
    y:"50vw",
    opacity:0,
    scale:0
  },
  final:{
    y:0,
    opacity:1,
    scale:1,
    transition:{
      type:'spring',
      delay:0.3,
      mass:0.5,
      damping:10
    }
  }
}

const EmptyCartView = () => (
  <motion.div inital={{scale:0}} animate={{scale:1}} transition={{duration:1, when:"beforeChildren", staggerChildren:0.3}} className="cart-empty-view-container">
    <motion.img variants={childVariants} initial="initial" animate="final"

      src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-empty-cart-img.png"
      className="cart-empty-img"
      alt="cart empty"
    />
    <motion.h1 variants={childVariants} initial="initial" animate="final" className="cart-empty-heading">Your Cart Is Empty</motion.h1>

    <Link to="/products">
      <motion.button variants={childVariants} initial="initial" animate="final" type="button" className="shop-now-btn">
        Shop Now
      </motion.button>
    </Link>
  </motion.div>
)

export default EmptyCartView
