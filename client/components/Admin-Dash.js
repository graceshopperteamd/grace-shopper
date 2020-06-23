import React from 'react'
import {connect} from 'react-redux'
import {fetchProducts} from '../store/product'
import {OneProduct} from './One-Product'

class AdminDashboard extends React.Component {
  componentDidMount() {
    this.props.fetchProducts()
  }

  render() {
    return (
      <div>
        <h2>Welcome Admin!</h2>
        {/* {this.props.products.map((product) => (
          <OneProduct key={product.id} product={product} />
        ))} */}
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

export default connect(mapStateToProps, mapDispatchToProps)(AdminDashboard)
