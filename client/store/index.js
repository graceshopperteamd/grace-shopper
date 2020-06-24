import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {cartReducer} from './shoppingCart'
import {orderReducer} from './order'
import userOrders from './userOrders'
import user from './user'
import products from './product'
import currProduct from './single-product'

const reducer = combineReducers({
  user,
  products,
  currProduct,
  shoppingcart: cartReducer,
  order: orderReducer,
  userOrders
})

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(reducer, middleware)

export default store
export * from './user'
