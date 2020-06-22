import React from 'react'
import {connect} from 'react-redux'
import {fetchUser} from '../store/profile'

export class Profile extends React.Component {
  // componentDidMount() {
  // this.props.fetchUser(this.props.match.params.id)
  // }

  render() {
    console.log('props: ', this.props)
    return (
      <div>
        <h1>Welcome, {this.props.user.user.username}!</h1>
        <h3>email: {this.props.user.user.email}</h3>
        HELLO
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

// const mapDispatchToProps = {
//     fetchUser: fetchUser,
// }

export default connect(mapStateToProps, null)(Profile)
