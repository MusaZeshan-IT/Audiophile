// /components/Cart/Modal.js
import React, { useContext, useEffect, useRef } from 'react';
import { CartContext } from '../../context/CartContext';
import ShoppingCart from '../../assets/cart.svg';
import ProductList from '../../helpers/ProductList';
import SetCartItems from '../Cart/SetCartItemsSmall';
import CTAButton from '../Shared/CTAButton';

function Modal({ handleCloseModal, showModal }) {
    const { totalItemsInCart, removeAllItemsFromCart, cartItems } = useContext(CartContext);
    const modalRef = useRef(null);

    const productAddedToCartList = ProductList.filter((product) => cartItems[product.id] > 0);

    function handlePrice(product) {
        return product.price > 999 ? product.price.toLocaleString() : product.price;
    }

    function handleTotalAmount() {
        let totalAmount = 0;
        for (const productIndex in productAddedToCartList) {
            const product = productAddedToCartList[productIndex];
            const actualPrice = product.price * cartItems[product.id];
            totalAmount += actualPrice;
        }
        return totalAmount > 999 ? totalAmount.toLocaleString() : totalAmount;
    }

    useEffect(() => {
        function handleClickOutside(e) {
            const isScrollbarClick = e.clientX >= document.documentElement.clientWidth || e.clientY >= document.documentElement.clientHeight;
            if (modalRef.current && !modalRef.current.contains(e.target) && !isScrollbarClick) {
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
        <div className='z-30 fixed inset-0 bg-black bg-opacity-[0.4] flex justify-end items-start'>
            <div ref={modalRef} className='me-48 overflow-auto mt-32 bg-white min-h-48 max-h-[80vh] w-[370px] rounded-md p-8 pointer-events-auto'>
                {totalItemsInCart > 0 ? (
                    <div>
                        <div className='w-full flex justify-between'>
                            <span className='text-lg font-black tracking-[2px]'>
                                <span>CART </span>
                                <span className='text-lg'>(</span>
                                <span className='text-[18.5px]'>{totalItemsInCart}</span>
                                <span className='text-lg'>)</span>
                            </span>
                            <button onClick={removeAllItemsFromCart} className='text-gray-400 tracking-wide underline'>
                                Remove All
                            </button>
                        </div>
                        <div className='w-full flex flex-col mt-6'>
                            {productAddedToCartList.map((product) => (
                                <div key={product.id} className='flex mb-6 justify-between items-center'>
                                    <div className='flex'>
                                        <img className='h-16 w-16 rounded-lg' src={product.image} alt={product.name} />
                                        <div className='flex flex-col ml-4 justify-center ms-[9px]'>
                                            <p className='text-[rgb(44,44,44)] font-black tracking-[1px] text-[15.3px]'>{product.shortName}</p>
                                            <p className='mt-1 text-[rgb(160,160,160)] font-semibold tracking-widest text-[13px]'>
                                                <span className='me-[1.6px]'>$</span>
                                                {handlePrice(product)}
                                            </p>
                                        </div>
                                    </div>
                                    <div className='w-24 h-8'>
                                        <SetCartItems productId={product.id} />
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className='w-full flex justify-between mt-3'>
                            <span className='text-gray-400 text-[15.5px]'>TOTAL</span>
                            <span className='text-[rgb(27,27,27)] text-[17.5px] font-black tracking-[1px]'>
                                <span className='me-[3px]'>$</span>
                                {handleTotalAmount()}
                            </span>
                        </div>
                        <div className='w-full mt-6'>
                            <CTAButton functionName={handleCloseModal} name="CHECKOUT" pathname="./checkout" />
                        </div>
                    </div>
                ) : (
                    <div className='w-full flex flex-col items-center'>
                        <p className='text-[rgb(141,141,141)] font-semibold tracking-[0.6px]'>Your cart is empty</p>
                        <img className='mt-4' src={ShoppingCart} alt="" height="100px" width="100px" />
                    </div>
                )}
            </div>
        </div>
    );
}

export default Modal;