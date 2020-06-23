import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

/**
 * COMPONENT
 */
export class HomePage extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <h3>Hello World!</h3>

        <p>
          {' '}
          You are not logged in, please log in to see your personalized home
          page
        </p>
      </div>
    )
  }
}
