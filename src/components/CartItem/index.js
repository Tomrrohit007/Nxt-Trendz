import {BsPlusSquare, BsDashSquare} from 'react-icons/bs'
import {AiFillDelete} from 'react-icons/ai'
import { Link } from 'react-router-dom'
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
              <li className="cart-item">
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
                    <BsDashSquare color="#52606D" size="12px" />
                  </button>
                  <p className="cart-quantity">{quantity}</p>
                  <button
                    type="button"
                    className="quantity-controller-button"
                    testid="plus"
                    onClick={onClickIncrement}
                  >
                    <BsPlusSquare color="#52606D" size="12px" />
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
                <AiFillDelete color='#52606d' size="18px" />
          </button>
        </li>
      )
    }}
  </CartContext.Consumer>
)

export default CartItem