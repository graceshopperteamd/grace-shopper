import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

/**
 * COMPONENT
 */
export class HomePage extends React.Component {
  render() {
    return (
      <div>
        <h3>Hello Bored Person!</h3>
        <p>
          Please take a look around our website to find the best fun-activites
          for you to do at home with roommates, friends, family, your cat or by
          yourself (it's still pretty fun!)
        </p>
        <Link to="/products">
          <button type="button">Browse Products</button>
        </Link>
        <p>
          {' '}
          You are not logged in, please log in to see your personalized home
          page
        </p>
      </div>
    )
  }
}
