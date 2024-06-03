import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function BackButton({ marginValueTop }) {
    const navigate = useNavigate();

    // This function is used to navigate back to the previous page using the navigation history
    const handleLinkClick = () => {
        navigate(-1);
    }

    return (
        <div style={{ marginTop: marginValueTop }} className='w-full flex justify-center mt-20 mb-14'>
            <div className='w-5/6'>
                <Link onClick={handleLinkClick}>
                    <span className='text-[rgb(131,131,131)] tracking-wider font-semibold hover:underline'>Go Back</span>
                </Link>
            </div>
        </div>
    )
}

export default BackButton