import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movieInfo: [],
  personages: [],
  isLoading: false,
  characters: [],
}

const movieDetails = createSlice({
  name: 'movieDetails',
  initialState,
  reducers:{
    charactersInfo: (state, action) => {
      state.characters = action.payload
    },
    getMoviePersonages: (state, action) => {
      state.personages = action.payload
    },
    getMovieDetails: (state, {payload}) => {
      state.movieInfo = payload
    }
  },
  extraReducers: {
  }, 
})

export const { getMoviePersonages, getMovieDetails,resetCharacters,  charactersInfo } = movieDetails.actions
export default movieDetails.reducer

