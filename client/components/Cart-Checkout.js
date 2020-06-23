import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {fetchCart} from '../store/shoppingCart'
import {removeItem} from '../store/shoppingCart'
import {checkoutForm} from './Checkout-Form'
import {ConnectedQtyForm} from './Quantity-Change-Form'

// cart page component
class Cart extends React.Component {
  constructor(props) {
    super(props)
    this.createCartDiv = this.createCartDiv.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }
  componentDidMount() {
    this.props.getCart()
  }

  handleClick(event) {
    event.preventDefault()

    const product = {
      id: this.props.currProduct.id,
      userId: this.props.userId
    }
    console.log(product.id)
    this.props.handleRemove(product)
  }

  // factory func maps through all products in shopping cart and creates a component for each
  createCartDiv(cartArray) {
    return cartArray.map(item => (
      <div key={item.id} className="cartItems">
        <img src={item.imageUrl} />
        <div>
          <div>Product: {item.name}</div>
          <div>Price: ${item.price}</div>
        </div>
        <div>
          <ConnectedQtyForm item={item} />
          <button onClick={this.handleClick}>Remove</button>
        </div>
      </div>
    ))
  }

  render() {
    if (this.props.shoppingcart && this.props.shoppingcart.length > 0)
      return (
        <div>
          <h2> My Shopping Cart </h2>
          <div>{this.createCartDiv(this.props.shoppingcart)}</div>

          <div className="cartPageBtns">
            <Link to="/products">
              <button type="button">Back to Browse</button>
            </Link>
            <Link to="/checkout">
              <button type="button">Checkout</button>
            </Link>
          </div>
        </div>
      )
    else return <div>No items to Checkout</div>
  }
}

const mapStateToProps = state => ({
  shoppingcart: state.shoppingcart
})

const mapDispatchToProps = dispatch => ({
  getCart: () => dispatch(fetchCart())
})

const createCartDiv = cartArray => {
  return cartArray.map(item => (
    <div key={item.id} className="cartItems">
      <img src={item.imageUrl} />
      <div>
        <div>Product: {item.name}</div>
        <div>Price: ${item.price}</div>
      </div>
    </div>
  ))
}

export const ConnectedCart = connect(mapStateToProps, mapDispatchToProps)(Cart)
