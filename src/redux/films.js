import { createSlice} from '@reduxjs/toolkit'
import { getMoviesList } from '../Service/ApiService'


const initialState = {    
  list: [],
  isLoading: false,
  characters: [],
}

const moviesList = createSlice({
  name: 'movies',
  initialState,
  reducers:{
    getCharacter: (state, action) => {
       state.characters = action.payload
    }
  },
  extraReducers: {
    [getMoviesList.pending]: (state, action) => {
      state.isLoading = true
    },
    [getMoviesList.fulfilled]: (state, action) => {
      state.list = action.payload
      state.isLoading = false
    },
    [getMoviesList.rejected]: (state, action) => {
      state.isLoading = false
  },
} 
})

export const { getCharacter, charactersLoading } = moviesList.actions
export default moviesList.reducer









