import axios from 'axios'

const dummyData = [
  {
    id: 1,
    name: 'Paint & Wine Night',
    description: 'rhhtgti',
    imageUrl: 'https://www.onlygfx.com/10-abstract-acrylic-paint-texture-jpg/',
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
    description: 'hfotth',
    imageUrl: 'https://media.istockphoto.com/photos/dance-picture-id181083498',
    category: 'Dance',
    price: 20,
    amount: 300
  }
]

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
  return dispatch => {
    // const {data} = await axios('/api/products')
    dispatch(gotProducts(dummyData))
  }
}

export const fetchOneProduct = id => {
  return dispatch => {
    // const {data} = await axios(`/api/products/${id}`)
    dispatch(gotOneProduct(dummyData[0]))
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
