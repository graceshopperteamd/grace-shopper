import axios from 'axios'

// dummy data for component
const dummyData = [
  {
    id: 1,
    name: 'Paint & Wine Night',
    description: 'rhhtgti',
    imageUrl:
      'https://media3.carredartistes.com/us/42587-large_default/Blues.jpg',
    category: 'Arts',
    price: 20,
    amount: 300
  },
  {
    id: 2,
    name: 'Build a Terranium',
    description: 'akftigt',
    imageUrl:
      'https://www.mudforest.com/wp-content/uploads/2019/04/small-glass-terrarium-4-1.jpeg',
    category: 'Crafts',
    price: 20,
    amount: 300
  },
  {
    id: 3,
    name: 'Salsa Night!',
    description: 'hfitgitho',
    imageUrl:
      'https://res.cloudinary.com/dostuff-media/image/upload//c_fill,g_faces,h_630,w_1200/v1549326262/event-10381952.jpg',
    category: 'Dance',
    price: 20,
    amount: 300
  }
]

/**
 * ACTION TYPES
 */
const GOT_CART = 'GOT_CART'
const ADD_TO_CART = 'ADD_TO_CART'
const CART_ERROR = 'CART_ERROR'

/**
 * INITIAL STATE
 */
const defaultCart = []

/**
 * ACTION CREATORS
 */
export const AddToCart = product => ({type: ADD_TO_CART, product})
const gotCart = shoppingcart => ({type: GOT_CART, shoppingcart})
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

export const fetchCart = () => {
  return async function getCartThunk(dispatch) {
    try {
      //eventually get cart data from DB, for now use dummy data
      let cart = dummyData

      dispatch(gotCart(cart))
    } catch (error) {
      dispatch(cartErrorAction(error))
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
    case GOT_CART:
      return action.shoppingcart
    case CART_ERROR:
      return action.error
    default:
      return state
  }
}
