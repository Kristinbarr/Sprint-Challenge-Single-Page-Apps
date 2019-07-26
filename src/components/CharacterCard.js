import React from 'react'
import Styled from 'styled-components'
import { Segment, Container, Divider } from 'semantic-ui-react'
// import { Link } from 'react-router-dom'

const H5 = Styled.h5`
  color: #555;
`;

export default function CharacterCard (props) {

  console.log('card', props)
  const {image, name, species, location, origin, episodes } = props.char

  return (
    <div>
      <Segment raised textAlign='justified'>
        <img src={image} />
        <h3>{name}</h3>
        <h5>{species}</h5>
        <Divider />
        <p>{location.name}</p>
        <p>{origin.name}</p>
        {/* <hr/> */}
        <p>Episodes</p>
      </Segment>
    </div>
  )
}
