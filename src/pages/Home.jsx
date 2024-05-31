import React from 'react'
import Hero from '../components/Home/Hero'
import NavList from '../components/Shared/NavList'
import HomeProducts from '../components/Home/HomeProducts'
import AudioGear from '../components/Shared/AudioGear'

function Home() {
  return (
    <div>
      <Hero />
      <NavList marginTop="160px" />
      <HomeProducts />
      <AudioGear />
    </div>
  )
}

export default Home