import React from 'react'
import { Card, Col } from 'react-bootstrap'

export default function Food({recipe}) {
  return (
      
    <Col xl={3} md={4} sm={6} className='my-3'>
        <Card className='h-100 '>
            <img src={recipe.recipe.image} alt="" />
            <Card.Body>
            <h5>{recipe.recipe.label}</h5>
            </Card.Body>
            <Card.Footer>
                {Math.round(recipe.recipe.calories)} Calories | 
                {recipe.recipe.ingredientLines.length} ingredients
            </Card.Footer>
        </Card>
    </Col>
  )
}
