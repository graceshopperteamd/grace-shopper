import React from 'react'
import {connect} from 'react-redux'
import {fetchProducts, deleteProduct, updateProductQty} from '../store/product'
import {OneProduct} from './One-Product'

class AdminDashboard extends React.Component {
  constructor() {
    super()
    this.handleQtyChange = this.handleQtyChange.bind(this)
  }
  componentDidMount() {
    this.props.fetchProducts()
  }

  async handleQtyChange(event) {
    event.preventDefault()
    const data = event.target.quantity.value
    const productId = event.target.quantity.id
    console.log('productId', productId)
    // this.props.updateQty(productId, data)
    console.log(data)
  }

  render() {
    return (
      <div>
        <h2>Welcome Admin!</h2>
        {this.props.products.map(product => (
          <div key={product.id}>
            {/* {console.log('product', product)} */}
            <OneProduct product={product} />

            <form onSubmit={this.handleQtyChange}>
              <label htmlFor={product.id}>
                Quantity: <span> </span>
                <input
                  type="number"
                  id={product.id}
                  name="quantity"
                  min="0"
                  defaultValue={product.amount}
                />
                <button type="submit">Update Qty</button>
              </label>
            </form>

            <div>
              <label htmlFor="remove">
                <button
                  name="remove"
                  onClick={() => this.props.removeProduct(product.id)}
                >
                  Remove Item From Stock
                </button>
              </label>
            </div>
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
    removeProduct: productId => dispatch(deleteProduct(productId)),
    updateQty: (productId, qty) => dispatch(updateProductQty(productId, qty))
    // this.props.dispatch({type: 'UPDATE', id: this.props.})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminDashboard)
