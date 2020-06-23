import React from 'react'
import {connect} from 'react-redux'
import {fetchProducts, deleteProduct} from '../store/product'
import {OneProduct} from './One-Product'

class AdminDashboard extends React.Component {
  componentDidMount() {
    this.props.fetchProducts()
  }

  render() {
    return (
      <div>
        <h2>Welcome Admin!</h2>
        {this.props.products.map(product => (
          <div key={product.id}>
            <OneProduct product={product} />
            <button onClick={() => this.props.removeProduct(product.id)}>
              X
            </button>
            <hr />
          </div>
        ))}
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
    fetchProducts: () => dispatch(fetchProducts()),
    removeProduct: productId => dispatch(deleteProduct(productId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminDashboard)
