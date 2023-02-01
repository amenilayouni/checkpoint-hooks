
import './App.css';
import {data} from './components/data';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
/*import MovieCard from './components/MovieCard';*/

import { Route, Routes } from 'react-router-dom';
import Movie from './components/movie';
import MovieDetails from './components/MovieDetails';




function App() {

  const [dataMovie, setDataMovie] = useState(data)
  return (
    <Routes>
      <Route path='/' element={<Movie dataMovie={dataMovie} setDataMovie={setDataMovie}/>}/>
      <Route path='/details/:id' element={<MovieDetails dataMovie={dataMovie}/>} />
    </Routes>
  );
  }
export default App