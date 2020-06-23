import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {fetchCart} from '../store/shoppingCart'
import {checkoutForm} from './Checkout-Form'

// cart page component
class Cart extends React.Component {
  constructor(props) {
    super(props)
    this.createCartDiv = this.createCartDiv.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleRemove = this.handleRemove.bind(this)
  }
  componentDidMount() {
    this.props.getCart()
  }

  // console.log('',);

  handleSubmit(event) {
    let qty = document.getElementById('cartQty').value
    console.log('qty', qty)

    if (!qty) alert('Please indicate the qty of items you wish to add')
    else {
      alert('submit', {event})
    }
  }

  handleRemove(event) {
    alert('remove', {event})
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
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="cartQty">Quantity</label>
            <input
              type="number"
              id="cartQty"
              min="1"
              max="20"
              placeholder="Qty"
            />
            <br />
            <button type="submit">Add To Cart</button>
          </form>
          <button onClick={this.handleRemove}>Remove</button>
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

// checkout page component
class Checkout extends React.Component {
  constructor(props) {
    super(props)
    this.createCheckoutDiv = this.createCheckoutDiv.bind(this)
  }
  componentDidMount() {
    this.props.getCart()
  }

  // factory func maps through all products in shopping cart and creates a component for each
  createCheckoutDiv(cartArray) {
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

  render() {
    if (this.props.shoppingcart && this.props.shoppingcart.length > 0)
      return (
        <div>
          <h2> Checkout </h2>
          <div>{this.createCheckoutDiv(this.props.shoppingcart)}</div>
          {/* Checkout form component which is imported from /components/Checkout-Form */}
          <div>{checkoutForm}</div>
        </div>
      )
    else return <div>No items to Checkout</div>
  }
}

const mapStateToProps = state => ({
  shoppingcart: state.shoppingcart,
  userId: state.userId
})

const mapDispatchToProps = dispatch => ({
  getCart: () => dispatch(fetchCart())
})

export const ConnectedCart = connect(mapStateToProps, mapDispatchToProps)(Cart)
export const ConnectedCheckout = connect(mapStateToProps, mapDispatchToProps)(
  Checkout
)
