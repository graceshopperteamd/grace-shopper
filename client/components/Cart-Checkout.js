import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {fetchCart} from '../store/shoppingCart'

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

          <div>
            <form onSubmit={handleSubmit} name={name} className="checkoutForm">
              <label htmlFor="name">
                {' '}
                <small>Full Name</small>{' '}
              </label>
              <div>
                <div>
                  {' '}
                  <input name="name" type="text" placeholder="FirstName" />{' '}
                </div>
                <div>
                  {' '}
                  <input
                    name="lastName"
                    type="text"
                    placeholder="LastName"
                  />{' '}
                </div>
              </div>

              <label htmlFor="streetAddress">
                {' '}
                <small>Shipping Address</small>{' '}
              </label>
              <div>
                <div>
                  {' '}
                  <input
                    name="streetAddress"
                    type="text"
                    placeholder="Street Address"
                  />{' '}
                </div>
                <div>
                  {' '}
                  <input name="aptNum" type="text" placeholder="Apt#" />{' '}
                </div>
                <div>
                  {' '}
                  <input name="city" type="text" placeholder="City" />{' '}
                </div>
                <div>
                  {' '}
                  <input name="state" type="text" placeholder="State" />{' '}
                </div>
                <div>
                  {' '}
                  <input name="zip" type="text" placeholder="ZIP Code" />{' '}
                </div>
              </div>

              <label htmlFor="cardType">
                {' '}
                <small>Payment Information</small>{' '}
              </label>
              <div>
                <div>
                  {' '}
                  <input
                    name="cardType"
                    type="text"
                    placeholder="Visa, MasterCard, etc"
                  />{' '}
                </div>
                <div>
                  {' '}
                  <input
                    name="cardNum"
                    type="password"
                    placeholder="Credit/Debit Card #"
                  />{' '}
                </div>
                <div>
                  {' '}
                  <input
                    name="expiration"
                    type="text"
                    placeholder="Expiration Date"
                  />{' '}
                </div>
                <div>
                  {' '}
                  <input
                    name="securityCode"
                    type="password"
                    placeholder="Security Code"
                  />{' '}
                </div>
              </div>

              <div className="CheckoutPageBtns">
                <Link to="/">
                  <button type="button">Back to Browse</button>
                </Link>

                <button type="submit">Finish Checking Out</button>
              </div>
            </form>
          </div>
        </div>
      )
    else return <div>No items to Checkout</div>
  }
}

const handleSubmit = () => {
  return alert('YAY! Your Order has been placed!!')
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
