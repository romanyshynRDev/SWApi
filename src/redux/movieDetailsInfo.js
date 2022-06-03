import { createSlice } from "@reduxjs/toolkit";
import { getFilmById } from "../Service/ApiService";

const initialState = {
  movieInfo: [],
  personages: [],
  isLoading: false,
}


const movieDetails = createSlice({
  name: 'movieDetails',
  initialState,
  reducers:{
    getPersonages: (state, action) => {
      state.personages = action.payload
    }
  },
  extraReducers: {
    [getFilmById.pending]: (state, action) => {
      state.isLoading = true
    },
    [getFilmById.fulfilled]: (state, { payload }) => {
      state.movieInfo = payload
      state.isLoading = true
    },
    [getFilmById.rejected]: (state, { payload }) => {
      state.isLoading = false
    },
  }, 
})

export const { getPersonages } = movieDetails.actions
export default movieDetails.reducer

