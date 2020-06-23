import axios from 'axios'

const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS'
const GET_ONE_PRODUCT = 'GET_ONE_PRODUCT'
const REMOVE_ONE_PRODUCT = 'REMOVE_ONE_PRODUCT'

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

const removeProduct = productId => ({
  type: REMOVE_ONE_PRODUCT,
  productId
})

export const fetchProducts = () => {
  return async dispatch => {
    const {data} = await axios('/api/products')
    dispatch(gotProducts(data))
  }
}

export const deleteProduct = productId => {
  return async dispatch => {
    await axios.delete(`/api/products/${productId}`)
    dispatch(removeProduct(productId))
  }
}

const products = []

export default function productsReducer(state = products, action) {
  switch (action.type) {
    case GET_ALL_PRODUCTS: {
      return action.products
    }
    case REMOVE_ONE_PRODUCT: {
      console.log('action', action)
      console.log('state', state)
      return state.filter(product => product.id !== action.productId)
    }
    default:
      return state
  }
}
