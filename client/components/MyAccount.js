import React from 'react'
import {connect} from 'react-redux'
import {fetchOrders} from '../store/userOrders'
import {OneProduct} from './One-Product'

class MyAccount extends React.Component {
  componentDidMount() {
    this.props.fetchOrders(this.props.user.id)
  }

  render() {
    const pastOrders = this.props.orders || []
    console.log(this.props.orders)
    return (
      <div className="profile">
        <div className="profileContent">
          <h2>Hi {this.props.user.username}</h2>
          <p>These are your past orders:</p>
          {pastOrders.map(order => (
            <div key={order.id}>
              <h4>Order #{order.id} </h4>
              <div>
                <p>Total: ${order.total}</p>
                <div>
                  <p>Products Bought:</p>
                  <ul>
                    {order.products.map(prod => {
                      return <li key={prod.id}>{prod.name}</li>
                    })}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    orders: state.userOrders,
    user: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchOrders: id => dispatch(fetchOrders(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyAccount)
