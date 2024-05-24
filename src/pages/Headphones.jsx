import React from 'react'
import HeroShared from '../components/HeroShared'
import ProductCard from '../components/ProductCard'
import NavList from '../components/NavList'
import AudioGear from '../components/AudioGear'


function Headphones() {
  return (
    <>
      <HeroShared titleName='HEADPHONES' />
      <ProductCard
        productImage={xx99MarkTwo}
        isImageOnLeft={true}
        isLabel={true}
        productTitle=""
        productDesc=""/>
      <ProductCard
        productImage={xx99MarkOne}
        isImageOnLeft={false}
        productTitle=""
        productDesc=""/>
      <ProductCard
        productImage={xx59}
        isImageOnLeft={true}
        productTitle="XX59 HEADPHONES"
        productDesc="Enjoy your audio almost anywhere and customize it to your
        specific tastes with the XX59 headphones. The stylish yet durable versatile
        wireless headset is a brilliant companion at home or on the move." />
      <NavList marginTop="120px" />
      <AudioGear />
    </>
  )
}

export default Headphones