import React from 'react'
import { Link } from 'react-router-dom'

function CTAButton({ name, pathname, functionName }) {
    const defaultBtnClasses = 'cursor-pointer w-full font-semibold bg-[#d87d4a] hover:bg-[rgb(251,175,130)] tracking-[2px] text-white text-[12px] py-[13.5px]'

    return (
        <Link to={pathname}>
            <button onClick={() => { functionName() }} style={{ transition: 'all 0.4s ease' }} className={defaultBtnClasses}>{name}</button>
        </Link>
    )
}

export default CTAButton