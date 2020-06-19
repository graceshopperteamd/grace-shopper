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

        <p> You are not logged in, please log in to see your home page</p>
      </div>
    )
  }
}

/**
 * CONTAINER
 */
//   const mapState = state => {
//     return {
//       email: state.user.email
//     }
//   }

//   export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
//   UserHome.propTypes = {
//     email: PropTypes.string
//   }
