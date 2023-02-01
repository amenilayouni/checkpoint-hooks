import React from 'react'
import {useParams} from 'react-router-dom'

const MovieDetails = ({dataMovie}) => {
    const {id} = useParams()
    const foundMovie = dataMovie.find(movie=> movie.id == id)
    //console.log(foundMovie)

  return (
      
    <div style={{textAlign:'center'}}>
       <h2  >{foundMovie.title}</h2>
       <h3>{foundMovie.description}</h3>
       <iframe src={foundMovie.trailerLink}></iframe>
    </div>
  )
}

export default MovieDetails