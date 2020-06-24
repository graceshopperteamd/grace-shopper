import React from 'react'
import {Link} from 'react-router-dom'
import {Button} from 'react-bootstrap'

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
            <input name="city" type="text" placeholder="City" />
          </div>
          <div>
            <input name="state" type="text" placeholder="State" />
          </div>
          <div>
            <input
              name="zip"
              type="text"
              pattern="[0-9]{5}"
              placeholder="ZIP Code"
            />
          </div>
        </div>

        <label htmlFor="cardType">
          {' '}
          <small>Payment Information</small>{' '}
        </label>
        <div>
          <select name="cardType" id="cardType">
            <option value="Visa">Visa</option>
            <option value="AmericanExpress">American Express</option>
            <option value="MasterCard">MasterCard</option>
          </select>
          <div>
            <input
              name="cardNum"
              type="password"
              min="9"
              max="9"
              placeholder="Credit/Debit Card #"
            />
          </div>
          <div>
            <input
              name="expiration"
              type="date"
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
            <Button type="button" variant="danger" size="sm">
              Back to Browse
            </Button>{' '}
          </Link>
          <Button type="submit" variant="danger" size="sm">
            Finish Checking Out
          </Button>
        </div>
      </form>
    </div>
  )
}
