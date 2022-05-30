import React from "react";
import { NavLink } from "react-router-dom";
import style from './style.module.css'

const MenuNavigation = () => {
  return (
    <nav className={style.menu}>
      <div className={style.menuItem}>
        <NavLink to={'/homepage'}>Home Page</NavLink>
        {/* <NavLink to={'/movies'}>Movies</NavLink>
        <NavLink to={'/actors'}>Actors</NavLink> */}
      </div>
    </nav>
  )
}
export default MenuNavigation