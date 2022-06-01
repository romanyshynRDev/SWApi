import { configureStore } from '@reduxjs/toolkit'
import moviesList from './films'
import movieDetailsInfo from './movieDetailsInfo'

export default configureStore({
  reducer: {
    movies: moviesList,
    movieDetails: movieDetailsInfo,
  },
})
