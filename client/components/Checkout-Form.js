import React from 'react'
import {Link} from 'react-router-dom'

export const CheckoutForm = props => {
  return (
    <div>
      <form onSubmit={props.handleSubmit} name={name} className="checkoutForm">
        <label htmlFor="streetAddress">
          {' '}
          <small>Shipping Address</small>{' '}
        </label>
        <div>
          <div>
            <input
              name="streetAddress"
              type="text"
              placeholder="Street Address"
            />
          </div>
          <div>
            <input name="aptNum" type="text" placeholder="Apt#" />
          </div>
          <div>
            <input name="city" type="text" placeholder="City" />
          </div>
          <div>
            <input name="state" type="text" placeholder="State" />
          </div>
          <div>
            <input name="zip" type="text" placeholder="ZIP Code" />
          </div>
        </div>

        <label htmlFor="cardType">
          {' '}
          <small>Payment Information</small>{' '}
        </label>
        <div>
          <div>
            <input
              name="cardType"
              type="text"
              placeholder="Visa, MasterCard, etc"
            />
          </div>
          <div>
            <input
              name="cardNum"
              type="password"
              placeholder="Credit/Debit Card #"
            />
          </div>
          <div>
            <input
              name="expiration"
              type="text"
              placeholder="Expiration Date"
            />
          </div>
          <div>
            <input
              name="securityCode"
              type="password"
              placeholder="Security Code"
            />
          </div>
        </div>

        <div className="CheckoutPageBtns">
          <Link to="/products">
            {' '}
            <button type="button">Back to Browse</button>{' '}
          </Link>
          <button type="submit">Finish Checking Out</button>
        </div>
      </form>
    </div>
  )
}
