import React, { useContext, useEffect, useRef, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import ProductList from '../../helpers/ProductList';
import iconChecked from '../../assets/check-mark.svg';
import CTAButton from '../Shared/CTAButton';

function SuccessModal({ handleCloseModal, showModal, grandTotal, handleValue }) {
    const { cartItems, calculateTotalProductsInCart } = useContext(CartContext);
    const modalRef = useRef(null);
    const [showAllProducts, setShowAllProducts] = useState(false); // New state for controlling product display

    const productAddedToCartList = ProductList.filter((product) => cartItems[product.id] > 0);

    function handlePrice(product) {
        return product.price > 999 ? product.price.toLocaleString() : product.price;
    }

    function handleShowAllProducts() {
        setShowAllProducts(!showAllProducts); // Function to show all products
    }

    useEffect(() => {
        function handleClickOutside(e) {
            if (modalRef.current && !modalRef.current.contains(e.target)) {
                handleCloseModal();
            }
        }
        if (showModal) {
            document.addEventListener('mousedown', handleClickOutside);
            document.body.style.overflow = 'hidden';
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.body.style.overflow = 'auto';
        };
    }, [showModal, handleCloseModal]);

    if (!showModal) {
        return null;
    }

    return (
        <div className='z-30 fixed inset-0 bg-black bg-opacity-[0.5] flex justify-center items-center sm-custom:px-0 px-4'>
            <div ref={modalRef} className='overflow-auto bg-white min-h-48 max-h-[93vh] w-[550px] rounded-md xs:p-12 2xs-custom:p-10 2xs:p-8 p-6 pointer-events-auto'>
                <img src={iconChecked} alt="" />
                <h1 className='font-black tracking-wide md:text-[33px] sm-custom:text-[32px] sm:text-[31px] xs-custom:text-[30px] xs:text-[29px] 2xs-custom:text-[28px] 2xs:text-[27px] text-[24px] mt-5 text-[rgb(25,25,25)] md:leading-10 sm:leading-9 leading-8'>THANK YOU <br /> FOR YOUR ORDER</h1>
                <p className='text-[rgb(161,161,161)] text-[15px] mt-6 tracking-[0.15px]'>You will receive an email confirmation shortly.</p>
                <div className='flex md:flex-row flex-col mb-10 mt-8'>
                    <div className='md:w-[55%] w-full p-5 min-h-36 flex flex-col justify-center bg-[rgb(241,241,241)] md:rounded-s-lg md:rounded-tr-none rounded-t-lg'>
                        {showAllProducts ? (
                            productAddedToCartList.map((product) => (
                                <div key={product.id} className='flex mb-6 justify-between items-center'>
                                    <div className='flex w-[80%]'>
                                        <img className='h-16 w-16 rounded-lg' src={product.image} alt={product.name} />
                                        <div className='flex flex-col justify-center ms-[8px]'>
                                            {product.evenShorterName ? (
                                                <p className='text-[rgb(25,25,25)] font-black tracking-[0.5px] text-[15.3px]'>{product.evenShorterName}</p>
                                            ) : (
                                                <p className='text-[rgb(25,25,25)] font-black tracking-[0.5px] text-[15.3px]'>{product.shortName}</p>
                                            )}
                                            <p className='mt-1 text-[rgb(124,124,124)] font-bold tracking-widest text-[13px]'>
                                                <span className='me-[1.6px]'>$</span>
                                                {handlePrice(product)}
                                            </p>
                                        </div>
                                    </div>
                                    <div className='w-[20%] flex justify-end'>
                                        <span className='font-semibold text-[rgb(141,141,141)] text-[14.8px]'>
                                            <span className='text-[13px] me-[0.6px]'>x</span>
                                            {cartItems[product.id]}
                                        </span>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className='flex justify-between items-center'>
                                <div className='flex w-[80%]'>
                                    <img className='h-16 w-16 rounded-lg' src={productAddedToCartList[0].image} alt={productAddedToCartList[0].name} />
                                    <div className='flex flex-col justify-center ms-[8px]'>
                                        {productAddedToCartList[0].evenShorterName ? (
                                            <p className='text-[rgb(25,25,25)] font-black tracking-[0.5px] text-[15.3px]'>{productAddedToCartList[0].evenShorterName}</p>
                                        ) : (
                                            <p className='text-[rgb(25,25,25)] font-black tracking-[0.5px] text-[15.3px]'>{productAddedToCartList[0].shortName}</p>
                                        )}
                                        <p className='mt-1 text-[rgb(124,124,124)] font-bold tracking-widest text-[13px]'>
                                            <span className='me-[1.6px]'>$</span>
                                            {handlePrice(productAddedToCartList[0])}
                                        </p>
                                    </div>
                                </div>
                                <div className='w-[20%] flex justify-end'>
                                    <span className='font-semibold text-[rgb(141,141,141)] text-[14.8px]'>
                                        <span className='text-[13px] me-[0.6px]'>x</span>
                                        {cartItems[productAddedToCartList[0].id]}
                                    </span>
                                </div>
                            </div>
                        )}
                        {calculateTotalProductsInCart() > 1 && !showAllProducts && (
                            <div className='flex justify-center font-semibold tracking-[1.5px] text-[rgb(141,141,141)] text-[11.5px]'>
                                <button className='hover:underline mt-4' onClick={handleShowAllProducts}>and {calculateTotalProductsInCart() - 1} other item(s)</button>
                            </div>
                        )}
                        {calculateTotalProductsInCart() > 1 && showAllProducts && (
                            <div className='flex border-t pt-3 border-[rgb(219,219,219)] justify-center font-semibold tracking-[1.5px] text-[rgb(141,141,141)] text-[11.5px]'>
                                <button className='hover:underline' onClick={handleShowAllProducts}>View Less</button>
                            </div>
                        )}
                    </div>
                    {showAllProducts ? (
                        <div className='md:w-[45%] w-full p-8 bg-[rgb(25,25,25)] md:rounded-e-lg md:rounded-bl-none rounded-b-lg flex flex-col justify-end'>
                            <h3 className='text-[rgb(150,147,147)] font-semibold text-[15px] tracking-wide'>GRAND TOTAL</h3>
                            <p className='text-white font-semibold tracking-wider text-[14.5px] mt-2'>
                                <span className='me-[3.6px]'>$</span>
                                {handleValue(grandTotal)}
                            </p>
                        </div>
                    ) : (
                        <div className='md:w-[45%] w-full p-8 bg-[rgb(25,25,25)] md:rounded-e-lg md:rounded-bl-none rounded-b-lg flex flex-col justify-center'>
                            <h3 className='text-[rgb(150,147,147)] font-semibold text-[15px] tracking-wide'>GRAND TOTAL</h3>
                            <p className='text-white font-semibold tracking-wider text-[14.5px] mt-2'>
                                <span className='me-[3.6px]'>$</span>
                                {handleValue(grandTotal)}
                            </p>
                        </div>
                    )}
                </div>
                <CTAButton name="BACK TO HOME" pathname="/" />
            </div>
        </div>
    );
}

export default SuccessModal;
