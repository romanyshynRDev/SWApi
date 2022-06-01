import React, { useEffect, } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom'
import { getPersonagesByMovieId } from '../../../redux/movieDetailsInfo';
import { getCharactersByMovieId, } from '../../../Service/ApiService';
import s from './../style.module.css'


const CharacterInfo = (props) => {
  //console.log('props', props)
const dispatch = useDispatch()
const { personages } = useSelector(state => state.movieDetails)
//console.log('charactersx', props.movieInfo.characters)
//console.log('personage', personages)


// useEffect(() => {
//   getCharactersByMovieId(props.movieInfo.characters)
//     .then((res) => {
//       dispatch(getPersonagesByMovieId(res.map(i => i.data)))
//       //console.log(res)
//     })
// }, )
  
  
  //console.log(personages.map(i =>i.name))
  
  return (
    <div className={s.personageBlock}>
      

      {/* <div>
        {personages.map(i => 
        // <NavLink to={'../../personage/'+ i.name }>
          <li key={i.name}><span>Name: </span> {i.name}</li>
        // </NavLink>
        )}
      </div> */}
    </div>
  )
}

export default CharacterInfo


