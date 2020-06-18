import React from 'react'
import {connect} from 'react-redux'
import {fetchOneProduct} from '../store/product'

class OneProduct extends React.Component {
  componentDidMount() {
    this.props.fetchOneProduct(this.props.match.params.id)
  }

  render() {
    return (
      <div>
        <img src={this.props.currProduct.imageUrl} />
        <h3>{this.props.currProduct.name}</h3>
        <p>price: {this.props.currProduct.price}</p>
        <form>
          <label htmlFor="quantity">Quantity</label>
          <input type="number" id="quantity" min="1" max="20" />
          <button type="submit">Add To Cart</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    currProduct: state.products.currProduct
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchOneProduct: () => dispatch(fetchOneProduct())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OneProduct)
