import React from 'react';
import { useParams, useRouteMatch, Link } from 'react-router-dom'

const MovieList = props => {
  const { url } = useRouteMatch()

  return (
    <div className="movie-list">
      {/* {console.log(props.movies)} */}
      {props.movies.map(movie => (
        // <Link to={`${currentUrl}/${movie.id}`}>
        <MovieDetails key={movie.id} movie={movie} />
        // {/* </Link> */}
      ))}
    </div>
  );
}

function MovieDetails({ movie }) {
  const { title, director, metascore } = movie;
  const {url} = useRouteMatch()
  return (
    <div className="movie-card">
      <Link to={`${url}movie/${movie.id}`}>
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
      </Link>
    </div>
  );
}

export default MovieList;
