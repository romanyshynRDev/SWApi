import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import  axios  from 'axios'

export const getMoviesList = createAsyncThunk(
  'movies/getMoviesList',
  async () => {
    return axios.get(`https://swapi.dev/api/films`)
    .then(res => { 
      if(res.status === 200){
        return res.data.results
      }
      throw new Error(`Can't upload data`)
    })
  }
)
// export const getMovieInfo = createAsyncThunk(
//   'movies/getMovieInfo',
//   async function (id, {Error, dispatch}) {
//     return axios.get(`https://swapi.dev/api/films/${id}`)
//     .then(res => { 
//       if(!res.status === 200){
//         throw new Error(`Can't upload data`)
        
//       }
      
//       console.log('response => ', res.title)
//       dispatch(setMovieInfo({id}))
//     })
//   }
// )

export const getMovieById = async (id) => {
  return axios.get(`https://swapi.dev/api/films/${id}`)
  .then((res) => {
    return res.data 
  })
}
export const getCharactersApi = async () => {
  return axios.get(`https://swapi.dev/api/people`)
  .then(res => {
    if(res.status === 200)
    //console.log('res.data:', res.data)
      return res.data.results
  }
)
}
//getCharacters(1)


 const moviesList = createSlice({
  name: 'movies',
  initialState: {    
    list: [],
    status: null,
    characters: [],
  },
  reducers:{
    getCharacter: (state, action) => {
      state.characters = action.payload
    }
  },
  extraReducers: {
    [getMoviesList.pending]: (state, action) => {
      state.status = 'Loading...'
    },
    [getMoviesList.fulfilled]: (state, action) => {
      state.list = action.payload
       state.status = 'Success'
    },
    [getMoviesList.rejected]: (state, action) => {
      state.status = 'Failed'
  },
} 
})
export const { getCharacter } = moviesList.actions
export default moviesList.reducer










// export const moviesST = createSlice({
//   name: 'movies',
//   initialState: {
//     movieList: [],
// },
// reducers: {
//   setMoviesData: (state, action) => {
//     state.movieList = action.payload
//   }
// }

// })
// export const { setMoviesData } = moviesST.actions
// export default moviesST.reducer