import React from 'react'
import './Card.css'

const Card = (props) => {

  console.log(props);

  return (
    <div className='card'>
      <div className='hero'>
        <img src={props.cardData.image} alt="img" />
      </div>
      <div className="content">
        <h3>{props.cardData.title}</h3>
        <p>{props.cardData.description}</p>
      </div>
      <footer>
        <button>Learn More</button>
        <h4>${props.cardData.price}</h4>
      </footer>
    </div>
  )
}

export default Card
