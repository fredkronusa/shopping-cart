import React from 'react'
import PropTypes from 'prop-types'
import './Product.scss';


const Product = ({ discountPrice, price, quantity, title, productCode }) => (
  <div className="product">
    <div className='image'><img  src={`/${productCode}.png`}  alt={title} /></div>
    <div className='title'>{title}</div>
    <div className='price'>${price}</div>
    <div className='price'>${discountPrice}</div>
  </div>
)

Product.propTypes = {
  productCode: PropTypes.string,
  price: PropTypes.number,
  discountPrice: PropTypes.number,
  quantity: PropTypes.number,
  title: PropTypes.string
}

export default Product
