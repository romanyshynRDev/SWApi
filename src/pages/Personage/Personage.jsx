import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { NavLink, useParams } from "react-router-dom"
import Loader from "../../Components/Loader/Loader"
import { characterInfoAPI } from "../../Service/ApiService"
import style from './style.module.css'

const PersonageContainer = () => {

  const params = useParams()    
  const dispatch = useDispatch()

  const { characters } = useSelector(state => state.movieDetails)
  const { personageDetails, personageFilms, isLoading } = useSelector(state => state.personage)


  useEffect(() => {
    const personDetails = () => {
        characters.map((perId, id) => {     
          if(Number(perId.url.match(/\d+/g)) === 
          Number(params.perId)){ 
            dispatch(characterInfoAPI(perId.url)) }
          })
    }
    personDetails()
  }, [dispatch,  characters, params])

  return(
        <div className={style.container}>
          { isLoading
            ? <Loader/> 
            :
          <div >
              <li><span>Name: </span>{personageDetails.name}</li>
              <li><span>Birth: </span>{personageDetails.birth_year}</li>
              <li><span>Eye color: </span>{personageDetails.eye_color}</li>
              <li><span>Gender: </span>{personageDetails.gender}</li>
              <li><span>Hair color: </span>{personageDetails.hair_color}</li>
              <li><span>Height: </span>{personageDetails.height}</li>
              <li><span>Mass: </span>{personageDetails.mass}</li>
              <li><span>Skin color:</span>{personageDetails.skin_color}</li>
              <h2>Films:</h2>
                <div>{personageFilms.map((f, id) => 
                      
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
  )
}

export default PersonageContainer

