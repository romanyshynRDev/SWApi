import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {  getCharacter } from '../../redux/films';
import MovieDetails from './MovieDetails';
import { useDispatch, useSelector } from "react-redux";
import { getCharactersByMovieId, getMovieById } from '../../Service/ApiService';
import { getFilmInfo } from '../../redux/movieDetailsInfo';


const MovieContainer = () => {
  const params = useParams()
  const { movieInfo } = useSelector(state => state.movieDetails)
  const { characters, isLoading, } = useSelector(state => state.movies)
  
  const dispatch = useDispatch()
  useEffect(() => {
    getMovieById(params.movieId)
      .then((data) => {
        dispatch(getFilmInfo(data))


        getCharactersByMovieId(data.characters)
          .then((data) => 
            dispatch(getCharacter(data.map(i => i.data)))
         )
      })
  })

 //console.log('Local state movie', movieInfo)
  return (
    <div>
      <MovieDetails  
        movieInfo={movieInfo}
        char={characters} 
        isLoading={isLoading} 
      />
    </div>
  )
}
export default MovieContainer
