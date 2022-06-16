import React from "react"
import { NavLink } from "react-router-dom"

const MovieCharacter = (props) => {
    return (
         <div>
            {props.characters.map((i, id) => 
                  <div key={id}> 
                     <NavLink to={`/personage/${i.url.match(/\d+/g)}`}>
                        <li ><span>Name: </span>{i.name}</li>
                     </NavLink>          
                  </div>
            )} 
         </div>
    )
}
export default MovieCharacter