import React from 'react'
import HeroShared from '../components/HeroShared'
import ProductCard from '../components/ProductCard'
import NavList from '../components/NavList'
import AudioGear from '../components/AudioGear'
import zx9 from '../assets/speakers/zx9.jpg'
import zx7 from '../assets/speakers/zx7.jpg'

function Speakers() {
  return (
    <>
      <HeroShared titleName='SPEAKERS' />
      <ProductCard
        productImage={zx9}
        isImageOnLeft={true}
        isLabel={true}
        productTitle="ZX9 SPEAKERS"
        productDesc="Upgrade your sound system with the all new ZX9 active speaker.
        It’s a bookshelf speaker system that offers truly wireless connectivity --
        creating new possibilities for more pleasing and practical audio setups." />
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