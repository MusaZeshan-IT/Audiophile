import React from 'react'
import HeroShared from '../components/HeroShared'
import ProductCard from '../components/ProductCard'
import NavList from '../components/NavList'
import AudioGear from '../components/AudioGear'

function Earphones() {
  return (
    <>
      <HeroShared titleName='EARPHONES' />
      <ProductCard
        productImage={yx1}
        isImageOnLeft={true}
        isLabel={true}
        productTitle="YX1 WIRELESS EARPHONES"
        productDesc="" />
      <NavList marginTop="120px" />
      <AudioGear />
    </>
  )
}

export default Earphones