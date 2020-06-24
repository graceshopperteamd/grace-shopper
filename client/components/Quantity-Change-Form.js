import React from 'react'

export class QtyForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {value: ''}

    this.handleChange = this.handleChange.bind(this)
    this.handleRemove = this.handleRemove.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  // if quantity was changed, save it in state
  handleChange(event) {
    this.setState({value: event.target.value})
  }
  // if remove button was clicked, set quantity of 0(zero) in state
  handleRemove(event, qty = 0) {
    this.setState({value: qty})
    this.handleSubmit(event)
  }

  // handle submit is called either by the rmove button or by the submit button
  handleSubmit(event) {
    alert('New Product quantity was submitted ' + this.state.value)
    event.preventDefault()
    this.props.handleEditCart(event)
  }

  render() {
    return (
      <div>
        <form
          onSubmit={this.handleSubmit}
          name={this.props.name + 'QtyForm'}
          className="qtyForm"
        >
          <label htmlFor={this.props.name}>Quantity</label>
          <input
            type="number"
            id={this.props.name}
            // name={this.props.productName + 'Qty'}
            min="1"
            max="20"
            placeholder={1}
            value={this.state.value}
            onChange={this.handleChange}
          />
          <br />
          <input type="submit" value="Edit Qty" />
        </form>
        <input
          type="button"
          onClick={this.handleRemove}
          id={this.props.name}
          value="Remove"
        />
      </div>
    )
  }
}

//   return (
//     <div>
//       <form  name={props.name + 'QtyForm'} onSubmit={props.handleSubmit}className="qtyForm">
//         <label htmlFor={props.name}>Quantity</label>
//         <input
//           type="number"
//           id={props.name}
//           name={props.name + 'Qty'}
//           min="1"
//           max="20"
//           placeholder={1}
//         />
//         <br />
//         <button type="submit">Edit Qty</button>
//         <button onClick={props.handleSubmit} id={props.name} qty={0}>Remove</button>
//       </form>
//     </div>
//   )
// }
