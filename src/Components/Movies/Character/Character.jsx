import { NavLink } from 'react-router-dom'
import s from './../style.module.css'


const CharacterInfo = (props) => {
  
  return (
    <div className={s.personageBlock}>
        <div> 
          {props.char.map((i, id) => 
          <NavLink to={'../../personage/'+ i.name }>
            <li key={i.id}><span>Name: </span> {i.name}</li>
          </NavLink>
          )} 
        </div>    
    </div>
  )
}

export default CharacterInfo


