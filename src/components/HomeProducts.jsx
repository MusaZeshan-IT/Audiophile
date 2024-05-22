import React from 'react'
import HomeProduct from './HomeProduct'
import HomeZX9Speaker from '../assets/home-zx9-speaker.png';
import HomeZX7Speaker from '../assets/home-zx7-speaker.png';


function HomeProducts() {
    return (
        <div className='w-full flex justify-center items-center'>
            <div className='w-5/6'>
                <HomeProduct productImage={HomeZX9Speaker} height="550px" bgColor="#d87d4a" titleSize="60px" titleColor="white" titleLetterSpacing='7px' titleName="ZX9 SPEAKER"/>
                <HomeProduct productImage={HomeZX7Speaker} mainContImg={false} height="330px" bgColor="rgb(231, 231, 231)" titleName="ZX7 SPEAKER" titleColor="black" titleSize="30px" imageOnLeft={false}/>
            </div>
        </div>
    )
}

export default HomeProducts