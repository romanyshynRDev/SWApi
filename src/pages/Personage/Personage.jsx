import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { NavLink, useParams } from "react-router-dom"
import Loader from "../../Components/Loader/Loader"
import { characterInfoAPI } from "../../Service/ApiService"
import style from './style.module.css'

const PersonageContainer = () => {
  const params = useParams()    
  const dispatch = useDispatch()

 
  const result = useSelector((state) => {
    return {
      characters: state.movieDetails.characters,
      personage: state.personage
    }
  })
  
  let person = result.personage.personageDetails
  let data = result.personage

  useEffect(() => {
    const personDetails = () => {
      result.characters.map((perId) => {     
          if(Number(perId.url.match(/\d+/g)) === 
          Number(params.perId)){ 
              dispatch(characterInfoAPI(perId.url)) }
              return 1
          })
          
    }
    personDetails()
  }, [dispatch, result.characters, params])

  return(
    <>
        <div className={style.container}>
          { data.isLoading
            ? <Loader/> 
            :
          <div >
              <li><span>Name: </span>{person.name}</li>
              <li><span>Birth: </span>{person.birth_year}</li>
              <li><span>Eye color: </span>{person.eye_color}</li>
              <li><span>Gender: </span>{person.gender}</li>
              <li><span>Hair color: </span>{person.hair_color}</li>
              <li><span>Height: </span>{person.height}</li>
              <li><span>Mass: </span>{person.mass}</li>
              <li><span>Skin color: </span>{person.skin_color}</li>
        
              <h2>Films:</h2>
                <div>{data.personageFilms.map((f, id) => 
                      
              <NavLink key={id} to={`../.././movies/${f.url.match(/\d+/g)}`}>
                <div >
                    <li><span>Movie name: </span>{f.title}</li>
                </div>    
              </NavLink>
                      )}
                </div>

          </div>
}  
    </div>
      </>
  )
}

export default PersonageContainer

