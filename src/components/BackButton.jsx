import React from 'react'
import { Link } from 'react-router-dom'

function BackButton({ pathname }) {
    return (
        <div className='w-full flex justify-center mt-20 mb-14'>
            <div className='w-5/6'>
                <Link to={pathname}>
                    <button className='text-[rgb(168,168,168)] tracking-[0.5px] hover:underline'>Go Back</button>
                </Link>
            </div>
        </div>
    )
}

export default BackButton