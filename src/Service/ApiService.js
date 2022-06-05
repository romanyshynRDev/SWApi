import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { characterFilms } from '../redux/characterInfo'
import { getMovieDetails, getMoviePersonages, charactersInfo } from '../redux/movieDetailsInfo'

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
export const getFilmById = createAsyncThunk(
  'movieDetails/getFilmById',
  async (id, {dispatch}) => {
    return instance.get(`films/${id}`)
    .then((res) => {      
      dispatch(getMovieDetails(res.data))
      dispatch(getMoviePersonages(res.data.characters))
      })
  }
)
export  const getPersonagesByMovie = createAsyncThunk(
  'movieDetails/getPersonagesByMovie',
  async (id, {dispatch}) => {
    return  axios.all(id.map((end) => axios.get(end))).then(
      (res => {
          dispatch(charactersInfo(res.map(i => i.data)))
      })
    )   
})

export  const getPersonageFilms = createAsyncThunk(
  'personageInfo/getPersonageFilms',
  async (id, {dispatch}) => {
    return  axios.all(id.map((end) => axios.get(end))).then(
      (res => {
          dispatch(characterFilms(res.map(i => i.data)))
      })
    )   
})

     


