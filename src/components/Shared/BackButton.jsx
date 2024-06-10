import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function BackButton({ marginValueTop, width = 83.33, display = 'flex' }) {
    const navigate = useNavigate();

    // This function is used to navigate back to the previous page using the navigation history
    const handleLinkClick = () => {
        navigate(-1);
    }

    return (
        <div style={{ marginTop: marginValueTop, display: display, width: width }} className='w-full justify-center mt-20 mb-14'>
            <div style={{ width: width }}>
                <Link onClick={handleLinkClick}>
                    <span className='text-[rgb(131,131,131)] tracking-wider font-semibold hover:underline'>Go Back</span>
                </Link>
            </div>
        </div>
    )
}

export default BackButton