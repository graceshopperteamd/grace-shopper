import React from 'react'
import {connect} from 'react-redux'
import {fetchOneProduct} from '../store/single-product'
import {addProdToCart} from '../store/shoppingCart'
import {AddToCart} from '../store/shoppingCart'
import {Link} from 'react-router-dom'

class OneProduct extends React.Component {
  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  componentDidMount() {
    this.props.fetchOneProduct(this.props.match.params.id)
  }

  handleSubmit(event) {
    event.preventDefault()
    const quantity = Number(document.getElementById('quantity').value)
    if (!this.props.userId) {
      this.props.addToCart({...this.props.currProduct, quantity})
      alert('Added to Cart')
    }
    if (this.props.userId) {
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
          <h4>Price: {this.props.currProduct.price}</h4>
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
            <label htmlFor="quantity">Quantity</label>
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
