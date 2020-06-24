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

  handleEditCart(event) {
    event.preventDefault()
    alert('Back to Cart successfuly, will now dispatch thunk to edit cart info')

    const eventInfo = {
      qty: '',
      productId: '',
      userId: ''
    }

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
