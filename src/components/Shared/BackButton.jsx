import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function BackButton({ marginValueTop, width = 83.33, isPadding = false, display = 'flex' }) {
    const navigate = useNavigate();

    // This function is used to navigate back to the previous page using the navigation history
    const handleLinkClick = () => {
        navigate(-1);
    }

    return (
        <>
            {isPadding ? (
                <div className='2xl:px-[135px] xl-custom:px-[130px] xl:px-32 lg-custom:px-12 lg:px-7 px-5 w-full justify-center my-5 lg:mt-20 lg:mb-14' style={{ marginTop: marginValueTop, display: display, width: width }}>
                    <div style={{ width: width }}>
                        <Link onClick={handleLinkClick}>
                            <span className='text-[rgb(131,131,131)] tracking-wider font-semibold hover:underline'>Go Back</span>
                        </Link>
                    </div>
                </div>
            ) : (
                <div style={{ marginTop: marginValueTop, display: display, width: width }} className='w-full justify-center mt-20 mb-14'>
                    <div style={{ width: width }}>
                        <Link onClick={handleLinkClick}>
                            <span className='text-[rgb(131,131,131)] tracking-wider font-semibold hover:underline'>Go Back</span>
                        </Link>
                    </div>
                </div>
            )}
        </>
    )
}

export default BackButton