import React from 'react'
import {connect} from 'react-redux'
import {fetchUser} from '../store/profile'
// import {OneProduct} from './One-Product'

export class Profile extends React.Component {
  componentDidMount() {
    this.props.fetchUser(1)
  }

  render() {
    console.log('props: ', this.props)
    return (
      <div>
        <h1>Welcome, {this.props.user.username}!</h1>
        <h3>email: {this.props.user.email}</h3>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: () => dispatch(fetchUser(1))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
