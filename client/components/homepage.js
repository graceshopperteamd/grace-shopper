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
    return <h3>Hello World, its Suraj!</h3>
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
