import React from 'react'
import CTA from '../Shared/ToViewCTA';

function ProductCard({ productTitle, productPath, productImage, productTabImage, productDesc, isImageOnLeft, isLabel = false }) {
    return (
        <>
            {isImageOnLeft ?
                <div className='flex lg:flex-row flex-col lg:h-[570px] mb-32 xl-custom:gap-x-28 xl:gap-x-24 lg-custom:gap-x-20 lg:gap-x-16 gap-y-10'>
                    <div className='lg:block sm:hidden lg:w-[55%] w-full rounded-lg'>
                        <img className='lg:h-full w-full rounded-lg' src={productImage} alt="" />
                    </div>
                    <div className='lg:hidden sm:block hidden w-full rounded-lg'>
                        <img className='h-full w-full rounded-lg' src={productTabImage} alt="" />
                    </div>
                    <div className='lg:w-[45%] w-full flex flex-col lg:items-start items-center justify-center'>
                        {isLabel ?
                            <strong className='tracking-[6px] font-normal text-[#d87d4a] text-[15px] mb-2'>NEW PRODUCT</strong>
                            : null
                        }
                        <h2 className='xs:text-4xl leading-[40px] 2xs-custom:text-[34px] 2xs:text-[34px] text-[30px] font-black mb-5 lg:w-[60%] lg:tracking-normal tracking-wide 2xs:w-[300px] w-[240px] lg:text-start text-center'>{productTitle}</h2>
                        <p className='lg:text-start text-center xs:text-[16.5px] 2xs-custom:text-[16px] 2xs:text-[15.5px] text-[15px] mb-6 leading-[26px] tracking-[-0.01em] text-[rgba(0,0,0,0.6)] w-11/12'>{productDesc}</p>
                        <CTA pathname={productPath} bgColor='#d87d4a' btnTextColor='white' hoverBgColor='rgb(251,175,130)' />
                    </div>
                </div>
                :
                <div className='flex lg:flex-row flex-col-reverse lg:h-[570px] mb-32 xl-custom:gap-x-28 xl:gap-x-24 lg-custom:gap-x-20 lg:gap-x-16 gap-y-10'>
                    <div className='lg:w-[45%] w-full flex flex-col lg:items-start items-center justify-center'>
                        {isLabel ?
                            <strong className='tracking-[6px] font-normal text-[#d87d4a] text-[15px] mb-2'>NEW PRODUCT</strong>
                            : null
                        }
                        <h2 className='xs:text-4xl leading-[40px] 2xs-custom:text-[34px] 2xs:text-[34px] text-[30px] font-black mb-5 lg:w-[60%] lg:tracking-normal tracking-wide 2xs:w-[300px] w-[240px] lg:text-start text-center'>{productTitle}</h2>
                        <p className='lg:text-start text-center xs:text-[16.5px] 2xs-custom:text-[16px] 2xs:text-[15.5px] text-[15px] mb-6 leading-[26px] tracking-[-0.01em] text-[rgba(0,0,0,0.6)] w-11/12'>{productDesc}</p>
                        <CTA pathname={productPath} bgColor='#d87d4a' btnTextColor='white' hoverBgColor='rgb(251,175,130)' />
                    </div>
                    <div className='lg:flex sm:hidden lg:w-[55%] w-full rounded-lg  justify-end'>
                        <img className='h-full w-full rounded-lg' src={productImage} alt="" />
                    </div>
                    <div className='lg:hidden sm:block hidden w-full rounded-lg'>
                        <img className='h-full w-full rounded-lg' src={productTabImage} alt="" />
                    </div>
                </div>
            }
        </>
    )
}

export default ProductCard