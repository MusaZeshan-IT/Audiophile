import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function CTA() {
    const location = useLocation()
    const defaultBtnClasses = 'text-white font-semibold bg-[#d87d4a] hover:bg-[rgb(251,175,130)] tracking-[2px] w-40 text-white text-[12px] px-[28px] py-[13.5px] rounded-[1px]'

    return (
        <Link to="">
            <button
                style={{ transition: 'all 0.4s ease' }}
                className={defaultBtnClasses}>ADD TO CART</button>
        </Link>
    )
}

export default CTA