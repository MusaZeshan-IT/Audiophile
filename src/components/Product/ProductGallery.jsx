import React from 'react'

function ProductGallery({ productImg1, productImg2, productImg3 }) {
    return (
        <div className='xl-custom:gap-x-7 xl:gap-x-6 lg:gap-x-7 md:gap-x-6 gap-x-5 2xl:px-[135px] xl-custom:px-[130px] xl:px-32 lg-custom:px-12 lg:px-7 px-5 mt-28 w-full flex max-h-[700px]'>
            <div className='w-[40%] flex flex-col xl-custom:gap-y-7 xl:gap-y-6 lg:gap-y-7 md:gap-y-6 gap-y-5'>
                <div className='h-1/2 w-full'>
                    <img className='h-full w-full rounded-[10px]' src={productImg1} alt="" />
                </div>
                <div className='h-1/2 w-full'>
                    <img className='h-full w-full rounded-[10px]' src={productImg2} alt="" />
                </div>
            </div>
            <div className='w-[60%]'>
                <img className='h-full w-full rounded-[10px]' src={productImg3} alt="" />
            </div>
        </div>
    )
}

export default ProductGallery