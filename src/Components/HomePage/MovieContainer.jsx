import React from "react";
import style from './style.module.css'
import { NavLink } from "react-router-dom";
import CharacterInfo from "../Movies/Character/Character";

const FilmContainer = (props) => {
  // /debugger
  return (
    <div className={style.home}>
        {props.list.map((i) => 
          <div key={i.title} className={style.container}>
            <NavLink to={`/movies/${i.episode_id}`}>
              <li ><span>Name:</span> {i.title}</li>
              <li key={i.episode_id}><span>Episode:</span> {i.episode_id}</li>
              <li key={i.director}><span>Director:</span> {i.director}</li>
              <li key={i.release_date}><span>Release date:</span> {i.release_date}</li>
            </NavLink>
          </div>        
        )}
        
    </div>
  )
}

export default FilmContainer