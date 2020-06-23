import React from 'react'
import {connect} from 'react-redux'
import {fetchOneProduct} from '../store/single-product'
import {addProdToCart, AddToCart} from '../store/shoppingCart'
import {Link} from 'react-router-dom'

class OneProduct extends React.Component {
  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  componentDidMount() {
    if (!this.props.userId && !window.localStorage.getItem('guestCart')) {
      const guestCart = {
        products: [],
        totalPrice: 0,
        totalAmount: 0
      }
      window.localStorage.setItem('guestCart', JSON.stringify(guestCart))
    } else {
      this.props.fetchOneProduct(this.props.match.params.id)
    }
  }

  handleSubmit(event) {
    event.preventDefault()

    const quantity = Number(document.getElementById('quantity').value)
    if (!this.props.userId) {
      let currCart = JSON.parse(window.localStorage.getItem(`guestCart`))
      let product = {...this.props.currProduct, quantity: quantity}
      let itemInCart = false

      currCart.products.forEach(prod => {
        if (prod.id === this.props.currProduct.id) {
          itemInCart = true
          console.log('prod', prod)
          prod.quantity += quantity
        }
      })
      if (!itemInCart) {
        currCart.products.push(product)
      }
      currCart.totalPrice += this.props.currProduct.price * quantity
      currCart.totalAmount += quantity

      window.localStorage.setItem('guestCart', JSON.stringify(currCart))
      alert('Added to Cart')
    } else {
      const product = {
        ...this.props.currProduct,
        quantity,
        userId: this.props.userId
      }
      if (this.props.addProdToCart(product)) {
        alert('Added to Cart')
      }
    }
  }

  render() {
    let prodQty = this.props.currProduct.amount

    return (
      // className is for easy acces in css styling later
      <div className="singleProduct">
        <main>
          <h3>{this.props.currProduct.name}</h3>
          <img src={this.props.currProduct.imageUrl} />
          <h4>Price: ${this.props.currProduct.price}</h4>
          <p>
            <b>What does it include?</b> {this.props.currProduct.description}
          </p>
        </main>
        {prodQty === 0 ? (
          <div>
            <h3>
              Sorry for the inconvinience, this item is out of stock for the
              moment
            </h3>
            <Link to="/products">
              <p>Browse Similar Packages Here</p>
            </Link>
          </div>
        ) : (
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="quantity">Quantity:</label>
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
        )}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    currProduct: state.currProduct,
    userId: state.user.id
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchOneProduct: id => dispatch(fetchOneProduct(id)),
    addProdToCart: obj => dispatch(addProdToCart(obj)),
    addToCart: obj => dispatch(AddToCart(obj))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OneProduct)
