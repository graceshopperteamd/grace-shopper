import React from 'react'
import {connect} from 'react-redux'
import {fetchOneProduct} from '../store/product'
import {addProductToCart} from '../store/cart'

class OneProduct extends React.Component {
  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  componentDidMount() {
    this.props.fetchOneProduct(this.props.match.params.id)
  }

  handleSubmit(event) {
    event.preventDefault()
    const input = Number(document.getElementById('quantity').value)
    console.log(input)
    const product = {...this.props.currProduct, quantity: input}
    this.props.addToCart(product)
  }

  render() {
    return (
      <div>
        <h3>{this.props.currProduct.name}</h3>
        <img src={this.props.currProduct.imageUrl} />
        <p>price: {this.props.currProduct.price}</p>
        <p>What you're getting: {this.props.currProduct.description}</p>

        <form onSubmit={this.handleSubmit}>
          <label htmlFor="quantity">Quantity</label>
          <input
            type="number"
            id="quantity"
            min="1"
            max="20"
            placeholder="quantity"
          />
          <br />
          <button type="submit">Add To Cart</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    currProduct: state.currProduct
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchOneProduct: id => dispatch(fetchOneProduct(id)),
    addToCart: obj => dispatch(addProductToCart(obj))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OneProduct)
