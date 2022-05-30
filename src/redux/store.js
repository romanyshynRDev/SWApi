import { configureStore } from '@reduxjs/toolkit'
import moviesList from './films'

export default configureStore({
  reducer: {
    movies: moviesList,
  },
})
