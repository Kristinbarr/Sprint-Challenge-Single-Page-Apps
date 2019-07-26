import React from 'react'
import { Segment, Label , Divider } from 'semantic-ui-react'
import styled from 'styled-components'

const Wrapper = styled.section`
  padding: .5rem;
  width: 30%;
`
const P = styled.p`
  margin: 0;
`

export default function EpsiodeCard(props) {
  const { name, air_date, episode, characters } = props.episode

  return (
    <Wrapper>
      <Segment raised >
        <h3>Name: {name}</h3>
        <Label color='teal' align='right' ribbon>{episode}</Label>
        <Divider />
        <P><b>Air Date:</b> {air_date}</P>
        <P><b>Character Count:</b> {characters.length}</P>
      </Segment>
    </Wrapper>
  )
}
