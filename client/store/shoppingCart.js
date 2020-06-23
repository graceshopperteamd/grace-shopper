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
const removedItem = product => ({type: REMOVED_ITEM, product})
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
  return async dispatch => {
    try {
      const {data} = await axios.get('/api/cart')

      dispatch(gotCart(data))
    } catch (error) {
      dispatch(cartErrorAction(error))
    }
  }
}

export const removeItem = () => {
  return async dispatch => {
    try {
      const {data} = await axios.delete('/api/cart')

      dispatch(removedItem(data))
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
        dispatch(placeOrder(data))
      }
    } catch (error) {
      dispatch(orderErrorAction(error))
    }
  }
}

/**
 * REDUCER
 */
export function cartReducer(state = defaultCart, action) {
  switch (action.type) {
    // made chages to add to cart reducer as test to see if reducer was the reason items were not actually adding to the cart
    case ADD_TO_CART: {
      let newList = [...action.shoppingcart.products]
      newList.push(action.product)
      return {...action.shoppingcart, product}
    }
    case GOT_CART:
      return action.shoppingcart
    case CART_ERROR:
      return action.error
    default:
      return state
  }
}
