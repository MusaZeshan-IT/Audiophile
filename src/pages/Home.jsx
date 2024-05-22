import React from 'react'
import Hero from '../components/Hero'
import NavList from '../components/NavList'
import HomeProducts from '../components/HomeProducts'
import AudioGear from '../components/AudioGear'

function Home() {
  return (
    <div>
      <Hero />
      <NavList />
      <HomeProducts />
      <AudioGear />
    </div>
  )
}

export default Home