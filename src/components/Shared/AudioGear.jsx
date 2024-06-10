import React from 'react'
import Card from '../Home/HomeCard'
import BestAudioGear from '../../assets/best-gear.jpg'

function AudioGear() {
    return (
        <section>
            <div className='my-32 2xl:px-[135px] xl-custom:px-[130px] xl:px-32 lg-custom:px-12 lg:px-7 px-5 flex justify-center'>
                <div className="w-full flex items-center justify-between">
                    <div className="xl-custom:w-1/2 w-[45%]">
                        <h2 className='lg-custom:text-5xl text-[44px] font-black tracking-[3px] leading-[1.1] w-[500px]'>
                            <p>BRINGING YOU THE</p>
                            <span className='text-orange-600 me-[10px]'>BEST</span>
                            AUDIO GEAR
                        </h2>
                        <p className='text-gray-500 lg-custom:text-[17px] text-[16px] tracking-[0.2px] leading-[26px] mt-8'>
                            Located at the heart of New York City, Audiophile is the premier
                            store for high end headphones, earphones, speakers, and
                            audio accessories. We have a large showroom and luxury
                            demonstration rooms available for you to browse and
                            experience a wide range of our products. Stop by our store to
                            meet some of the fantastic people who make Audiophile the
                            best place to buy your portable audio equipment.
                        </p>
                    </div>
                    <div className="xl-custom:w-1/2 w-[55%] grid place-items-end">
                        <Card bgImage={BestAudioGear} isBgImage={true} height="570px" width="490px" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AudioGear