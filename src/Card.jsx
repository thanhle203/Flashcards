/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import react from 'react'

const Card = (props) => {

  return (

    (props.flipped === true ? 
      <div className={'card flip ' + props.difficulty} onClick={props.onClick} >
        <h3>{props.answer}</h3>
      </div> 
      : 
      <div className={'card ' + props.difficulty} onClick={props.onClick} >
        <h3>{props.question}</h3>
      </div>)
    
  )
}

export default Card
