import React from 'react'
import ToCartCTA from '../Cart/ToCartCTA'
import SetCartItems from '../Cart/SetCartItems';
import { toast } from 'react-toastify';

function ProductPageCard({ productId, productTitle, productShortTitle, productShorterTitle, productImageVertical, productImageHorizontal, productImage, productDesc, productPrice, isLabel = false }) {
    function handlePrice() {
        if (productPrice > 999) {
            return productPrice.toLocaleString();
        } else {
            return productPrice;
        }
    }

    function productToastTitle() {
        let message = '';
        if (productShorterTitle) {
            message = `Item \'${productShorterTitle}\' added to cart`
        } else {
            message = `Item \'${productShortTitle}\' added to cart`
        }
        return message
    }

    const handleAddToCart = () => {
        toast.success(productToastTitle(), {
            position: "top-left",
            autoClose: 1000,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }

    return (
        <div className='xl-custom:gap-x-28 xl:gap-x-24 lg-custom:gap-x-20 lg:gap-x-16 gap-x-12 2xl:px-[135px] xl-custom:px-[130px] xl:px-32 lg-custom:px-12 lg:px-7 px-5 flex md:flex-row flex-col md:h-[580px] 2xl:mb-52 xl-custom:mb-44 xl:mb-32 lg:mb-24 md:mb-20 sm:mb-32 mb-28'>
            <div className='lg:w-[55%] md-custom:w-[58%] md:w-[48%] w-full rounded-lg grid place-items-center'>
                <img className='lg:h-full md-custom:block xs:hidden block h-[90%] w-full rounded-lg' src={productImage} alt={productTitle} />
                <img className='lg:h-full md-custom:hidden md:block hidden h-[90%] w-full rounded-lg' src={productImageVertical} alt={productTitle} />
                <img className='lg:h-full md:hidden xs:block hidden h-[full] w-full rounded-lg' src={productImageHorizontal} alt={productTitle} />
            </div>
            <div className='lg:w-[45%] md-custom:w-[42%] md:w-[52%] w-full flex flex-col md:items-start xs:items-center justify-center'>
                {isLabel ?
                    <strong className='tracking-[10px] font-normal text-[#d87d4a] text-[15px] md:mt-0 xs:mt-10 mt-5 mb-4'>NEW PRODUCT</strong>
                    : null
                }
                <h2 className='md:text-start xs:text-center text-start lg:leading-[45px] xs:leading-10 leading-9 lg:text-[40px] md-custom:text-[38px] md:text-[35px] xs-custom:text-[34px] xs:text-[33px] 2xs-custom:text-[32px] 2xs:text-[31px] text-[30px] tracking-[2px] font-black mb-7 sm-custom:w-[300px] w-full'>{productTitle}</h2>
                <p className='md:text-start xs:text-center text-start text-[15.8px] mb-5 leading-[24px] tracking-[-0.01em] text-[rgba(0,0,0,0.58)] w-11/12'>{productDesc}</p>
                <p className='md:text-lg text-xl md:mt-0 mt-6 font-black tracking-[1.5px]'>$ {handlePrice()}</p>
                <div className='flex md:mt-9 mt-7'>
                    <SetCartItems productId={productId} />
                    <ToCartCTA onClickFn={handleAddToCart} productId={productId} />
                </div>
            </div>
        </div>
    )
}

export default ProductPageCard