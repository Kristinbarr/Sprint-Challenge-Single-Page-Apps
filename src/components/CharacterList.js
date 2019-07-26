import React, { useEffect, useState } from 'react'
import Axios from 'axios'

import CharacterCard from './CharacterCard'

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [chars, setChars] = useState([])

  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    Axios.get('https://rickandmortyapi.com/api/character/')
      .then((res) => {
        console.log('char res', res.data)
        setChars(res.data.results)
      })
      .catch((err) => {
        console.log('failed to load characters', err)
      })
  }, [])

  console.log('chars', chars)

  return (
    <section className='character-list grid-view'>
      {chars.map(char => (
        <CharacterCard char={char} key={char.id} />
      ))}
    </section>
  )
}
