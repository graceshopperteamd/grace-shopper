import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {fetchCart} from '../store/shoppingCart'
import {checkoutForm} from './Checkout-Form'

class Cart extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.getCart()
  }

  render() {
    if (this.props.shoppingcart && this.props.shoppingcart.length > 0)
      return (
        <div>
          <h2> My Shopping Cart </h2>
          <div>{createCartDiv(this.props.shoppingcart)}</div>

          <div className="cartPageBtns">
            <Link to="/">
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

class Checkout extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.getCart()
  }

  render() {
    if (this.props.shoppingcart && this.props.shoppingcart.length > 0)
      return (
        <div>
          <h2> Checkout </h2>
          <div>{createCartDiv(this.props.shoppingcart)}</div>
          <div>{checkoutForm}</div>
        </div>
      )
    else return <div>No items to Checkout</div>
  }
}

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

const mapStateToProps = state => ({
  shoppingcart: state.shoppingcart
})

const mapDispatchToProps = dispatch => ({
  getCart: () => dispatch(fetchCart())
})

export const ConnectedCart = connect(mapStateToProps, mapDispatchToProps)(Cart)
export const ConnectedCheckout = connect(mapStateToProps, mapDispatchToProps)(
  Checkout
)
