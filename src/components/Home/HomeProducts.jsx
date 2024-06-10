import React from 'react'
import Card from '../Home/HomeCard';
import CardBig from '../Home/HomeCardBig'
import HomeZX9Speaker from '../../assets/home-zx9-speaker.png';
import HomeZX7Speaker from '../../assets/home-zx7-speaker.png';
import HomeProductEarphones from '../../assets/home-earphones.jpg';


function HomeProducts() {
    return (
        <section>
            <div className='w-full 2xl:px-[135px] xl-custom:px-[130px] xl:px-32 lg-custom:px-12 lg:px-7 px-5 flex justify-center items-center'>
                <div className='w-full'>
                    <CardBig isResponsive={true} pathName="./speakers/zx9" productImage={HomeZX9Speaker} bgColor="#d87d4a" titleColor="white" titleLetterSpacing='7px' titleName="ZX9 SPEAKER" />
                    <CardBig pathName="./speakers/zx7" productImage={HomeZX7Speaker} mainContImg={false} height="330px" bgColor="rgb(231, 231, 231)" titleName="ZX7 SPEAKER" titleColor="black" titleSize="30px" imageOnLeft={false} />
                    <div className="flex justify-between">
                        <div className='w-[48%]'>
                            <Card isBgImage={true} bgImage={HomeProductEarphones} />
                        </div>
                        <div className='w-[48%]'>
                            <Card pathName="./earphones/yx1" isHeading={true} titleName="YX1 EARPHONES" isButton={true} padding="96px" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeProducts