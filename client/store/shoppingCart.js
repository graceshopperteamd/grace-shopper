import axios from 'axios'

/**
 * ACTION TYPES
 */
const GOT_CART = 'GOT_CART'
const ADD_TO_CART = 'ADD_TO_CART'
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
  return async function getCartThunk(dispatch) {
    try {
      //eventually get cart data from DB, for now use dummy data
      let {data} = await axios.get('/api/cart')

      dispatch(gotCart(data))
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
    case ADD_TO_CART: {
      return action.product
    }
    case GOT_CART: {
      return state
    }
    case CART_ERROR:
      return action.error
    default:
      return state
  }
}
