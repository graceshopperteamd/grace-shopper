import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import {Navbar as NavBar, Nav} from 'react-bootstrap'

const Navbar = ({handleClick, isLoggedIn}) => (
  <NavBar bg="danger" variant="dark" expand="lg">
    <NavBar.Brand>QUARANTIVITIES</NavBar.Brand>
    <br />
    {isLoggedIn ? (
      <Nav className="mr-auto">
        {/* The navbar will show these links after you log in */}

        <Nav.Link href="/home">Home</Nav.Link>
        <Nav.Link href="/products">All Our Products</Nav.Link>
        <Nav.Link href="/myAccount">My Account</Nav.Link>
        <Nav.Link href="/cart">Cart</Nav.Link>
        <Nav.Link href="/checkout">Checkout</Nav.Link>
        <Nav.Link href="#" onClick={handleClick}>
          Logout
        </Nav.Link>
      </Nav>
    ) : (
      <Nav className="mr-auto">
        {/* The navbar will show these links before you log in */}

        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/products">All Our Products</Nav.Link>
        <Nav.Link href="/login">Login</Nav.Link>
        <Nav.Link href="/signup">Sign Up</Nav.Link>
        <Nav.Link href="/cart">Cart</Nav.Link>
        <Nav.Link href="/checkout">Checkout</Nav.Link>
      </Nav>
    )}
  </NavBar>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
