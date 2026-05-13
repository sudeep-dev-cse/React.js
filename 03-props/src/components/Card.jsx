import React from 'react'

const Card = (props) => {
  return (
    <div>
         <div className ="card">
      <img src={props.img} alt="Profile" />
      <h1>{props.user} </h1>
      <p>React is a JavaScript library for building user interfaces. It allows developers to create reusable UI components and manage the state ..</p>
<button>View Profile</button>
      
    </div>
      
    </div>
  )
}

export default Card
