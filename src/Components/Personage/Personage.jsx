import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux";

const Personage = () => {
const params = useParams()
//console.log('params => ', params)
const { characters } = useSelector(state => state.movies)
//console.log('char => ', characters)
const [personage, setPersonage] = useState({})

useEffect(() => {
  characters.map(i => {
    if(params.name === i.name){
      setPersonage(i)
    }
  }
)
}, [])


//console.log('personage=> ', personage)
  return <React.Fragment>
    <h1>Personage</h1>
      <li><span>Name: </span>{personage.name}</li>
      <li><span>Height: </span>{personage.height}</li>
      <li><span>Mass: </span>{personage.mass}</li>
      <li><span>Hair color: </span>{personage.hair_color}</li>
      <li><span>Skin color: </span>{personage.skin_color}</li>
      <li><span>Gender: </span>{personage.gender}</li>
      <li><span>Birthday: </span>{personage.birth_year}</li>
    <div>
      {personage.films}
    </div>
    </React.Fragment>
}
export default Personage