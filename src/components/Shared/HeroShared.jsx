import React from 'react'

function HeroShared({ titleName }) {
    return (
        <div className='bg-[rgb(25,25,25)] h-[245px] flex items-center justify-center mb-16'>
            <h1 className='text-[40px] font-semibold text-center text-white tracking-[2.5px]'>{titleName}</h1>
        </div>
    )
}

export default HeroShared