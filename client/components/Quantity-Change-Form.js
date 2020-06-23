import React from 'react'
import {connect} from 'react-redux'
import {editCart} from '../store/shoppingCart'

class QtyForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {value: ''}

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({value: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault()

    const product = {
      target: event.target.id,
      qty: this.value,
      userId: this.props.userId
    }
    if (!product.qty)
      alert('Please indicate the qty of items you wish to have in your cart')
    else {
      editCart(product)
      alert('submit', {event})
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor={this.props.item.name + ' qty'}>Quantity</label>
        <input
          type="number"
          id={this.props.item.name + 'qty'}
          min="1"
          max="20"
          placeholder="Qty"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <br />
        <button type="submit">Edit Qty</button>
      </form>
    )
  }
}

const mapStateToProps = state => ({
  shoppingcart: state.shoppingcart,
  userId: state.userId
})

const mapDispatchToProps = dispatch => ({
  editCart: obj => dispatch(editCart(obj))
})

export const ConnectedQtyForm = connect(mapStateToProps, mapDispatchToProps)(
  QtyForm
)
