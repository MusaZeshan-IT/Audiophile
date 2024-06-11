import React from 'react'
import HeroShared from '../../components/Shared/HeroShared'
import NavList from '../../components/Shared/NavList'
import ProductCard from '../../components/Product/ProductCard'
import ProductList from '../../helpers/ProductList'
import AudioGear from '../../components/Shared/AudioGear'
import { useParams } from 'react-router-dom'

function Headphones() {
    // Filtering only Headphones from the ProductList
    const { category } = useParams();
    const categoryProductsList = ProductList.filter(product => product.category === category)
    const categoryNameToUpperCase = function () {
        return category.toLocaleUpperCase();
    }

    return (
        <>
            <HeroShared titleName={categoryNameToUpperCase()} />
            {categoryProductsList.map((categoryProduct, index) => {
                if (index === 0) {
                    return (
                        <ProductCard productPath={categoryProduct.urlName} key={index} isLabel={true} productDesc={categoryProduct.desc} productTitle={categoryProduct.name} productImage={categoryProduct.image} isImageOnLeft={true} />
                    )
                } else if (index === 1) {
                    return (
                        <ProductCard productPath={categoryProduct.urlName} key={index} productDesc={categoryProduct.desc} productTitle={categoryProduct.name} productImage={categoryProduct.image} isImageOnLeft={false} />
                    )
                } else {
                    return (
                        <ProductCard productPath={categoryProduct.urlName} key={index} productDesc={categoryProduct.desc} productTitle={categoryProduct.name} productImage={categoryProduct.image} isImageOnLeft={true} />
                    )
                }
            })}
            <NavList marginTop="120px" />
            <AudioGear />
        </>
    )
}

export default Headphones