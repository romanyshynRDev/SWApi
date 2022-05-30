import React from 'react';
import CharacterInfo from './Character/Character';
import s from './style.module.css'
const MovieDetails = (props) => {
//debugger
  return (
    <div>
    <div className={s.container}>
      <h2> {props.movies.title}</h2>
      <li><span>Createdd: </span> {props.movies.created}</li>
      <li><span>Director: </span> {props.movies.director}</li>
      <li><span>Episode: </span>{props.movies.episode_id}</li>
      <li><span>Release date: </span> {props.movies.edited}</li>
      <li><span>Producer: </span> {props.movies.producer}</li>
    
    </div>
    <CharacterInfo {...props}/>
    </div>
  )
}
export default MovieDetails