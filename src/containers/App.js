import React from 'react'
import ProductsContainer from './ProductsContainer'
import CartContainer from './CartContainer'
import HeaderContainer from './HeaderContainer'

const App = () => (
  <div>
    <HeaderContainer />
    <div className="body-wrapper">
      <ProductsContainer />
      <CartContainer />
    </div>
  </div>
)

export default App
