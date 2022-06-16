import React  from 'react';
import s from './style.module.css'
import { useSelector } from 'react-redux';
import Loader from '../../Components/Loader/Loader';
import MovieCharacter from './MoviePersonage';

const MovieDetails = (props) => {
  
  const { characters, isLoading } = useSelector(state => state.movieDetails)

  return (
      <div className={s.container}>
        { isLoading 
          ? <Loader/>
          :  <div >
        <h2> {props.movieInfo.title}</h2> 
              <li><span>Createdd: </span>{props.movieInfo.created} </li>
              <li><span>Director: </span>{props.movieInfo.director} </li>
              <li><span>Episode: </span>{props.movieInfo.episode_id}</li>
              <li><span>Release date: </span>{props.movieInfo.release_date}</li>
        <h2>Personages</h2>
              
        <MovieCharacter characters={characters}/>
            
             </div>
        }
     </div>
  )
}
export default MovieDetails

