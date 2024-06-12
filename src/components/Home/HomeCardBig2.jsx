import React from 'react';
import BgCirles from '../../assets/pattern-circles.svg';
import CTA from '../Shared/ToViewCTA';
import './HomeCardBig2.css'
import { Link } from 'react-router-dom';

function HomeCardBig2({ pathName, height, bgImage, bgImageTablet, titleSize, titleLetterSpacing = '2.2px', titleName }) {
    const mainContDefaultCls = 'flex overflow-hidden justify-center mb-10 rounded-lg';

    return (
        <>
            <div className={`lg:block hidden lg:h-[330px] sm-custom:h-[450px] h-[500px] ${mainContDefaultCls}`} style={{ padding: '0 24px', backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', justifyContent: 'start', height: height }}>
                <div className='w-full h-full flex flex-col sm-custom:items-start sm-custom:ps-24 items-center justify-center z-[1]'>
                    <h2 className='text-center text-6xl text-black drop-shadow-2xl font-black' style={{ marginBottom: '35px', fontSize: titleSize, letterSpacing: titleLetterSpacing }}>
                        {titleName}
                    </h2>
                    <Link to={pathName}>
                        <button
                            onMouseEnter={e => {
                                e.currentTarget.style.backgroundColor = 'black'
                                e.currentTarget.style.color = 'white'
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.backgroundColor = ''
                                e.currentTarget.style.color = 'black'
                            }}
                            style={{ transition: 'all 0.4s ease' }}
                            className={`border sm-custom:border-black border-white font-semibold tracking-[2px] w-44 sm-custom:text-black text-white text-[12px] px-[28px] py-[13.5px] rounded-[2.5px]`}>SEE PRODUCT</button>
                    </Link>
                </div>
            </div>
            <div className={`md:bg-center bg-[50%] lg:hidden lg:h-[330px] sm-custom:h-[450px] sm:h-[400px] h-[300px] ${mainContDefaultCls}`} style={{ padding: '0 24px', backgroundImage: `url(${bgImageTablet})`, backgroundSize: 'cover', justifyContent: 'start', height: height }}>
                <div className='w-full h-full flex flex-col md:ps-24 sm-custom:ps-20 sm:ps-16 xs-custom:ps-14 xs:ps-10 2xs-custom:ps-8 2xs:ps-6 ps-2 justify-center z-[1]'>
                    <h2 className='text-6xl text-black drop-shadow-2xl font-black' style={{ marginBottom: '35px', fontSize: titleSize, letterSpacing: titleLetterSpacing }}>
                        {titleName}
                    </h2>
                    <Link to={pathName}>
                        <button
                            onMouseEnter={e => {
                                e.currentTarget.style.backgroundColor = 'black'
                                e.currentTarget.style.color = 'white'
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.backgroundColor = ''
                                e.currentTarget.style.color = 'black'
                            }}
                            style={{ transition: 'all 0.4s ease' }}
                            className={`border border-black font-semibold tracking-[2px] w-44 text-black text-[12px] px-[28px] py-[13.5px] rounded-[2.5px]`}>SEE PRODUCT</button>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default HomeCardBig2;
