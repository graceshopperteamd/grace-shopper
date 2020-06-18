const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART'

export const addProductToCart = currProduct => {
  return {
    type: ADD_PRODUCT_TO_CART,
    currProduct
  }
}

const cart = []

export default function productsReducer(state = cart, action) {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART: {
      return [...cart, action.currProduct]
    }
    default:
      return state
  }
}
