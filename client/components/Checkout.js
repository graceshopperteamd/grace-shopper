import React from 'react'
import {Link} from 'react-router-dom'
import {makeOrder} from '../store/order'
import {connect} from 'react-redux'
import {checkoutForm} from './Checkout-Form'
import {fetchCart} from '../store/shoppingCart'

const cartProducts = cartArray => {
  console.log(cartArray)
  return cartArray.map(item => (
    <div key={item.id} className="cartItems">
      <img src={item.imageUrl} />
      <div>
        <div>Product: {item.name}</div>
        <div>Price: ${item.price}</div>
        <div>Quantity: {item.CartProducts.itemAmount}</div>
      </div>
    </div>
  ))
}

class Checkout extends React.Component {
  componentDidMount() {
    this.props.getCart()
  }

  render() {
    const prodsInCart = this.props.shoppingCart[0] || {}

    if (this.props.shoppingCart && this.props.shoppingCart.length > 0) {
      return (
        <div>
          <h2> Checkout </h2>
          <div>{cartProducts(prodsInCart.products)}</div>
          <p> Total items: {prodsInCart.totalAmount}</p>
          <p>Your Total: $ {prodsInCart.totalPrice}</p>
          <checkoutForm makeOrder={this.props.makeOrder} />
        </div>
      )
    } else return <div>No items to Checkout</div>
  }
}

const mapStateToProps = state => {
  return {
    shoppingCart: state.shoppingcart,
    userId: state.user.id
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
