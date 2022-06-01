import React, { useEffect } from 'react';
import s from './style.module.css'
import Loader from './../Loader/Loader'


const MovieDetails = (props) => {


  return (
      <div className={s.container}>
        <h2> {props.movieInfo.title}</h2>    
          <div>
              <li><span>Createdd: </span>{props.movieInfo.created} </li>
              <li><span>Director: </span>{props.movieInfo.director} </li>
              <li><span>Episode: </span>{props.movieInfo.episode_id}</li>
              <li><span>Release date: </span>{props.movieInfo.release_date}</li>
              <li><h2>Personages</h2>{props.movieInfo.character}</li>
            </div>
               
        {/* <CharacterInfo {...props}/> */}
      
     </div>
  )
}
export default MovieDetails

