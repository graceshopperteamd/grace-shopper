import axios from 'axios'

const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS'
const GET_ONE_PRODUCT = 'GET_ONE_PRODUCT'
const REMOVE_ONE_PRODUCT = 'REMOVE_ONE_PRODUCT'
const UPDATE_QTY = 'UPDATE_QTY'

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

const updateQty = product => ({
  type: UPDATE_QTY,
  product
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

export const updateProductQty = (productId, qty) => {
  return async dispatch => {
    // const {data} = await axios(`/api/products/${productId}`)
    // console.log('data', qty)
    // console.log(data)
    const newQty = parseInt(qty)
    console.log(newQty)
    // problem is updatedProduct, there is something wrong with the put request
    const updatedProduct = await axios.put(`/api/products/${productId}`, {
      productId,
      amount: newQty
    })
    dispatch(updateQty(updatedProduct))
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
      return state.filter(product => product.id !== action.productId)
    }
    case UPDATE_QTY: {
      console.log('state', state)
      return {...state, amount: action.qty}
    }
    default:
      return state
  }
}
