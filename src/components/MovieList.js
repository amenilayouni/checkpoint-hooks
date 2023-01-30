import React from "react";
import MovieCard2 from "./MovieCard2";

const MovieList = ({dataMovie})=> {

    return(
        <div style={{  display: 'grid', gridTemplateColumns:'auto auto auto', gap:'15px'}}>
       { dataMovie.map(movie => <MovieCard2 dataMovie={movie}/>)}
    </div>
    )
    
  
}
export default MovieList
