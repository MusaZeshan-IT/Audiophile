import React from 'react'
import HeroShared from '../components/HeroShared'
import ProductCard from '../components/ProductCard'
import xx99MarkTwo from '../assets/headphones/xx99-mark-two.jpg'


function Headphones() {
  return (
    <>
      <HeroShared titleName='HEADPHONES' />
      <ProductCard
        productImage={xx99MarkTwo}
        isImageOnLeft={true}
        isLabel={true}
        productTitle="XX99 MARK II HEADPHONES"
        productDesc="The new XX99 Mark II headphones is the pinnacle of pristine
      audio. It redefines your premium headphone experience by
      reproducing the balanced depth and precision of studio-quality
      sound."/>
    </>
  )
}

export default Headphones