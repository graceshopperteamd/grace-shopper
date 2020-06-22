import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {cartReducer} from './shoppingCart'
import user from './user'
import products from './product'
import userReducer from './profile'
import currProduct from './single-product'
import cart from './cart'

const reducer = combineReducers({
  user: userReducer,
  products,
  currProduct,
  shoppingcart: cartReducer
})

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(reducer, middleware)

export default store
export * from './user'
