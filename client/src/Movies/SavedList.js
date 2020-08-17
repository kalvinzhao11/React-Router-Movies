import React from 'react';
import {useHistory } from 'react-router-dom'

// changed () to {} to add function inside of savedlist
const SavedList = props => {
  const history = useHistory()
  const backHome = () => {
    history.push('/')
  }
  // console.log(props)
  return (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <span className="saved-movie">{movie.title}</span>
    ))}
    <div className="home-button" onClick={backHome}>Home</div>
  </div>
  )
};

export default SavedList;
