import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

/**
 * COMPONENT
 */
export class HomePage extends React.Component {
  constructor() {
    super()
    // this.state = {
    //   robotName: ''
    // }
    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleChange = this.handleChange.bind(this)
  }

  // handleChange(event){
  //   this.setState({robotName: event.target.value});
  // }

  // handleSubmit(event){
  //   event.preventDefault();
  //   const newRobotName = event.target.robotName.value;
  //   this.props.addRobot(newRobotName);
  //   alert(newRobotName)
  // }

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
