import React from 'react'
import Card from '../Home/HomeCard';
import HomeZX9Speaker from '../../assets/home-zx9-speaker.png';
import HomeZX7Speaker from '../../assets/home-zx7-speaker.png';
import HomeZX7SpeakerTablet from '../../assets/home-zx7-speaker-tab.jpg';
import HomeProductEarphones from '../../assets/home-earphones.jpg';
import HomeCardBig2 from './HomeCardBig2';
import HomeCardBig1 from './HomeCardBig1';


function HomeProducts() {
    return (
        <section>
            <div className='w-full 2xl:px-[135px] xl-custom:px-[130px] xl:px-32 lg-custom:px-12 lg:px-7 px-5 flex justify-center items-center'>
                <div className='w-full'>
                    <HomeCardBig1 isResponsive={true} pathName="./speakers/zx9" productImage={HomeZX9Speaker} bgColor="#d87d4a" titleColor="white" titleLetterSpacing='7px' titleName="ZX9 SPEAKER" />
                    <HomeCardBig2 pathName="./speakers/zx7" bgImage={HomeZX7Speaker} bgImageTablet={HomeZX7SpeakerTablet} mainContImg={false} titleName="ZX7 SPEAKER" titleColor="black" titleSize="30px" imageOnLeft={false} />
                    <div className="grid md:grid-cols-2 md:grid-rows-1 grid-rows-2 xl:gap-8 lg-custom:gap-7 lg:gap-6 gap-5">
                        <Card isBgImage={true} bgImage={HomeProductEarphones} />
                        <Card pathName="./earphones/yx1" isHeading={true} titleName="YX1 EARPHONES" isButton={true} padding="96px" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeProducts