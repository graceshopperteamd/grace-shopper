import React from 'react'
// import {fetchProducts} from '../store/products'
import {OneProduct} from './One-Product'

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
export class AllProducts extends React.Component {
  constructor() {
    super()
    this.state = {
      products: dummyData
    }
  }
  componentDidMount() {
    // this.props.fetchProducts()
  }

  render() {
    return (
      <div>
        <h2>Our Packages!</h2>
        {this.state.products.map(product => (
          <OneProduct key={product.id} product={product} />
        ))}
      </div>
    )
  }
}

// const mapStateToProps = state => {
//   return {
//     products: state.products.products
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     fetchProducts: () => dispatch(fetchProducts())
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(AllProducts)
