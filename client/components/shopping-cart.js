import React from 'react';
import { connect } from 'react-redux';
import { fetchCart } from '../redux/projects';
// import { Link } from 'react-router-dom'

class Cart extends React.Component {

  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.getCart();
  }

  render() {

    let shoppingcart = [...this.props.getCart];

    if(shoppingcart && shoppingcart.length > 0){
      return <div>{ shoppingcart.map(product => {
        <div> {product} </div>
      })} </div>
    }
    else
      return <div>No items in cart</div>;
  }
}

const mapStateToProps = (state) => ({
    shoppingcart: state.shoppingcart
});

const mapDispatchToProps = (dispatch) => ({
  getCart: () => dispatch(fetchCart())
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
