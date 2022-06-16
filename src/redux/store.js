import { configureStore } from '@reduxjs/toolkit'
import characterInfo from './slices/characterInfo'
import moviesList from './slices/films'
import movieDetailsInfo from './slices/movieDetailsInfo'

export default configureStore({
  reducer: {
    movies: moviesList,
    movieDetails: movieDetailsInfo,
    personage: characterInfo,
  },
})
