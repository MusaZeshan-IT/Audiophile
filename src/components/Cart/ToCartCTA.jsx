import React, { useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'

function CTA({ productId }) {
    const { setItemsToCart } = useContext(CartContext)
    const location = useLocation()
    const defaultBtnClasses = 'text-white font-semibold bg-[#d87d4a] hover:bg-[rgb(251,175,130)] tracking-[2px] w-40 text-white text-[12px] px-[28px] py-[13.5px] rounded-[1px]'

    return (
        <button onClick={() => setItemsToCart(productId)} style={{ transition: 'all 0.4s ease' }} className={defaultBtnClasses}>ADD TO CART</button>
    )
}

export default CTA