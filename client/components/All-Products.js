import React from 'react'
import {connect} from 'react-redux'
import {fetchProducts} from '../store/product'
import {OneProduct} from './One-Product'

export class AllProducts extends React.Component {
  componentDidMount() {
    this.props.fetchProducts()
  }

  render() {
    return (
      <div>
        <h2>Our Packages!</h2>
        {this.props.products.map(product => (
          <OneProduct key={product.id} product={product} />
        ))}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    products: state.products.products
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchProducts: () => dispatch(fetchProducts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllProducts)
