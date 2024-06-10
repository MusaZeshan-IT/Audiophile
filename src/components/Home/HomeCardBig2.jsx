import React from 'react';
import BgCirles from '../../assets/pattern-circles.svg';
import CTA from '../Shared/ToViewCTA';
import './HomeCardBig2.css'
import { Link } from 'react-router-dom';

function HomeCardBig2({ pathName, height, titleSize, titleColor, productImage, titleLetterSpacing = '2.2px', titleName }) {
    const mainContDefaultCls = 'flex overflow-hidden justify-center mb-10 rounded-lg';

    return (
        <div className={`lg:bg-[20%] md-custom:bg-[35%] md:bg-[45%] sm-custom:bg-[55%] sm:bg-[83%] xs-custom:bg-[81.5%] xs:bg-[78%] bg-[76%] home-card2-bg-cont lg:h-[330px] sm-custom:h-[450px] h-[500px] ${mainContDefaultCls}`} style={{ padding: '0 24px', justifyContent: 'start', height: height }}>
            <div className='w-full h-full flex flex-col sm-custom:items-start sm-custom:ps-24 items-center justify-center z-[1]'>
                <h2 className='text-center text-6xl sm-custom:text-black text-[rgb(255,255,255)] drop-shadow-2xl font-black' style={{ marginBottom: '35px', fontSize: titleSize, letterSpacing: titleLetterSpacing }}>
                    {titleName}
                </h2>
                <Link to=''>
                    <button
                        onMouseEnter={e => {
                            e.currentTarget.style.backgroundColor = 'white'
                            e.currentTarget.style.color = 'black'
                        }}
                        onMouseLeave={e => {
                            e.currentTarget.style.backgroundColor = 'black'
                            e.currentTarget.style.color = 'white'
                        }}
                        style={{transition: 'all 0.4s ease' }}
                        className={`border sm-custom:border-black border-white font-semibold tracking-[2px] w-44 sm-custom:text-black text-white text-[12px] px-[28px] py-[13.5px] rounded-[2.5px]`}>SEE PRODUCT</button>
                </Link>
            </div>
        </div>
    );
}

export default HomeCardBig2;
