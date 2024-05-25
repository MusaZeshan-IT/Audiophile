import React from 'react'
import HeroShared from '../components/HeroShared'
import ProductCard from '../components/ProductCard'
import NavList from '../components/NavList'
import AudioGear from '../components/AudioGear'
import ProductList from '../helpers/ProductList'
import BackButton from '../components/BackButton'

function Headphones() {
  // Filtering only Headphones from the ProductList
  const headphoneList = ProductList.filter(product => product.category === 'headphones')

  return (
    <>
      <HeroShared titleName='HEADPHONES' />
      {headphoneList.map((headphoneProduct, index) => {
        if (index === 0) {
          return (
            <ProductCard productPath={headphoneProduct.urlName} key={index} isLabel={true} productDesc={headphoneProduct.desc} productTitle={headphoneProduct.name} productImage={headphoneProduct.image} isImageOnLeft={true} />
          )
        } else if (index === 1) {
          return (
            <ProductCard productPath={headphoneProduct.urlName} key={index} productDesc={headphoneProduct.desc} productTitle={headphoneProduct.name} productImage={headphoneProduct.image} isImageOnLeft={false} />
          )
        } else {
          return (
            <ProductCard productPath={headphoneProduct.urlName} key={index} productDesc={headphoneProduct.desc} productTitle={headphoneProduct.name} productImage={headphoneProduct.image} isImageOnLeft={true} />
          )
        }
      })}
      <NavList marginTop="120px" />
      <AudioGear />
    </>
  )
}

export default Headphones