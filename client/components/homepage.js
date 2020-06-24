import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
/**
 * COMPONENT
 */
export class HomePage extends React.Component {
  componentDidMount() {
    if (!this.props.userId) {
      const guestCart = {
        products: [],
        totalPrice: 0,
        totalAmount: 0
      }
      window.localStorage.setItem('guestCart', JSON.stringify(guestCart))
    }
  }

  render() {
    return (
      <div>
        <br />
        <h4>Hello Bored Person!</h4>
        <p>
          Please take a look around our website to find the best fun-activites
          for you to do at home with roommates, friends, family, your cat or by
          yourself (it's still pretty fun!)
        </p>
        <Link to="/products">
          <button type="button">Browse Products</button>
        </Link>
        <br />
        <br /> You are not logged in, please log in to see your personalized
        home page
      </div>
    )
  }
}
