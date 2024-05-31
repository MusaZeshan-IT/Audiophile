import React from 'react'
import HeroShared from '../components/Shared/HeroShared'
import ProductCard from '../components/Product/ProductCard'
import NavList from '../components/Shared/NavList'
import AudioGear from '../components/Shared/AudioGear'
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