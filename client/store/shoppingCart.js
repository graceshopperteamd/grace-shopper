import axios from 'axios'

/**
 * ACTION TYPES
 */
const GOT_CART = 'GOT_CART'
const ADD_TO_CART = 'ADD_TO_CART'

const CART_ERROR = 'CART_ERROR'
const EDIT_CART = 'EDIT_CART'
const DELETE_ITEM = 'DELETE_ITEM'

/**
 * INITIAL STATE
 */
const defaultCart = []

/**
 * ACTION CREATORS
 */
export const AddToCart = product => ({type: ADD_TO_CART, product})
const gotCart = payload => ({type: GOT_CART, payload})
const editedCart = payload => ({type: EDIT_CART, payload})
const removedItem = payload => ({type: DELETE_ITEM, payload})
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

export const editCart = singleProduct => {
  return async dispatch => {
    try {
      const {data} = await axios.put('/api/cart/edit', singleProduct)
      if (data) {
        dispatch(editedCart(data))
      }
    } catch (error) {
      dispatch(cartErrorAction(error))
    }
  }
}

export const removeItem = singleProduct => {
  return async dispatch => {
    try {
      const {data} = await axios.delete('/api/cart/edit', singleProduct)
      if (data) {
        dispatch(removedItem(data))
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
    case ADD_TO_CART: {
      return action.product
    }
    case GOT_CART: {
      return state.payload
    }
    case EDIT_CART: {
      return action.payload
    }
    case DELETE_ITEM: {
      return action.payload
    }
    case CART_ERROR:
      return action.error
    default:
      return state
  }
}
