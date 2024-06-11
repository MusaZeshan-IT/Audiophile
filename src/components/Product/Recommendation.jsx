import React from 'react'
import ProductList from '../../helpers/ProductList'
import CTA from '../Shared/ToViewCTA'

function Recommendation({ currentProduct }) {
    const filteredProducts = ProductList.filter((product) => {
        return product.category === currentProduct.category && product.name !== currentProduct.name
    })

    let recommendedProducts = filteredProducts.slice(0, 3)

    if (recommendedProducts.length < 3) {
        const additionalProducts = ProductList.filter((product) => {
            return product.category !== currentProduct.category && product.name !== currentProduct.name
        })
        const productsToAdd = 3 - recommendedProducts.length
        for (let i = 0; i < productsToAdd && i < additionalProducts.length; i++) {
            recommendedProducts.push(additionalProducts[i])
        }
    }

    return (
        <div className="2xl:px-[135px] xl-custom:px-[130px] xl:px-32 lg-custom:px-12 lg:px-7 px-5 w-full flex flex-col mt-32">
            <h1 className='mx-auto text-[32px] font-black tracking-[0.5px] mb-16'>YOU MAY ALSO LIKE</h1>
            <div className='flex md:flex-row flex-col 2xl:gap-12 xl-custom:gap-12 xl:gap-10 lg-custom:gap-8 md:gap-7 gap-y-[220px]'>
                {recommendedProducts.map((product) => (
                    <div key={product.name} className='h-[340px] flex flex-col w-full'>
                        <img className='h-full lg:block xs-custom:hidden block rounded-lg' src={product.image} alt={product.name} />
                        <img className='h-full lg:hidden md:block hidden rounded-lg' src={product.tabletImageVertical} alt={product.name} />
                        <img className='h-full md:hidden xs-custom:block hidden rounded-lg' src={product.tabletImage} alt={product.name} />
                        <div className='flex flex-col items-center mt-6'>
                            <h2 className='font-bold text-[28px] mb-5 tracking-[2px]'>{product.shortName}</h2>
                            <CTA bgColor='#d87d4a' btnTextColor='white' hoverBgColor='rgb(251,175,130)' pathname={`/${product.category}/${product.urlName}`} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Recommendation