import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import EpisodeCard from './EpisodeCard'

export default function EpisodeList() {
  // TODO: Add useState to track data from useEffect
  const [episodes, setEpisodes] = useState([])

  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    Axios.get('https://rickandmortyapi.com/api/episode/')
      .then((res) => {
        console.log('char res', res)
        setEpisodes(res.data.results)
      })
      .catch((err) => {
        console.log('failed to load episodes', err)
      })
  }, [])

  console.log('episodes', episodes)
  return (
    <section className='episodes-list grid-view'>
      {episodes.map((ep) => (
        <EpisodeCard episode={ep} key={ep.id} />
      ))}
    </section>
  )
}
