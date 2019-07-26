import React from 'react'
import { Segment, Label, Divider } from 'semantic-ui-react'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin: .5rem;
  width: 30%;
`
const P = styled.p`
  margin: 0;
`

export default function LocationCard(props) {
  const { name, type, dimension, residents } = props.loc

  return (
    <Wrapper>
      <Segment color='grey' piled>
        <h3>Name: {name}</h3>
        <Label color='purple' ribbon='right' >Population: {residents.length}</Label>
        <Divider />
        <P><b>Type:</b> {type}</P>
        <P><b>Dimensions:</b> {dimension}</P>
      </Segment>
    </Wrapper>
  )
}
