import React from 'react'
import Card from '../Home/HomeCard'
import BestAudioGear from '../../assets/best-gear.jpg'
import BestAudioGearTablet from '../../assets/best-gear-tab.jpg'

function AudioGear() {
    return (
        <section>
            <div className='my-32 2xl:px-[135px] xl-custom:px-[130px] xl:px-32 lg-custom:px-12 lg:px-7 px-5 flex justify-center'>
                <div className="w-full flex lg:flex-row flex-col-reverse items-center lg:justify-between">
                    <div className="xl-custom:w-[40%] lg:w-[45%] md:w-[80%] w-full lg:block flex flex-col items-center">
                        <h2 className='lg:hidden xs:block 2xs:hidden block lg:text-start text-center lg-custom:text-5xl lg:text-[44px] sm:text-[40px] xs-custom:text-[36px] xs:text-[34px] text-[30px] font-black tracking-[3px] leading-[1.1] lg:w-[500px] w-full'>
                            BRINGING YOU THE
                            <span className='text-orange-600 mx-[10px]'>BEST</span>
                            AUDIO GEAR
                        </h2>
                        <h2 className='lg:block hidden lg:text-start text-center lg-custom:text-5xl lg:text-[44px] sm:text-[40px] xs-custom:text-[36px] xs:text-[34px] text-[30px] font-black tracking-[3px] leading-[1.1] lg:w-[500px]'>
                            BRINGING YOU THE
                            <br />
                            <span className='text-orange-600 me-[10px]'>BEST</span>
                            AUDIO GEAR
                        </h2>
                        <h2 className='xs:hidden 2xs:block hidden lg:text-start text-center lg-custom:text-5xl lg:text-[44px] sm:text-[40px] xs-custom:text-[36px] xs:text-[34px] text-[30px] font-black tracking-[3px] leading-[1.1] lg:w-[500px] w-full'>
                            BRINGING YOU THE
                            <br />
                            <span className='text-orange-600 mx-[10px]'>BEST</span>
                            AUDIO GEAR
                        </h2>
                        <p className='text-gray-500 lg:text-start text-center lg-custom:text-[17px] md:text-[16px] sm:text-[16px] xs:text-[15px] text-[14px] tracking-[0.2px] leading-[26px] mt-8'>
                            Located at the heart of New York City, Audiophile is the premier
                            store for high end headphones, earphones, speakers, and
                            audio accessories. We have a large showroom and luxury
                            demonstration rooms available for you to browse and
                            experience a wide range of our products. Stop by our store to
                            meet some of the fantastic people who make Audiophile the
                            best place to buy your portable audio equipment.
                        </p>
                    </div>
                    <div className="xl-custom:w-[60%] lg:w-[55%] w-full flex justify-end">
                        <Card isAudioCard={true} BestGearImage={BestAudioGear} BestGearImageTablet={BestAudioGearTablet} isBgImage={true} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AudioGear