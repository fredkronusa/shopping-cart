import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { applyDiscount } from '../actions'
import { getTotal, getCartProducts } from '../reducers'
import Cart from '../components/cart/Cart'

const CartContainer = ({ products, total, applyDiscount }) => (
  <Cart
    products={products}
    total={total}
    onApplyDiscountClicked={() => applyDiscount(products)} />
)

CartContainer.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    discountPrice: PropTypes.number,
    quantity: PropTypes.number.isRequired,
    productCode: PropTypes.string.isRequired
  })).isRequired,
  total: PropTypes.string,
  applyDiscount: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  products: getCartProducts(state),
  total: getTotal(state)
})

export default connect(
  mapStateToProps,
  { applyDiscount }
)(CartContainer)
