import axios from 'axios'

const dummyData = {
  id: 1,
  name: 'Paint & Wine Night',
  description: 'rhhtgti',
  imageUrl: 'https://www.onlygfx.com/10-abstract-acrylic-paint-texture-jpg/',
  category: 'Arts',
  price: 20,
  amount: 300
}

const GET_ONE_PRODUCT = 'GET_ONE_PRODUCT'

const gotOneProduct = currProduct => {
  return {
    type: GET_ONE_PRODUCT,
    currProduct
  }
}

export const fetchOneProduct = id => {
  return dispatch => {
    // const {data} = await axios(`/api/products/${id}`)
    dispatch(gotOneProduct(dummyData))
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
