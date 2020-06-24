import React from 'react'

export class QtyForm extends React.Component {
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
    alert('New Product quantity was submitted' + this.state.value)
    event.preventDefault()
    doSomethingWithEvent(event)
  }

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        name={props.name + 'QtyForm'}
        className="qtyForm"
      >
        <label>
          Quantity:
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

// import React from 'react'

// export const QtyForm = props => {

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
