import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import PropTypes from 'prop-types'
import AdminDashboard from './components/Admin-Dash'

import {
  HomePage,
  Login,
  Signup,
  UserHome,
  ConnectedCart,
  ConnectedCheckout,
  AllProducts,
  SingleProduct,
  MyAccount
} from './components'

import {me} from './store'

/**
 * COMPONENT
 */
class Routes extends Component {
  constructor() {
    super()
    this.isAdmin = this.isAdmin.bind(this)
  }

  componentDidMount() {
    this.props.loadInitialData()
  }

  isAdmin(role) {
    return role === 'admin'
  }

  render() {
    const {isLoggedIn} = this.props
    const {role} = this.props
    const admin = this.isAdmin(role)

    return (
      <Switch>
        {/* Routes placed here are available to all visitors */}
        <Route exact path="/products/:id" component={SingleProduct} />
        <Route exact path="/products" component={AllProducts} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/cart" component={ConnectedCart} />
        <Route exact path="/checkout" component={ConnectedCheckout} />
        {admin && (
          <Switch>
            {/* Routes placed here are only available after logging in */}
            <Route exact path="/home" component={AdminDashboard} />
            <Route exact path="/" component={AdminDashboard} />
          </Switch>
        )}
        {isLoggedIn && (
          <Switch>
            {/* Routes placed here are only available after logging in */}
            <Route exact path="/myAccount" component={MyAccount} />
            <Route exact path="/home" component={UserHome} />
            <Route exact path="/" component={UserHome} />
          </Switch>
        )}
        {/* Displays our Login component as a fallback */}
        <Route exact path="/" component={HomePage} />
        <Route component={Login} />
      </Switch>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    isLoggedIn: !!state.user.id,
    role: state.user.role
  }
}

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(me())
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes))

/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
