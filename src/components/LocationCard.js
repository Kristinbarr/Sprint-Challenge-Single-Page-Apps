import React from 'react'
import { Segment, Label } from 'semantic-ui-react'


export default function LocationCard (props) {
  const { name, type, dimension, residents } = props.loc

  return (
    <Segment color='grey' piled>
      <h3>Name: {name}</h3>
      <Label color='grey'>Residents: {residents.length}</Label>
      <p>Type: {type}</p>
      <p>Dimensions: {dimension}</p>

    </Segment>
  )
}
