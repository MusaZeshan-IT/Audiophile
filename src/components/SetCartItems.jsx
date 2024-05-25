import React from 'react'

function SetCartItems() {
    return (
        <div className='w-32 bg-[rgb(241,241,241)] me-4 flex justify-between text-[15px]'>
            <button className='w-2/5 hover:bg-gray-300 h-full'>-</button>
            <span className='w-1/5 h-full flex items-center justify-center font-black text-[14px]'>1</span>
            <button className='w-2/5 hover:bg-gray-300 h-full'>+</button>
        </div>
    )
}

export default SetCartItems