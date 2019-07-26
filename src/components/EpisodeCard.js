import React from 'react'
import { Segment, Label , Divider } from 'semantic-ui-react'
import styled from 'styled-components'

const seg = styled.div`
  margin: 2rem;
`

export default function EpsiodeCard(props) {
  console.log('episode', props)
  const { name, air_date, episode, characters } = props.episode

  return (
    <div>
      <Segment padded raised textAlign='justified'>
        <h3>Name: {name}</h3>
        <Label attached='top right'>{episode}</Label>
        <Divider />
        <p>Air Date: {air_date}</p>
        <p>Character Count: {characters.length}</p>
      </Segment>
    </div>
  )
}
