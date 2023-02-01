import {Routes, Route} from "react-router-dom";
import Add from "./add";
import MovieList from "./MovieList";




const Movie = ({dataMovie,setDataMovie}) => {
    const AddMovies=(NewMovies)=>{ 
        setDataMovie([...dataMovie,NewMovies])
    
      }
    return(
        <div className="App">
      
        <Add AddMovies={AddMovies}/>
     {/* <MovieCard dataMovie={dataMovie}/>*/}
     <MovieList dataMovie={dataMovie}/>
    
    </div>
    )
}

export default Movie
