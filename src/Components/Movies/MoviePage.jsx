import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MovieDetails from './MovieDetails';
import { useDispatch, useSelector } from "react-redux";
import { getFilmById } from '../../Service/ApiService';


const MovieContainer = () => {

  const params = useParams()
  const { movieInfo, personages, isLoading } = useSelector(state => state.movieDetails)
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getFilmById(params.movieId))
  }, [dispatch])

  console.log('personages =>', personages)
  return (
    <div>
      <MovieDetails  
        movieInfo={movieInfo}
        personages={personages} 
        isLoading={isLoading} 
      />
    </div>
  )
}
export default MovieContainer


