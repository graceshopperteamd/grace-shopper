import React from 'react'

export const QtyForm = props => {
  return (
    <div>
      <form onSubmit={props.handleSubmit} name={props.name} className="qtyForm">
        <label htmlFor={props.name}>Quantity</label>
        <input
          type="number"
          id={props.name}
          name={props.name}
          min="1"
          max="20"
          placeholder={1}
        />
        <br />
        <button type="submit">Edit Qty</button>
      </form>
      <button onClick={props.handleRemove}>Remove</button>
    </div>
  )
}
