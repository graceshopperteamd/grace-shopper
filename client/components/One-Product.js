import React from 'react'
import {Link} from 'react-router-dom'

export const OneProduct = props => {
  return (
    <div>
      <Link to={`/products/${props.product.id}`}>
        <img src={props.product.imageUrl} />
        <h2>{props.product.name}</h2>
      </Link>
      <h4>price: {props.product.price}</h4>
    </div>
  )
}
