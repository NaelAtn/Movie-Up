import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'



const MovieCards = ({movie}) => {
  return (
    <div>
        <Card style={{ width: '18rem' }}>
         <Link to='/des'>< Card.Img  variant="top" src={movie.posterUrl} /></Link>
  <Card.Body>
    <Card.Title>{movie.Title}</Card.Title>
    <Card.Text>{movie.description}</Card.Text>
    <Button href={movie.trailer} target={"blanck"}>Trailer</Button>
  </Card.Body>
</Card>





    </div>
  )
}

export default MovieCards