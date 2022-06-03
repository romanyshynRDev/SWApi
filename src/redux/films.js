import { createSlice} from '@reduxjs/toolkit'
import { getMoviesList } from '../Service/ApiService'


const initialState = {    
  list: [],
  isLoading: false,
}

const moviesList = createSlice({
  name: 'movies',
  initialState,
  reducers:{
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

export default moviesList.reducer









