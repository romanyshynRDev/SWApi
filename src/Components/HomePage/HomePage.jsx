import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMoviesList } from "../../Service/ApiService";
import FilmContainer from "./MovieContainer";

const HomePage = () => {
  const { list } = useSelector(state => state.movies)  
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getMoviesList())
  }, [dispatch])
  
  return(
    <FilmContainer list={list} />
  )
}
export default HomePage















// import React, { useState } from 'react';

// const HomePage = () => {
  
 

//   return (
//     <div>
//     <li>hello</li>
//     {}
//     </div>
//   )
// }
// export default HomePage
// import React from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import { decrement, increment } from './../../redux/films'

// export default function HomePage() {

//   const count = useSelector((state) => state.movies.moviesList)
//   const dispatch = useDispatch()

//   return (
//     <div>
//       <div>
//         <button
//           aria-label="Increment value"
//           onClick={() => dispatch(increment())}
//         >
//           Increment
//         </button>
//         <span>{count}</span>
//         <button
//           aria-label="Decrement value"
//           onClick={() => dispatch(decrement())}
//         >
//           Decrement
//         </button>
//       </div>
//     </div>
//   )
// }