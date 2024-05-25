import React from 'react'
import HeroShared from '../components/HeroShared'
import ProductCard from '../components/ProductCard'
import NavList from '../components/NavList'
import AudioGear from '../components/AudioGear'
import ProductList from '../helpers/ProductList'

function Speakers() {
  const speakersList = ProductList.filter(product => product.category === 'speakers')

  return (
    <>
      <HeroShared titleName='SPEAKERS' />
      {speakersList.map((speakerProduct, index) => {
        if (index === 0) {
          return (
            <ProductCard key={index} isLabel={true} productDesc={speakerProduct.desc} productTitle={speakerProduct.name} productImage={speakerProduct.image} isImageOnLeft={true} />
          )
        } else if (index === 1) {
          return (
            <ProductCard key={index} productDesc={speakerProduct.desc} productTitle={speakerProduct.name} productImage={speakerProduct.image} isImageOnLeft={false} />
          )
        } else {
          return (
            <ProductCard key={index} productDesc={speakerProduct.desc} productTitle={speakerProduct.name} productImage={speakerProduct.image} isImageOnLeft={true} />
          )
        }
      })}
      <NavList marginTop="120px" />
      <AudioGear />
    </>
  )
}

export default Speakers