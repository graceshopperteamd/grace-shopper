import React from 'react'
import {connect} from 'react-redux'
import {fetchProducts} from '../store/product'
import {OneProduct} from './One-Product'
import {Container, CardColumns} from 'react-bootstrap'

class AllProducts extends React.Component {
  componentDidMount() {
    this.props.fetchProducts()
  }

  render() {
    return (
      <div>
        <br />
        <h3>Our Packages:</h3>
        <br />
        <CardColumns>
          {this.props.products.map(product => (
            <OneProduct key={product.id} product={product} />
          ))}
        </CardColumns>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    products: state.products
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchProducts: () => dispatch(fetchProducts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllProducts)
