import React from 'react'
import HeroShared from '../components/HeroShared'
import ProductCard from '../components/ProductCard'
import NavList from '../components/NavList'
import AudioGear from '../components/AudioGear'
import ProductList from '../helpers/ProductList'

function Earphones() {
  const earphonesList = ProductList.filter(product => product.category === 'earphones')

  return (
    <>
      <HeroShared titleName='EARPHONES' />
      {earphonesList.map((earphoneProduct, index) => {
        if (index === 0) {
          return (
            <ProductCard key={index} productPath={earphoneProduct.urlName} isLabel={true} productDesc={earphoneProduct.desc} productTitle={earphoneProduct.name} productImage={earphoneProduct.image} isImageOnLeft={true} />
          )
        } else if (index === 1) {
          return (
            <ProductCard key={index} productPath={earphoneProduct.urlName} productDesc={earphoneProduct.desc} productTitle={earphoneProduct.name} productImage={earphoneProduct.image} isImageOnLeft={false} />
          )
        } else {
          return (
            <ProductCard key={index} productPath={earphoneProduct.urlName} productDesc={earphoneProduct.desc} productTitle={earphoneProduct.name} productImage={earphoneProduct.image} isImageOnLeft={true} />
          )
        }
      })}
      <NavList marginTop="120px" />
      <AudioGear />
    </>
  )
}

export default Earphones