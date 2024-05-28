import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function BackButton() {
    const navigate = useNavigate();

    // This function is used to navigate back to the previous page using the navigation history
    const handleLinkClick = () => {
        navigate(-1);
    }

    return (
        <div className='w-full flex justify-center mt-20 mb-14'>
            <div className='w-5/6'>
                <Link onClick={handleLinkClick}>
                    <p className='text-[rgb(168,168,168)] tracking-[0.5px] hover:underline'>Go Back</p>
                </Link>
            </div>
        </div>
    )
}

export default BackButton