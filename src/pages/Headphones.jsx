import React from 'react'
import HeroShared from '../components/Shared/HeroShared'
import NavList from '../components/Shared/NavList'
import ProductCard from '../components/Product/ProductCard'
import ProductList from '../helpers/ProductList'
import AudioGear from '../components/Shared/AudioGear'

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