import axios from 'axios'

/**
 * ACTION TYPES
 */
const GOT_CART = 'GOT_CART'
const ADD_TO_CART = 'ADD_TO_CART'
const PLACE_ORDER = 'PLACE_ORDER'
const CART_ERROR = 'CART_ERROR'

/**
 * INITIAL STATE
 */
const defaultCart = []

/**
 * ACTION CREATORS
 */

export const AddToCart = product => ({type: ADD_TO_CART, product})

const gotCart = shoppingcart => ({type: GOT_CART, shoppingcart})
const cartErrorAction = error => ({type: CART_ERROR, error})
const placeOrder = order => ({type: PLACE_ORDER, order})

/**
 * THUNK CREATORS
 */

export const addProdToCart = singleProd => {
  return async dispatch => {
    try {
      const {data} = await axios.put('/api/cart', singleProd)
      if (data) {
        dispatch(AddToCart(data))
      }
    } catch (error) {
      dispatch(cartErrorAction(error))
    }
  }
}

export const fetchCart = () => {
  return async dispatch => {
    try {
      const {data} = await axios.get('/api/cart')

      dispatch(gotCart(data))
    } catch (error) {
      dispatch(cartErrorAction(error))
    }
  }
}

// thunk used by edit and remove cart buttons to edit quantity of items in cart
export const editCart = eventInfo => {
  return async dispatch => {
    try {
      console.log(
        '************ In redux thunk, nothing here yet. With access to following info: ',
        eventInfo
      )
      // API request to change info in DB for user cart will go here
    } catch (error) {
      dispatch(cartErrorAction(error))
    }
  }
}

export const makeOrder = order => {
  return async dispatch => {
    try {
      const {data} = await axios.post('/api/order', order)
      if (data) {
        await dispatch(placeOrder(data))
        dispatch(fetchCart())
      }
    } catch (error) {
      dispatch(cartErrorAction(error))
    }
  }
}
/**
 * REDUCER
 */
export function cartReducer(state = defaultCart, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return action.product
    case GOT_CART:
      return action.shoppingcart
    case CART_ERROR:
      return action.error
    case PLACE_ORDER:
      return action.order
    default:
      return state
  }
}
