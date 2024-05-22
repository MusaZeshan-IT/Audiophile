import React from 'react'
import HomeProductsFirst from './HomeProductsFirst'
import HomeZX9Speaker from '../assets/home-zx9-speaker.png';
import HomeZX7Speaker from '../assets/home-zx7-speaker.png';
import HomeProductsLast from './HomeProductsLast';


function HomeProducts() {
    return (
        <div className='w-full flex justify-center items-center'>
            <div className='w-5/6'>
                <HomeProductsFirst productImage={HomeZX9Speaker} height="550px" bgColor="#d87d4a" titleSize="60px" titleColor="white" titleLetterSpacing='7px' titleName="ZX9 SPEAKER" />
                <HomeProductsFirst productImage={HomeZX7Speaker} mainContImg={false} height="330px" bgColor="rgb(231, 231, 231)" titleName="ZX7 SPEAKER" titleColor="black" titleSize="30px" imageOnLeft={false} />
                <div className="flex justify-between">
                    <div className='w-[48%]'>
                        <HomeProductsLast isBgImage={true} />
                    </div>
                    <div className='w-[48%]'>
                        <HomeProductsLast isHeading={true} titleName="YX1 EARPHONES" isButton={true} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeProducts