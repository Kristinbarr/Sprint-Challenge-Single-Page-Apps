import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import CharacterCard from './CharacterCard'

export default function CharacterList() {
  const [chars, setChars] = useState([])

  useEffect(() => {
    Axios.get('https://rickandmortyapi.com/api/character/')
      .then((res) => {
        setChars(res.data.results)
      })
      .catch((err) => {
        console.log('failed to load characters', err)
      })
  }, [])

  return (
    <section className='character-list grid-view'>
      {chars.map(char => (
        <CharacterCard char={char} key={char.id} />
      ))}
    </section>
  )
}
