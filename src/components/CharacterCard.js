import React from 'react'
// import { Link } from 'react-router-dom'

export default function CharacterCard (props) {

  console.log('card', props)
  const {image, name, species, location, origin, episodes } = props.char

  return (
  <div>
    <img src={image}></img>
    <h3>{name}</h3>
    <h6>{species}</h6>
    <p>{location.name}</p>
    <p>{origin.name}</p>
    {/* <hr/> */}
    <p>Episodes</p>
  </div>
  )
}
