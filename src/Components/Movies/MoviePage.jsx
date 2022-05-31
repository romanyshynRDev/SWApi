import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCharacter } from '../../redux/films';
import MovieDetails from './MovieDetails';
import { useDispatch, useSelector } from "react-redux";
import { getCharactersByMovieId, getMovieById } from '../../Service/ApiService';


const MovieContainer = () => {
  const [movie, setMovie] = useState({})
  const params = useParams()
  
  const { characters } = useSelector(state => state.movies)
  const dispatch = useDispatch()
  
  useEffect(() => {
    getMovieById (params.movieId)
      .then((data) => {
        setMovie(data)

        getCharactersByMovieId(data.characters)
         .then((data) => 
         dispatch(getCharacter(data.map(i => i.data)))
        );
      })
  }, [])

///
///   console.log('Move axios to sevice', characters)
///
  return (
    <div>
      <MovieDetails movies={movie} char={characters}/>
    </div>
  )
}
export default MovieContainer
