import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movieInfo: [],
  personages: [],
  isLoading: false,
  isFetching: 'idle'
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
export default movieDetails.reducer
export const { getFilmInfo } = movieDetails.actions

