import React from 'react';
import CharacterInfo from './Character/Character';
import s from './style.module.css'

const MovieDetails = (props) => {
//debugger

  return (
    <div >
      <div className={s.container}>
        <h2> {props.movies.title}</h2>
        <li><span>Createdd: </span>{props.movies.created} </li>
        <li><span>Director: </span>{props.movies.director} </li>
        <li><span>Episode: </span>{props.movies.episode_id}</li>
        <li><span>Release date: </span>{props.movies.release_date}</li>
        <li><h2>Personages</h2>{props.movies.character}</li>
        <CharacterInfo {...props}/>
      </div>
    </div>
  )
}
export default MovieDetails

