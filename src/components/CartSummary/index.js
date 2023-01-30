// Write your code here
import CartContext from '../../context/CartContext'
import { motion } from 'framer-motion'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const priceArray = cartList.map(
        eachValue => eachValue.price * eachValue.quantity,
      )
      const priceSum = priceArray.reduce((a, b) => a + b, 0)
      return (
        <div className="cart-summary-container">
          <h1 className="total-order">
            Order Total: <span className="price-total">Rs {priceSum}/- </span>
          </h1>
          <p className="total-quantity">{cartList.length} Items in cart</p>
          <motion.button
           whileHover={{scale:1.01, y:-3}} whileTap={{scale:0.98, opacity:0.8}}
          type="button" className="check-out">
            Checkout
          </motion.button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary