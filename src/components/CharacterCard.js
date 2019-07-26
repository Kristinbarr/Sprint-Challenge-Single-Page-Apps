import React from 'react'
import styled from 'styled-components'
import { Segment, Divider } from 'semantic-ui-react'

const H3 = styled.h3`
  margin: .5rem 0;
`
const H5 = styled.h5`
  margin: 0;
  color: grey;
`
const P = styled.p`
  padding: 0;
  margin: 0;
`
const Image = styled.img`
  width: 100%;
`
const Wrapper = styled.div`
  margin: 1rem;
  width: 30%;
`

export default function CharacterCard (props) {

  const {image, name, species, location, origin, episodes } = props.char

  return (
    <Wrapper>
      <Segment raised>
        <Image src={image} />
        <H3>{name}</H3>
        <H5>{species}</H5>
        <Divider />
        <P>{location.name}</P>
        <P>{origin.name}</P>
        <p>Episodes</p>
      </Segment>
    </Wrapper>
  )
}
