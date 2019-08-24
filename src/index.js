import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import reducer from './reducers'
import { getAllProducts, getAllDiscounts } from './actions'
import App from './containers/App'
import './index.scss';

const middleware = [ thunk ];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

// const store = createStore(
//   reducer,
//   applyMiddleware(...middleware)
// )

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
    applyMiddleware(...middleware)
  ));


store.dispatch(getAllProducts())
store.dispatch(getAllDiscounts())

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
