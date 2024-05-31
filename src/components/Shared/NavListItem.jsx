import React from 'react'
import { Link } from 'react-router-dom'

function NavListItem({ name, image, path }) {
    return (
        <div className='w-[350px] bg-[rgb(238,238,238)] h-52 mx-3 rounded-lg shadow-md shadow-gray-300'>
            <Link to={path}>
                <div className='flex flex-col items-center'>
                    <img src={image} alt="" className='h-48 w-52 relative bottom-16' />
                    <div className='relative bottom-20 flex flex-col items-center'>
                        <h1 className='text-lg mb-4 font-semibold tracking-[2px]'>{name}</h1>
                        <div>
                            <span className='me-2 text-gray-500 text-[12px] font-semibold tracking-[1.5px]'>SHOP</span>
                            <i className='fa-solid fa-chevron-right text-orange-600 text-[13px]'></i>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default NavListItem