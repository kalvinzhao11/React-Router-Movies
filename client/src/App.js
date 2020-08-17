import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Switch, Link, Route} from 'react-router-dom'
import MovieList from './Movies/MovieList'
import Movie from './Movies/Movie'

import SavedList from './Movies/SavedList';
import MovieCard from './Movies/MovieCard';

const App = () => {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          setMovieList(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  const addToSavedList = id => {
    // This is stretch. Prevent the same movie from being "saved" more than once
    if (saved.includes(id)) return 
    return setSaved([...saved, id])
  };
  addToSavedList('star war')
  console.log(saved)
  return (
    <div>
      <SavedList list={[ /* This is stretch */]} />

    {/* Switch creates an if else statement for Route*/}
    <Switch> 
      <Route path='/Movie/:movieId'>
      <Movie movies={movieList} addToSavedList={addToSavedList} saved={saved} setSaved={setSaved}/>
      </Route>
      <Route path='/'>
        <MovieList movies={movieList}/>
      </Route>
    </Switch>
    </div>
  );
};

export default App;
