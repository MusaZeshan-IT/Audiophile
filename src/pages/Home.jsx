import React from 'react'
import Hero from '../components/Hero'
import NavList from '../components/NavList'
import HomeProducts from '../components/HomeProducts'

function Home() {
  return (
    <div>
      <Hero />
      <NavList />
      <HomeProducts />
    </div>
  )
}

export default Home