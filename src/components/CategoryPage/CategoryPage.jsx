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
            <div className='2xl:px-[135px] xl-custom:px-[130px] xl:px-32 lg-custom:px-12 lg:px-7 px-5'>
                {categoryProductsList.map((categoryProduct, index) => {
                    if (index === 0) {
                        return (
                            <ProductCard productTabImage={categoryProduct.tabletImage} productPath={categoryProduct.urlName} key={index} isLabel={true} productDesc={categoryProduct.desc} productTitle={categoryProduct.name} productImage={categoryProduct.image} isImageOnLeft={true} />
                        )
                    } else if (index === 1) {
                        return (
                            <ProductCard productTabImage={categoryProduct.tabletImage} productPath={categoryProduct.urlName} key={index} productDesc={categoryProduct.desc} productTitle={categoryProduct.name} productImage={categoryProduct.image} isImageOnLeft={false} />
                        )
                    } else {
                        return (
                            <ProductCard productTabImage={categoryProduct.tabletImage} productPath={categoryProduct.urlName} key={index} productDesc={categoryProduct.desc} productTitle={categoryProduct.name} productImage={categoryProduct.image} isImageOnLeft={true} />
                        )
                    }
                })}
            </div>
            <NavList marginTop="200px" />
            <AudioGear />
        </>
    )
}

export default Headphones