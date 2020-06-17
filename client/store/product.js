import axios from 'axios'

const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS'

export const gotProducts = products => {
  return {
    type: GET_ALL_PRODUCTS,
    products
  }
}

// export const fetchProducts = () => {
//   return async dispatch => {
//     const {data} = await axios('/api/products')
//     dispatch(gotProducts(data))
//   }
// }

const initialState = {
  products: [],
  currProduct: {}
}

export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_PRODUCTS: {
      return {...state, products: action.products}
    }
    default:
      return state
  }
}
