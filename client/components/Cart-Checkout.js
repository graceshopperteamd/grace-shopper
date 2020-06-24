import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {QtyForm} from './Quantity-Change-Form'
import {editCart} from '../store/shoppingCart'
import {fetchCart} from '../store/shoppingCart'

class Cart extends React.Component {
  constructor(props) {
    super(props)

    this.handleEditCart = this.handleEditCart.bind(this)
    this.createCartDiv = this.createCartDiv.bind(this)
  }

  componentDidMount() {
    this.props.getCart()
    if (this.props.userId) {
      window.localStorage.clear()
    }
  }

  handleEditCart(eventState) {
    const eventInfo = {
      qty: eventState.value,
      productId: eventState.id
    }

    console.log(
      'In frontEnt editCart handler. Will dispatch thunk to edit cart info with the following info:',
      eventInfo
    )
    this.props.editCart(eventInfo)
  }

  createCartDiv = (cartArray = []) => {
    return cartArray.map(item => {
      return (
        <div key={item.id} className="cartItems">
          <img src={item.imageUrl} />
          <div>
            <div>Product: {item.name}</div>
            <div>Price: ${item.price}</div>
            {item.CartProducts ? (
              <div>Quantity: {item.CartProducts.itemAmount}</div>
            ) : (
              ''
            )}
          </div>
          <QtyForm
            shoppingCart={this.props.shoppingCart}
            userId={this.props.userId}
            name={item.name}
            id={item.id}
            handleEditCart={this.handleEditCart}
          />
        </div>
      )
    })
  }

  render() {
    let cart = this.props.shoppingcart[0]

    if (cart && cart.products && cart.products.length > 0)
      return (
        <div>
          <h2> My Shopping Cart </h2>
          <div>{this.createCartDiv(cart.products)}</div>

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
    else return <div>No items in your Shopping Cart</div>
  }
}

const mapStateToProps = state => ({
  shoppingcart: state.shoppingcart,
  userId: state.user.id
})

const mapDispatchToProps = dispatch => ({
  getCart: () => dispatch(fetchCart()),
  editCart: obj => dispatch(editCart(obj))
})

// totalPrice += item.price;
// totalQty += item.amount;
// console.log(`total price: ${totalPrice},   total quantity: ${totalQty}`);

export const ConnectedCart = connect(mapStateToProps, mapDispatchToProps)(Cart)
