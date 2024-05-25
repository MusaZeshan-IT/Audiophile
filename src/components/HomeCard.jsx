import React from 'react'
import CTA from './ToViewCTA';

function Card({ isBgImage = false, bgImage, padding, height = "320px", width, isHeading = false, isButton = false, titleName = '' }) {
    // Adding some default classes that would remain same on all the components
    const mainContDefaultCls = `flex overflow-hidden justify-center mb-10 rounded-lg bg-[rgb(241,241,241)]`;

    // This checks whether you want to add the background image to the main container or not
    const backgroundImageProps = isBgImage ? {
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
    } : {};

    return (
        <div>
            <div style={{ padding: padding, justifyContent: 'start', ...backgroundImageProps, height: height, width: width }} className={mainContDefaultCls}>
                <div className='h-full flex flex-col items-start justify-center z-[1]'>
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

export default Card