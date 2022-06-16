import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const instance = axios.create({
  baseURL:`https://swapi.dev/api/`,
  headers:{
    "Content-Type": "application/json"
  }
})

export const getMoviesList = createAsyncThunk(
  'movies/getMoviesList',
  async () => {
    return instance.get(`films`)
      .then(res => { 
        if(res.status === 200){
          return res.data.results
        }
        throw new Error(`Can't upload data`)
    })
    .catch(Error)
  }
)


export const getMovieInformation = createAsyncThunk(
  'movieDetails/getPersonagesByMovie',
  async (id) => {
    let film = await instance.get(`films/${id}`).then((res) =>   {
       return res.data
    })
    let charInfo = await axios.all(film.characters.map((end) => axios.get(end))).then(
      (res => {
          return res.map(i => i.data)
      })
    )
    return [film, charInfo] 
  },
)

export const characterInfoAPI = createAsyncThunk(
  'personageInfo/characterInfoAPI',
  async(pid) => {
   let actor = await axios.get(pid).then((res) => {
      return res.data
      
    })
    let actorMovies = await axios.all(actor.films.map((end) => axios.get(end))).then(
      (res => {
          return res.map(i => i.data)
      })
    )
    return [actor, actorMovies]
  }
) 


