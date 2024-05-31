import React, { useContext, useEffect, useRef } from 'react'
import { CartContext } from '../../context/CartContext';
import ShoppingCart from '../../assets/cart.svg'
import ProductList from '../../helpers/ProductList';

function Modal({ handleCloseModal, showModal }) {
    const { totalItemsInCart, removeAllItemsFromCart, cartItems } = useContext(CartContext)
    const modalRef = useRef(null)

    const productAddedToCartList = ProductList.filter((product) => {
        if (cartItems[product.id] > 0) {
            return product
        }
    })

    console.log(productAddedToCartList);

    useEffect(() => {
        function handleClickOutside(e) {
            if (modalRef.current && !modalRef.current.contains(e.target)) {
                handleCloseModal();
            }
        }
        if (showModal) {
            addEventListener('mousedown', handleClickOutside)
        } else {
            removeEventListener('mousedown', handleClickOutside)
        }
        return () => removeEventListener('mousedown', handleClickOutside)
    }, [showModal, handleCloseModal])

    if (showModal === false) {
        return null;
    }
    else {
        return (
            <div className='fixed overflow-hidden inset-0 bg-black bg-opacity-[0.4] flex justify-end items-start'>
                {/* Modal starts from here */}
                <div ref={modalRef} className='me-48 overflow-hidden mt-32 bg-white min-h-48 w-[370px] rounded-md p-7'>
                    {totalItemsInCart > 0 ? (
                        <div className='w-full flex justify-between'>
                            <span className='text-lg font-black tracking-[2px]'>
                                <span>CART </span>
                                <span className='text-lg'>(</span>
                                <span className='text-[18.5px]'>{totalItemsInCart}</span>
                                <span className='text-lg'>)</span>
                            </span>
                            <button onClick={removeAllItemsFromCart} className='text-gray-400 tracking-wide underline'>Remove All</button>
                        </div>
                    ) : (
                        <div className='w-full flex flex-col items-center'>
                            <p className='text-[rgb(141,141,141)] font-semibold tracking-[0.6px]'>Your cart is empty</p>
                            <img className='mt-4' src={ShoppingCart} alt="" height="100px" width="100px" />
                        </div>
                    )}

                </div>
                {/* Modal ends here */}
            </div>
        )
    }
}

export default Modal