import {  createAsyncThunk } from '@reduxjs/toolkit'
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

export const getCharactersByMovieId = async (id) => {
  return  axios.all(id.map((endpoint) => axios.get(endpoint)))
}

export const getMovieById = async (id) => {
  return instance.get(`films/${id}`)
  .then((res) => {
    return res.data 
  })
}


export const getCharactersApi = async () => {
  return instance.get(`people/`)
  .then(res => {
    if(res.status === 200)
      return res.data.results
    }
  )
}





