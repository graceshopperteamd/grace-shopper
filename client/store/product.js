import axios from 'axios'

const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS'
const GET_ONE_PRODUCT = 'GET_ONE_PRODUCT'

const gotProducts = products => {
  return {
    type: GET_ALL_PRODUCTS,
    products
  }
}

const gotOneProduct = currProduct => {
  return {
    type: GET_ONE_PRODUCT,
    currProduct
  }
}

export const fetchProducts = () => {
  return async dispatch => {
    const {data} = await axios('/api/products')
    dispatch(gotProducts(data))
  }
}

const products = []

export default function productsReducer(state = products, action) {
  switch (action.type) {
    case GET_ALL_PRODUCTS: {
      return action.products
    }
    default:
      return state
  }
}
