
import './App.css';
import {data} from './components/data';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
/*import MovieCard from './components/MovieCard';*/
import MovieList from './components/MovieList';
import Add from './components/add';


function App() {

  const [dataMovie, setDataMovie] = useState(data)
  const AddMovies=(NewMovies)=>{ 
    setDataMovie([...dataMovie,NewMovies])

  }
  
  return (
    <div className="App">
        <Add AddMovies={AddMovies}/>
     {/* <MovieCard dataMovie={dataMovie}/>*/}
     <MovieList dataMovie={movies}/>
    
    </div>
  );
  }
export default App