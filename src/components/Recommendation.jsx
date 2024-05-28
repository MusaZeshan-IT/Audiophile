import React from 'react'
import ProductList from '../helpers/ProductList'
import CTA from './ToViewCTA'

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
        <div className='w-full flex justify-center mt-32'>
            <div className="w-5/6 flex flex-col">
                <h1 className='mx-auto text-[32px] font-black tracking-[0.5px] mb-16'>YOU MAY ALSO LIKE</h1>
                <div className='flex justify-between'>
                    {recommendedProducts.map((product) => (
                        <div key={product.name} className='h-[340px] flex flex-col w-[31.5%]'>
                            <img className='h-full rounded-lg' src={product.image} alt={product.name} />
                            <div className='flex flex-col items-center mt-6'>
                                <h2 className='font-bold text-[28px] mb-5 tracking-[2px]'>{product.shortName}</h2>
                                <CTA bgColor='#d87d4a' btnTextColor='white' hoverBgColor='rgb(251,175,130)' pathname={`/${product.category}/${product.urlName}`} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Recommendation