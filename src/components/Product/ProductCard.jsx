import React from 'react'
import CTA from '../Shared/ToViewCTA';

function ProductCard({ productTitle, productPath, productImage, productDesc, isImageOnLeft, isLabel = false }) {
    return (
        <div className='grid place-items-center'>
            {isImageOnLeft ?
                <div className='w-5/6 flex h-[570px] mb-32'>
                    <div className='w-7/12 rounded-lg'>
                        <img className='h-full w-[80%] rounded-lg' src={productImage} alt="" />
                    </div>
                    <div className='w-5/12 flex flex-col justify-center'>
                        {isLabel ?
                            <strong className='tracking-[6px] font-normal text-[#d87d4a] text-[15px] mb-2'>NEW PRODUCT</strong>
                            : null
                        }
                        <h2 className='text-4xl font-black mb-5 w-[60%]'>{productTitle}</h2>
                        <p className='text-[16.5px] mb-6 leading-[26px] tracking-[-0.01em] text-[rgba(0,0,0,0.6)] w-11/12'>{productDesc}</p>
                        <CTA pathname={productPath} bgColor='#d87d4a' btnTextColor='white' hoverBgColor='rgb(251,175,130)' />
                    </div>
                </div>
                :
                <div className='w-5/6 flex h-[570px] mb-32'>
                    <div className='w-5/12 flex flex-col justify-center'>
                        {isLabel ?
                            <strong className='tracking-[6px] font-normal text-[#d87d4a] text-[15px] mb-2'>NEW PRODUCT</strong>
                            : null
                        }
                        <h2 className='text-4xl font-black mb-5 w-[60%]'>{productTitle}</h2>
                        <p className='text-[16.5px] mb-6 leading-[26px] tracking-[-0.02em] text-[rgba(0,0,0,0.6)] w-11/12'>{productDesc}</p>
                        <CTA pathname={productPath} bgColor='#d87d4a' btnTextColor='white' hoverBgColor='rgb(251,175,130)' />
                    </div>
                    <div className='w-7/12 rounded-lg flex justify-end'>
                        <img className='h-full w-[80%] rounded-lg' src={productImage} alt="" />
                    </div>
                </div>
            }
        </div>
    )
}

export default ProductCard