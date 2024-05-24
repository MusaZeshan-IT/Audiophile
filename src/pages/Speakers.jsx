import React from 'react'
import HeroShared from '../components/HeroShared'
import ProductCard from '../components/ProductCard'
import NavList from '../components/NavList'
import AudioGear from '../components/AudioGear'

function Speakers() {
  return (
    <>
      <HeroShared titleName='SPEAKERS' />
      <ProductCard
        productImage={zx9}
        isImageOnLeft={true}
        isLabel={true}
        productTitle="ZX9 SPEAKERS"
        productDesc="" />
      <ProductCard
        productImage={zx7}
        isImageOnLeft={false}
        productTitle="ZX7 SPEAKERS"
        productDesc="Stream high quality sound wirelessly with minimal to no loss.
        The ZX7 speaker uses high-end audiophile components that represents the top
        of the line powered speakers for home or studio use." />
      <NavList marginTop="120px" />
      <AudioGear />
    </>
  )
}

export default Speakers