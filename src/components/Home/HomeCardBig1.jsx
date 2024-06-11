import React from 'react';
import BgCirles from '../../assets/pattern-circles.svg';
import CTA from '../Shared/ToViewCTA';

function HomeCardBig1({ pathName, height, bgColor, titleSize, titleColor, productImage, titleLetterSpacing = '2.2px', titleName, imageOnLeft = true, mainContImg = true }) {
    const mainContDefaultCls = 'flex overflow-hidden justify-center mb-10 rounded-lg';

    // This checks whether you want to add the background image to the main container or not
    const backgroundStyle = mainContImg ?
        {
            backgroundImage: `url(${BgCirles})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
        }
        : {};

    return (
        <div>
            <div className={`2xl:bg-[-320px_-210px] xl-custom:bg-[-280px_-150px] xl:bg-[-240px_-70px] lg-custom:bg-[-240px_-100px] lg:bg-[-220px_-120px] md-custom:bg-[bottom] md:bg-[-10px_-240px] sm-custom:bg-[0px_-180px] sm:bg-[-20px_-120px] xs-custom:bg-[-45px_-130px] xs:bg-[-90px_-130px] bg-[-140px_-140px] flex lg:flex-row flex-col lg:h-[550px] h-[650px] overflow-hidden lg:py-0 py-20 justify-center mb-10 rounded-lg`} style={{ height: height, backgroundColor: bgColor, ...backgroundStyle }}>
                <div className='lg:mt-6 lg:ms-32 h-full lg:w-6/12 w-full lg:justify-start justify-center flex lg:items-end z-[1]'>
                    <img className='lg:h-[470px] h-56' src={productImage} alt="" />
                </div>
                <div className='lg:w-5/12 w-full h-full flex flex-col lg:items-start items-center lg:mt-32 mt-8'>
                    <h2 style={{ fontSize: titleSize, color: titleColor, letterSpacing: titleLetterSpacing }} className='lg:text-start text-center max-w-[300px] 2xl:text-[62px] xl-custom:text-[60px] xl:text-[58px] lg:text-[56px] text-[50px] leading-none font-black'>
                        {titleName}
                    </h2>
                    <p className='lg:text-start text-center xs-custom:w-[354px] w-72 text-gray-200 mt-6 lg:text-sm text-[13.5px] tracking-[0.3px] leading-6 lg:mb-10 mb-14'>
                        Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
                    </p>
                    <CTA pathname={pathName} bgColor='rgb(25,25,25)' btnTextColor='white' hoverBgColor='rgb(76, 76, 76)' />
                </div>
            </div>
        </div>
    );
}

export default HomeCardBig1;
