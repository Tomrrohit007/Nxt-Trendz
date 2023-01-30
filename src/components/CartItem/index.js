import {BsPlusSquare, BsDashSquare} from 'react-icons/bs'
import {AiFillCloseCircle} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import CartContext from '../../context/CartContext'

import './index.css'

const CartItem = props => (
  <CartContext.Consumer>
    {value => {
      const {
        removeCartItem,
        incrementCartItemQuantity,
        decrementCartItemQuantity,
        getSimilarItemId
      } = value
      const {cartItemDetails} = props
      const {id, title, brand, quantity, price, imageUrl} = cartItemDetails
      const onClickDecrement = () => {
        decrementCartItemQuantity(id)
      }
      const onClickIncrement = () => {
        incrementCartItemQuantity(id)
      }
      const onRemoveCartItem = () => {
        removeCartItem(id)
      }
      const similarId=()=>{
        getSimilarItemId(id)
      }
      const totalPrice = price * quantity

      return (
              <motion.li whileHover={{y:-4}} className="cart-item">
              <Link to={`/products/${id}`} className="nav-link" onClick={similarId}>
                <img className="cart-product-image" src={imageUrl} alt={title} />
              </Link>
                <div className="cart-item-details-container">
                  <div className="cart-product-title-brand-container">
                    <p className="cart-product-title">{title}</p>
                    <p className="cart-product-brand">by {brand}</p>
                  </div>
                  <div className="cart-quantity-container">
                   <button
                    type="button"
                    className="quantity-controller-button"
                    testid="minus"
                    onClick={onClickDecrement}
                  >
                    <BsDashSquare color="#52606D" size={12} />
                  </button>
                  <p className="cart-quantity">{quantity}</p>
                  <button
                    type="button"
                    className="quantity-controller-button"
                    testid="plus"
                    onClick={onClickIncrement}
                  >
                    <BsPlusSquare color="#52606D" size={12} />
                  </button>
                </div>
                <div className="total-price-remove-container">
                  <p className="cart-total-price">Rs {totalPrice}/-</p>
                  <button
                    className="remove-button"
                    type="button"
                    onClick={onRemoveCartItem}
                  >
                    Remove
                  </button>
                </div>
              </div>
              <button
                className="delete-button"
                type="button"
                onClick={onRemoveCartItem}
                testid="remove"
              >
                <AiFillCloseCircle color="#616E7C" size={20} />
          </button>
        </motion.li>
      )
    }}
  </CartContext.Consumer>
)

export default CartItem