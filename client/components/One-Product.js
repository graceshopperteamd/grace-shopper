import React from 'react'
import {Link} from 'react-router-dom'
import {Card} from 'react-bootstrap'

export const OneProduct = props => {
  return (
    // className is for easy acces in css styling later
    <Card
      bg="ligth"
      border="secondary"
      text="dark"
      style={{width: '18rem'}}
      className="mb-2"
    >
      <Card.Body>
        <div className="allProducts">
          <Link to={`/products/${props.product.id}`}>
            <Card.Title>{props.product.name}</Card.Title>
            <Card.Img variant="top" src={props.product.imageUrl} />
          </Link>
          <Card.Text>price: ${props.product.price}</Card.Text>
        </div>
      </Card.Body>
    </Card>
  )
}
