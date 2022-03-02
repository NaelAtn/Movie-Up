import React from 'react'
import MovieCards from '../MovieCards/MovieCards'

const MovieList = ({movies,inputSearch}) => {
  return (
    <div className='Movie'>
        {movies
        .filter(movie=>movie.title.toUpperCase().includes(inputSearch.toUpperCase())

        )
        
        
        .map(el=> <MovieCards movie={el} key={el.id}/>)}
    </div>
  )
}

export default MovieList