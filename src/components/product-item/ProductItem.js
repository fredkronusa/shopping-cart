import React from 'react'
import PropTypes from 'prop-types'
import Product from '../product/Product'
import './ProductItem.scss';

const ProductItem = ({ product, onAddToCartClicked }) => (
  <div className="product-item">
    <Product
      id={product.productCode}
      title={product.title}
      price={product.price}
      discountPrice={product.discountPrice}
      productCode={product.productCode} />
    <button
      onClick={onAddToCartClicked}>
      Add to cart
    </button>
  </div>
)

ProductItem.propTypes = {
  product: PropTypes.shape({
    productCode: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    discountPrice: PropTypes.number
  }).isRequired,
  onAddToCartClicked: PropTypes.func.isRequired
}

export default ProductItem
