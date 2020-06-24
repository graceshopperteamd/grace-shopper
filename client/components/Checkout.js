import React from 'react'
import {connect} from 'react-redux'
import {CheckoutForm} from './Checkout-Form'
import {fetchCart} from '../store/shoppingCart'
import {makeOrder} from '../store/order'
import {OrderCompleteMessage} from './OrderCompleted'

const cartProducts = (cartArray = []) => {
  return cartArray.map(item => (
    <div key={item.id} className="cartItems">
      <img src={item.imageUrl} />
      <div>
        <div>Product: {item.name}</div>
        <div>Price: ${item.price}</div>
        {item.CartProducts ? (
          <div>Quantity: {item.CartProducts.itemAmount}</div>
        ) : (
          <div>Quantity: {item.quantity}</div>
        )}
      </div>
    </div>
  ))
}

class Checkout extends React.Component {
  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    this.props.getCart()
    if (this.props.userId) {
      window.localStorage.clear()
    }
  }

  // eslint-disable-next-line complexity
  handleSubmit(evt) {
    event.preventDefault()
    if (!this.props.userId) {
      return alert('Please login or signup')
    }
    if (
      evt.target.streetAddress.value === '' ||
      evt.target.city.value === '' ||
      evt.target.state.value === '' ||
      evt.target.zip.value === '' ||
      evt.target.cardType.value === '' ||
      evt.target.cardNum.value === '' ||
      evt.target.securityCode.value === '' ||
      evt.target.expiration.value === ''
    ) {
      return alert('Please fill out all imput fields')
    }

    const address = `${evt.target.streetAddress.value}, ${
      evt.target.city.value
    }, ${evt.target.state.value}, ${evt.target.zip.value}`
    const payment = `${evt.target.cardType.value}, ${
      evt.target.cardNum.value
    }, ${evt.target.securityCode.value}, ${evt.target.expiration.value}`

    const order = {
      shoppingCart: this.props.shoppingCart,
      address,
      payment
    }

    this.props.makeOrder(order)
  }

  render() {
    let prodsInCart = this.props.shoppingCart[0]
    if (!this.props.userId) {
      prodsInCart = JSON.parse(window.localStorage.getItem(`guestCart`))
    }

    if (this.props.order && !prodsInCart) {
      return (
        <div>
          <OrderCompleteMessage />
        </div>
      )
    }
    if (prodsInCart && prodsInCart.products) {
      console.log('PRODS', prodsInCart)
      return (
        <div>
          <br />
          <h3> Checkout </h3>
          <div>{cartProducts(prodsInCart.products)}</div>
          <p> Total items: {prodsInCart.totalAmount}</p>
          <p>Your Total: $ {prodsInCart.totalPrice}</p>
          <CheckoutForm
            handleSubmit={this.handleSubmit}
            shoppingCart={this.props.shoppingCart}
            userId={this.props.userId}
          />
        </div>
      )
    } else {
      return <div>No items to Checkout</div>
    }
  }
}

const mapStateToProps = state => {
  return {
    shoppingCart: state.shoppingcart,
    userId: state.user.id,
    order: state.order
  }
}
const mapDispatchToProps = dispatch => {
  return {
    getCart: () => dispatch(fetchCart()),
    makeOrder: order => dispatch(makeOrder(order))
  }
}

export const ConnectedCheckout = connect(mapStateToProps, mapDispatchToProps)(
  Checkout
)
