import React from 'react';
import BgCirles from '../assets/pattern-circles.svg';
import CTA from './ToViewCTA';

function HomeProduct({ height, bgColor, titleSize, titleColor, productImage, titleLetterSpacing = '2.2px', titleName, imageOnLeft = true, mainContImg = true }) {
    const mainContDefaultCls = 'flex overflow-hidden justify-center mb-10 rounded-lg';

    // This checks whether you want to add the background image to the main container or not
    const backgroundStyle = mainContImg ?
        {
            backgroundImage: `url(${BgCirles})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '-240px -70px'
        }
        : {};

    return (
        <div>
            {imageOnLeft ? (
                <div style={{ height: height, backgroundColor: bgColor, ...backgroundStyle }} className={mainContDefaultCls}>
                    <div className='ms-32 h-full w-6/12 flex items-end relative top-4 z-[1]'>
                        <img className='h-[470px]' src={productImage} alt="" />
                    </div>
                    <div className='w-5/12 h-full flex flex-col relative top-32'>
                        <h2 style={{ fontSize: titleSize, color: titleColor, letterSpacing: titleLetterSpacing }} className='max-w-[300px] leading-none font-black'>
                            {titleName}
                        </h2>
                        <p className='text-gray-200 mt-6 text-sm tracking-[0.3px] leading-6 mb-10'>
                            Upgrade to premium speakers that are
                            <br />
                            phenomenally built to deliver truly remarkable
                            <br />
                            sound.
                        </p>
                        <CTA bgColor='rgb(25,25,25)' btnTextColor='white' hoverBgColor='rgb(76, 76, 76)' />
                    </div>
                </div>
            ) : (
                <div style={{ padding: '0 24px', justifyContent: 'start', height: height, ...backgroundStyle, backgroundImage: `url(${productImage})`, backgroundSize: 'cover' }} className={mainContDefaultCls}>
                    <div className='ps-24 h-full flex flex-col items-start justify-center z-[1]'>
                        <h2 style={{ marginBottom: '35px', fontSize: titleSize, color: titleColor, letterSpacing: titleLetterSpacing }} className='text-6xl font-black'>
                            {titleName}
                        </h2>
                        <CTA bgColor='' btnTextColorOnHover='white' border='1px solid black' hoverBgColor='black' />
                    </div>
                </div>
            )}
        </div>
    );
}

export default HomeProduct;
