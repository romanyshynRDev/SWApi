import { createSlice } from "@reduxjs/toolkit";
import { getMovieInformation } from "../../Service/ApiService";

const initialState = {
  movieInfo: {},
  isLoading: false,
  characters: [],
}

const movieDetails = createSlice({
  name: 'movieDetails',
  initialState,

  extraReducers: (builder) => {
    builder
    .addCase(getMovieInformation.pending, (state) => {
       state.isLoading = true
    })
    .addCase(getMovieInformation.fulfilled, (state, {payload}) => {
      state.movieInfo = payload[0]
      state.characters = payload[1]
      state.isLoading = false
   })
    .addCase(getMovieInformation.rejected, (state) => {
      state.isLoading = false
    })
  }
})

export default movieDetails.reducer

