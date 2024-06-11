import React from 'react'
import { Link } from 'react-router-dom'

function NavListItem({ name, image, path, handleCloseMenu, isNavMenu = false }) {
    return (
        <>
            {isNavMenu === false ? (
                <div className='w-full bg-[rgb(238,238,238)] xl-custom:h-[190px] h-[180px] rounded-lg shadow-md shadow-gray-300'>
                    <Link to={path}>
                        <div className='flex flex-col items-center'>
                            <img src={image} alt="" className='h-44 w-52 relative bottom-16' />
                            <div className='relative bottom-[78px] flex flex-col items-center'>
                                <h1 className='text-lg mb-2 font-semibold tracking-[2px]'>{name}</h1>
                                <div>
                                    <span className='me-2 text-gray-500 text-[12px] font-semibold tracking-[1.5px]'>SHOP</span>
                                    <i className='fa-solid fa-chevron-right text-orange-600 text-[13px]'></i>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            ) : (
                <div onClick={() => handleCloseMenu()} className='bg-[rgb(238,238,238)] h-[150px] w-full rounded-lg shadow-md shadow-gray-300'>
                    <Link to={path}>
                        <div className='flex flex-col items-center'>
                            <img src={image} alt="" className='h-32 object-cover relative bottom-12' />
                            <div className='relative bottom-[52px] flex flex-col items-center'>
                                <h1 className='mb-[8px] font-semibold tracking-[2px]'>{name}</h1>
                                <div>
                                    <span className='me-2 text-gray-500 text-[12px] font-semibold tracking-[1.5px]'>SHOP</span>
                                    <i className='fa-solid fa-chevron-right text-orange-600 text-[13px]'></i>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            )}

        </>
    )
}

export default NavListItem