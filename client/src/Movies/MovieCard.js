import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom'


const MovieCard = ({movie}) => {
  const { title, director, metascore } = movie;
  const {url} = useRouteMatch()
  return (
    <div className="movie-card">
      {/* {added Link to redirect to movieid} */}
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
};

export default MovieCard;
