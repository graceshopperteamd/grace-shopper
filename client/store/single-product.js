import axios from 'axios'

const GET_ONE_PRODUCT = 'GET_ONE_PRODUCT'

const gotOneProduct = currProduct => {
  return {
    type: GET_ONE_PRODUCT,
    currProduct
  }
}

export const fetchOneProduct = id => {
  return async dispatch => {
    const {data} = await axios(`/api/products/${id}`)
    dispatch(gotOneProduct(data))
  }
}

const currProduct = {}

export default function productsReducer(state = currProduct, action) {
  switch (action.type) {
    case GET_ONE_PRODUCT: {
      return action.currProduct
    }
    default:
      return state
  }
}
