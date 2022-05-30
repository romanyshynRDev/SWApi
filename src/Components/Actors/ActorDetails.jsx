import React from 'react';
import { useState } from 'react';
import style from './style.module.css'

const ActorDetails = () => {


  const [personage, setPersonage] = useState([])
  
    async function fetchActors(){
      let res = await fetch(`https://swapi.dev/api/people/?format-json`)
      let data = await res.json()
      setPersonage(data.results)
    } 
    
    fetchActors()
  


  console.log('actors', personage)
    
  return (
    <React.Fragment>
      <container className={style.personage}>
        <div className={style.blockInfo}>
          {personage.map(i => <li>{i.name}</li>)}
        </div>
      </container>
      <h1>STAR WARS</h1>
    </React.Fragment>
  )
  
}
export default ActorDetails