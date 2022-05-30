import s from './../style.module.css'


const CharacterInfo = (props) => {
  //debugger
  return (
    <div>
      {props.characters.map(i => 
      <div className={s.charInfo}>
        <div key={i.name} className={s.blockInfo}>
        <li><span>Name:</span> {i.name}</li>
      </div>
      </div>
        )}
    </div>
  )
}

export default CharacterInfo

{/* <li><span>Height: </span>{i.height}</li>
<li><span>Birth: </span>{i.birth_year}</li>
<li><span>Eye color: </span>{i.eye_color}</li>
<li><span>Gender: </span>{i.gender}</li> */}
