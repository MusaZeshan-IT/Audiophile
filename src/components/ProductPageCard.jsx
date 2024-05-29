import React from 'react'
import ToCartCTA from './ToCartCTA'
import SetCartItems from './SetCartItems';

function ProductPageCard({ productId, productTitle, productImage, productDesc, productPrice, isLabel = false }) {
    function handlePrice() {
        if (productPrice > 999) {
            return productPrice.toLocaleString();
        } else {
            return productPrice;
        }
    }

    return (
        <div className='grid place-items-center'>
            <div className='w-5/6 flex h-[530px] mb-32'>
                <div className='w-[55%] rounded-lg'>
                    <img className='h-full w-[80%] rounded-lg' src={productImage} alt="" />
                </div>
                <div className='w-[45%] flex flex-col justify-center'>
                    {isLabel ?
                        <strong className='tracking-[10px] font-normal text-[#d87d4a] text-[15px] mb-4'>NEW PRODUCT</strong>
                        : null
                    }
                    <h2 className='text-[40px] tracking-[2px] leading-[45px] font-black mb-7 w-[60%]'>{productTitle}</h2>
                    <p className='text-[15.8px] mb-5 leading-[24px] tracking-[-0.01em] text-[rgba(0,0,0,0.58)] w-11/12'>{productDesc}</p>
                    <p className='text-lg font-black tracking-[1.5px]'>$ {handlePrice()}</p>
                    <div className='flex mt-9'>
                        <SetCartItems productId={productId} />
                        <ToCartCTA />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductPageCard