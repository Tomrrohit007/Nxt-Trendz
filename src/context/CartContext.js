import React from 'react'

const CartContext = React.createContext({
  cartList: [],
  removeAllCartItems: () => {},
  addCartItem: () => {},
  removeCartItem: () => {},
  incrementCartItemQuantity: () => {},
  decrementCartItemQuantity: () => {},
  getSimilarItemId:()=>{}
})

export default CartContext
