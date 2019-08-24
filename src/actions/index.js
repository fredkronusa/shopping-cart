import shop from '../api/shop'
import * as types from '../constants/ActionTypes'

const receiveProducts = products => ({
  type: types.RECEIVE_PRODUCTS,
  products
})

export const getAllProducts = () => dispatch => {
  shop.getProducts(products => {
    dispatch(receiveProducts(products))
  })
}

const receiveDiscounts = discounts => ({
  type: types.RECEIVE_DISCOUNTS,
  discounts
})

export const getAllDiscounts = () => dispatch => {
  shop.getDiscounts(discounts => {
    dispatch(receiveDiscounts(discounts))
  })
}

export const addToCart = productId => (dispatch, getState) => {
  dispatch({
    type: types.ADD_TO_CART,
    productId
  })
}

export const applyDiscount = (products) => (dispatch, getState) => {
 const { cart } = getState()

  dispatch({
    type: types.CHECKOUT_REQUEST
  })

  dispatch({
    type: types.APPLY_DISCOUNT,
    products,
    cart
  })

  shop.buyProducts(products, () => {
    dispatch({
      type: types.CHECKOUT_FAILURE,
      cart,
      products
    })
    dispatch({
      type: types.APPLY_DISCOUNT,
      products,
      cart
    })
  })

    // Replace the line above with line below to rollback on failure:
    // dispatch({ type: types.CHECKOUT_FAILURE, cart })
 // })
}
