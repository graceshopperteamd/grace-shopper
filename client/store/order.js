import axios from 'axios'

const PLACE_ORDER = 'PLACE_ORDER'
const ORDER_ERROR = 'ORDER_ERROR'

const placeOrder = order => ({type: PLACE_ORDER, order})
const orderErrorAction = error => ({type: ORDER_ERROR, error})

export const makeOrder = order => {
  return async dispatch => {
    try {
      const {data} = await axios.get('/api/order', order)
      if (data) {
        dispatch(placeOrder(data))
      }
    } catch (error) {
      dispatch(orderErrorAction(error))
    }
  }
}

const defaultOrder = []

export function orderReducer(state = defaultOrder, action) {
  switch (action.type) {
    case PLACE_ORDER: {
      return action.order
    }
    default:
      return state
  }
}
