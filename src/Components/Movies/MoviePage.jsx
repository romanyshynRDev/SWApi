import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCharacter, getCharactersApi, getMovieById} from '../../redux/films';
import MovieDetails from './MovieDetails';
import { useDispatch, useSelector } from "react-redux";


const MovieContainer = () => {
  const [movie, setMovie] = useState({})
  const params = useParams()
  // console.log('params:', params, 'movie:', movie)
  const { characters } = useSelector(state => state.movies)
  console.log('characters => =>', characters)
  const dispatch = useDispatch()
  
  useEffect(() => {
    getMovieById(params.movieId)
      .then((data) => {
        setMovie(data)
      })
    getCharactersApi()
    .then(results =>
      dispatch(getCharacter(results)))
  }, [])

  return (
    <div>
      <MovieDetails movies={movie} characters={characters}/>
    </div>
  )
}
export default MovieContainer
