import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import LocationCard from './LocationCard'

export default function LocationsList() {
  const [locations, setLocations] = useState([])

  useEffect(() => {
    Axios.get('https://rickandmortyapi.com/api/location/')
      .then((res) => {
        setLocations(res.data.results)
        // console.log('locations', res.data.results)
      })
      .catch((err) => {
        console.log('failed to load locations', err)
      })
  }, [])

  return (
    <section className='locations-list grid-view'>
      {locations.map((loc) => (
        <LocationCard
          loc={loc}
          key={loc.id}
        />
      ))}
    </section>
  )
}
