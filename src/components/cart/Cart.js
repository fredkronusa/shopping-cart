import React from 'react'
import PropTypes from 'prop-types'
import Product from '../product/Product'
//import { useState } from 'react';

const Cart  = ({ products, total, onApplyDiscountClicked }) => {
  const hasProducts = products.length > 0
  //const [setdiscountCode] = useState('');
  const nodes = hasProducts ? (
    products.map(product =>
      <Product
        title={product.title}
        price={product.price}
        discountPrice={product.discountPrice}
        productCode={product.productCode}
        quantity={product.quantity}
        key={product.id}
      />
    )
  ) : (
    <em>Please add some products to cart.</em>
  )
      //<input defaultValue={discountCode} placeholder='enter discount' onInput={e => setdiscountCode(e.target.value)}/>

  return (
    <div>
      <h3>Your Cart</h3>
      <div>{nodes}</div>
      <p>Total: &#36;{total}</p>
      <button onClick={onApplyDiscountClicked}
        disabled={hasProducts ? '' : 'disabled'}>
        Apply Discount
      </button>
    </div>
  )
}

Cart.propTypes = {
  products: PropTypes.array,
  total: PropTypes.string,
  onApplyDiscountClicked: PropTypes.func
}

export default Cart
