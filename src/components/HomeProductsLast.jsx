import React from 'react'
import HomeProductEarphones from '../assets/home-earphones.jpg';
import CTA from './CTA';

function HomeProductsLast({ isBgImage = false, isHeading = false, isButton = false, titleName }) {
    const mainContDefaultCls = 'flex overflow-hidden justify-center mb-10 rounded-lg h-80 bg-[rgb(241,241,241)]';

    const backgroundImageProps = isBgImage ? {
        backgroundImage: `url(${HomeProductEarphones})`,
        backgroundSize: 'cover',
    } : {};

    return (
        <div>
            <div style={{ padding: '0 24px', justifyContent: 'start', ...backgroundImageProps }} className={mainContDefaultCls}>
                <div className=' ps-24 h-full flex flex-col items-start justify-center z-[1]'>
                    {isHeading ?
                        <h2 style={{ marginBottom: '35px' }} className='text-black text-3xl font-black tracking-[2.2px]'>
                            {titleName}
                        </h2>
                        : null
                    }
                    {isButton ?
                        <CTA bgColor='' btnTextColorOnHover='white' border='1px solid black' hoverBgColor='black' />
                        : null
                    }
                </div>
            </div>
        </div>
    )
}

export default HomeProductsLast