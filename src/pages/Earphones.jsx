import React from 'react'
import HeroShared from '../components/HeroShared'
import ProductCard from '../components/ProductCard'
import NavList from '../components/NavList'
import AudioGear from '../components/AudioGear'
import yx1 from '../assets/earphones/yx1-earphones.jpg'

function Earphones() {
  return (
    <>
      <HeroShared titleName='EARPHONES' />
      <ProductCard
        productImage={yx1}
        isImageOnLeft={true}
        isLabel={true}
        productTitle="YX1 WIRELESS EARPHONES"
        productDesc="Tailor your listening experience with bespoke dynamic drivers
        from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound
        even in noisy environments with its active noise cancellation feature." />
      <NavList marginTop="120px" />
      <AudioGear />
    </>
  )
}

export default Earphones