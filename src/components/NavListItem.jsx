import React from 'react'
import { Link } from 'react-router-dom'

function NavListItem({ name, image }) {
    return (
        <div className='bg-[rgb(238,238,238)] h-52 flex flex-col items-center mx-3'>
            <img src={image} alt="" className='h-48 w-52 relative bottom-16' />
            <div className='relative bottom-20 flex flex-col items-center'>
                <h1 className='text-lg mb-4 font-semibold tracking-[2px]'>{name}</h1>
                <Link>
                    <span className='me-3 text-gray-500 text-sm font-semibold tracking-wider'>SHOP</span>
                    <i className='fa-solid fa-chevron-right text-orange-600 fa-sm'></i>
                </Link>
            </div>
        </div>
    )
}

export default NavListItem