import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {useParams, NavLink, Route, useRouteMatch} from 'react-router-dom'
import SavedList from './SavedList'

const Movie = (props) => {
  const [movie, setMovie] = useState();
  const {movieId}  = useParams()
  const { movies, addToSavedList } = props
  const {url , path} = useRouteMatch()

  useEffect(() => {
    const id = movies.find(movId=>{
      return movId.id == movieId
    },[])
    // change ^^^ that line and grab the id from the URL
    // You will NEED to add a dependency array to this effect hook

       axios
        .get(`http://localhost:5000/api/movies/${movieId}`)
        .then(response => {
          setMovie(response.data);
        })
        .catch(error => {
          console.error(error);
        });

  },[]);
  
  // Uncomment this only when you have moved on to the stretch goals
  const saveMovie = evt => {
    addToSavedList(movie)

  }

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  const { title, director, metascore, stars } = movie;
  return (
    <div className="save-wrapper">
      <div className="movie-card">
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
        <h3>Actors</h3>

        {stars.map(star => (
          <div key={star} className="movie-star">
            {star}
          </div>
        ))}
      </div>
      <NavLink to={`${url}/SavedList`} className="save-button" onClick={saveMovie}>Save</NavLink>
      <Route path={`${path}/SavedList`}>
        {/* <SavedList /> */}
      </Route>
    </div>
  );
}

export default Movie;
