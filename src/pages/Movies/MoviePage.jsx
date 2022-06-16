import React, { useEffect} from 'react';
import { useParams } from 'react-router-dom';
import MovieDetails from './MovieDetails';
import { useDispatch, useSelector } from "react-redux";
import { getFilmById, getMovieInformation } from '../../Service/ApiService';


const MovieContainer = () => {

  const { movieInfo, personages } = useSelector(state => state.movieDetails)
  const dispatch = useDispatch()
  const params = useParams()
  
  useEffect(() => {
    dispatch(getMovieInformation(params.movieId))
  }, [dispatch, params.movieId])

  return (
    <div>
      <MovieDetails  
        movieInfo={movieInfo}
      />
    </div>
  )
}
export default MovieContainer


