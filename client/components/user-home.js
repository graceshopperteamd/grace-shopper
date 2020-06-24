import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {Button} from 'react-bootstrap'
/**
 * COMPONENT
 */

// change imports to new file name
export const UserHome = props => {
  const {username} = props

  return (
    <div className="homePage">
      <div className="homeContent">
        <br />
        <h3>Welcome, {username}!</h3>
        <h5>Ready for a Quarantivity?</h5>
        <Link to="/products">
          <Button sixe="sm" variant="danger" type="button">
            Browse Products
          </Button>
        </Link>
      </div>
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

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
