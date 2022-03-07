import React from 'react'
import { Card } from 'react-bootstrap'

const MovieDescription = ({movie}) => {
  return (
    <div>
        <Card style={{ width: '18rem' }}>
  <Card.Body>
    {movie.description}
  </Card.Body>
</Card>
    </div>
  )
}

export default MovieDescription