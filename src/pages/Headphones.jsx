import React from 'react'
import HeroShared from '../components/HeroShared'
import ProductCard from '../components/ProductCard'
import xx99MarkTwo from '../assets/headphones/xx99-mark-two.jpg'
import xx99MarkOne from '../assets/headphones/xx99-mark-one.jpg'
import xx59 from '../assets/headphones/xx59.jpg'
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
        productTitle="XX99 MARK II HEADPHONES"
        productDesc="The new XX99 Mark II headphones is the pinnacle of pristine
        audio. It redefines your premium headphone experience by
        reproducing the balanced depth and precision of studio-quality
        sound."/>
      <ProductCard
        productImage={xx99MarkOne}
        isImageOnLeft={false}
        productTitle="XX99 MARK I HEADPHONES"
        productDesc="As the gold standard for headphones, the classic XX99 Mark I
        offers detailed and accurate audio reproduction for audiophiles, mixing
        engineers, and music aficionados alike in studios and on the go."/>
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