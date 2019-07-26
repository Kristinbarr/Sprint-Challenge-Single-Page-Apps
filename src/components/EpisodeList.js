import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import EpisodeCard from './EpisodeCard'

export default function EpisodeList() {
  const [episodes, setEpisodes] = useState([])

  useEffect(() => {
    Axios.get('https://rickandmortyapi.com/api/episode/')
      .then((res) => {
        setEpisodes(res.data.results)
      })
      .catch((err) => {
        console.log('failed to load episodes', err)
      })
  }, [])

  return (
    <section className='episodes-list grid-view'>
      {episodes.map((ep) => (
        <EpisodeCard episode={ep} key={ep.id} />
      ))}
    </section>
  )
}
