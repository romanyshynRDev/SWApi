import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMoviesList } from "../../Service/ApiService";
import FilmContainer from "./MovieContainer";

const HomePage = () => {
  const { list, isLoading } = useSelector(state => state.movies)  
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getMoviesList())
  }, [dispatch])
  return(
    <FilmContainer list={list} isLoading={isLoading} />
  )
}
export default HomePage















