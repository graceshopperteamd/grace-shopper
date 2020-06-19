import React from 'react'
import {Link} from 'react-router-dom'

export const OneProduct = props => {
  return (
    <div>
      <Link to={`/products/${props.product.id}`}>
        <h2>{props.product.name}</h2>
        <img src={props.product.imageUrl} />
      </Link>
      <h4>price: {props.product.price}</h4>
    </div>
  )
}
