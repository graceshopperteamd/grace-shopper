import React from 'react'
import {Link} from 'react-router-dom'
import {makeOrder} from '../store/order'
import {connect} from 'react-redux'
import {createCartDiv} from './Cart-Checkout'
import {checkoutForm} from './Checkout-Form'
import {fetchCart} from '../store/shoppingCart'

class Checkout extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.props.getCart()
  }

  render() {
    console.log('props', this.props)
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

const mapStateToProps = state => {
  return {
    shoppingCart: state.shoppingCart,
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
