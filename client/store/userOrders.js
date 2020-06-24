import axios from 'axios'

const ORDER_ERROR = 'ORDER_ERROR'
const GET_ORDERS = 'GET_ORDERS'

const orderErrorAction = error => ({type: ORDER_ERROR, error})
const gotOrders = orders => ({type: GET_ORDERS, orders})

export const fetchOrders = id => {
  return async dispatch => {
    try {
      const {data} = await axios(`/api/order/${id}`)
      if (data) {
        dispatch(gotOrders(data))
      }
    } catch (error) {
      dispatch(orderErrorAction(error))
    }
  }
}

const defaultOrders = []

export default function orderReducer(state = defaultOrders, action) {
  switch (action.type) {
    case GET_ORDERS: {
      return action.orders
    }
    default:
      return state
  }
}
