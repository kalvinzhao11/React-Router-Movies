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
  };
  return (
    <div>
      <SavedList list={[ /* This is stretch */]} />
      {/* <div>Replace this Div with your Routes</div> */}
      {/* <Link to='/'>MovieList</Link> */}
      {/* changes the url link */}
      {/* <Link to='/Movie'>Movie</Link> */}

    {/* creates an if else statement */}
    <Switch> 
      <Route path='/Movie/:movieId'>
      <Movie movies={movieList}/>
      </Route>
      <Route path='/Movie'>
        {/* <Movie movies={movieList}/> */}
      </Route>
      <Route path='/'>
        <MovieList movies={movieList}/>
      </Route>
    </Switch>
    </div>
  );
};

export default App;
