import React from 'react'

function ProductGallery({productImg1, productImg2, productImg3}) {
    return (
        <div className='w-full flex justify-center mt-28'>
            <div className='w-5/6 flex h-[550px]'>
                <div className='w-[40%] flex flex-col justify-between'>
                    <div className='h-[47.7%] w-full'>
                        <img className='h-full w-full rounded-[10px]' src={productImg1} alt="" />
                    </div>
                    <div className='h-[47.7%] w-full'>
                        <img className='h-full w-full rounded-[10px]' src={productImg2} alt="" />
                    </div>
                </div>
                <div className='w-[60%] ps-6'>
                    <img className='h-full w-full rounded-[10px]' src={productImg3} alt="" />
                </div>
            </div>
        </div>
    )
}

export default ProductGallery