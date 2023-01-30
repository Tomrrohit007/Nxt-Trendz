import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import { motion } from 'framer-motion'

import CartContext from '../../context/CartContext'

import './index.css'

const variants = {
  initial:{
    y:"-20vh"
  },
  final:{
    y:0,
    transition:{
      duration:0.5
    }
  }
}


const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  const renderCartItemsCount = () => (
    <CartContext.Consumer>
      {value => {
        const {cartList} = value
        const cartItemsCount = cartList.length

        return (
          <>
            {cartItemsCount > 0 ? (
              <span className="cart-count-badge">{cartList.length}</span>
            ) : null}
          </>
        )
      }}
    </CartContext.Consumer>
  )

  return (
    <motion.nav variants={variants} initial="initial" animate="final" className="nav-header">
      <div className="nav-content">
        <div className="nav-bar-mobile-logo-container">
          <Link to="/">
            <img
              className="website-logo"
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt="website logo"
            />
          </Link>

          <button
            type="button"
            className="nav-mobile-btn"
            onClick={onClickLogout}
          >   
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
              alt="nav logout"
              className="nav-bar-img"
            />
          </button>
        </div>

        <div className="nav-bar-large-container">
          <Link to="/">
            <img
              className="website-logo"
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt="website logo"
            />
          </Link>
          <ul className="nav-menu">
            <motion.li whileHover={{y:-3}}  className="nav-menu-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </motion.li>

            <motion.li whileHover={{y:-3}} className="nav-menu-item">
              <Link to="/products" className="nav-link">
                Products
              </Link>
            </motion.li>

            <motion.li whileHover={{y:-3}} className="nav-menu-item">
              <Link to="/cart" className="nav-link">
                Cart
                {renderCartItemsCount()}
              </Link>
            </motion.li>
          </ul>
          <motion.button
          whileHover={{scale:1.01, y:-3}} whileTap={{scale:0.98, opacity:0.8}}
            type="button"
            className="logout-desktop-btn"
            onClick={onClickLogout}
          >
            Logout
          </motion.button>
        </div>
      </div>
      <div className="nav-menu-mobile">
        <ul className="nav-menu-list-mobile">
          <li className="nav-menu-item-mobile">
            <Link to="/" className="nav-link">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
                alt="nav home"
                className="nav-bar-img"
              />
            </Link>
          </li>

          <li className="nav-menu-item-mobile">
            <Link to="/products" className="nav-link">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
                alt="nav products"
                className="nav-bar-img"
              />
            </Link>
          </li>
          <li className="nav-menu-item-mobile">
            <Link to="/cart" className="nav-link">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
                alt="nav cart"
                className="nav-bar-img"
              />
              {renderCartItemsCount()}
            </Link>
          </li>
        </ul>
      </div>
    </motion.nav>
  )
}

export default withRouter(Header)
