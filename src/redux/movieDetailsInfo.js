import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movieInfo: [],
  personages: [],
  isLoading: false
}


const movieDetails = createSlice({
  name: 'movieDetails',
  initialState,
  reducers: {
    getFilmInfo: (state, { payload }) => {
      state.movieInfo = payload
    },
  }
})
export const { getFilmInfo, getPersonagesByMovieId } = movieDetails.actions
export default movieDetails.reducer
