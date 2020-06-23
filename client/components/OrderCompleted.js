import React from 'react'
import {Link} from 'react-router-dom'

export const OrderCompleteMessage = () => {
  return (
    <div>
      <h2>Your order is on the way!</h2>
      <p>Thanks for shopping with us</p>
      <Link to="/products">
        <button>More Products</button>
      </Link>
    </div>
  )
}
