import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

function SetCartItems({ productId }) {
    const { cartItems, addItemsToCart, removeItemsFromCart } = useContext(CartContext)

    return (
        <div className='w-full h-8 bg-[rgb(241,241,241)] me-4 flex justify-between text-[15px]'>
            <button onClick={() => removeItemsFromCart(productId)} className='w-2/5 hover:bg-gray-300 h-full'>-</button>
            <span className='w-1/5 h-full flex items-center justify-center font-semibold text-[13px]'>{cartItems[productId]}</span>
            <button onClick={() => addItemsToCart(productId)} className='w-2/5 hover:bg-gray-300 h-full'>+</button>
        </div>
    )
}

export default SetCartItems