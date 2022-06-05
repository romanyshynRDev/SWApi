import { configureStore } from '@reduxjs/toolkit'
import characterInfo from './characterInfo'
import moviesList from './films'
import movieDetailsInfo from './movieDetailsInfo'

export default configureStore({
  reducer: {
    movies: moviesList,
    movieDetails: movieDetailsInfo,
    personage: characterInfo,
  },
})
