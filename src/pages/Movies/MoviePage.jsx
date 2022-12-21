import React, { useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { getMovieInformation } from '../../Service/ApiService';
import MovieDetails from './MoviesInfo/MovieDetails';


const MovieContainer = () => {

  const { movieInfo } = useSelector(state => state.movieDetails)
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


