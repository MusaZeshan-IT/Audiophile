import React from 'react'
import Card from '../Home/HomeCard';
import CardBig from '../Home/HomeCardBig'
import HomeZX9Speaker from '../../assets/home-zx9-speaker.png';
import HomeZX7Speaker from '../../assets/home-zx7-speaker.png';
import HomeProductEarphones from '../../assets/home-earphones.jpg';


function HomeProducts() {
    return (
        <section>
            <div className='w-full flex justify-center items-center'>
                <div className='w-5/6'>
                    <CardBig productImage={HomeZX9Speaker} height="550px" bgColor="#d87d4a" titleSize="60px" titleColor="white" titleLetterSpacing='7px' titleName="ZX9 SPEAKER" />
                    <CardBig productImage={HomeZX7Speaker} mainContImg={false} height="330px" bgColor="rgb(231, 231, 231)" titleName="ZX7 SPEAKER" titleColor="black" titleSize="30px" imageOnLeft={false} />
                    <div className="flex justify-between">
                        <div className='w-[48%]'>
                            <Card isBgImage={true} bgImage={HomeProductEarphones} />
                        </div>
                        <div className='w-[48%]'>
                            <Card isHeading={true} titleName="YX1 EARPHONES" isButton={true} padding="96px" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeProducts