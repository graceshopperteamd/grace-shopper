import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
/**
 * COMPONENT
 */

// change imports to new file name
export const Profile = props => {
  const {username, email} = props
  return (
    <div>
      <h3>Welcome, {username}!</h3>
      <div> Email : {email}</div>
      <h5>Ready for a Quarantivity?</h5>
      <Link to="/products">
        <button type="button">Browse Products</button>
      </Link>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email,
    username: state.user.username
  }
}

export default connect(mapState)(Profile)

/**
 * PROP TYPES
 */
Profile.propTypes = {
  email: PropTypes.string
}
