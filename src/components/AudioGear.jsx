import React from 'react'
import Card from './Card'
import BestAudioGear from '../assets/best-gear.jpg'

function AudioGear() {
    return (
        <section>
            <div className='my-32 flex justify-center'>
                <div className="w-5/6 flex items-center justify-between">
                    <div className="w-6/12">
                        <h2 className='text-5xl font-black tracking-[3px] leading-[1.1]'>
                            BRINGING YOU THE
                            <br />
                            <span className='text-orange-600 me-[10px]'>BEST</span>
                            AUDIO GEAR
                        </h2>
                        <p className='text-gray-500 text-[17px] tracking-[0.2px] leading-[26px] mt-8'>
                            Located at the heart of New York City, Audiophile is the premier
                            <br />
                            store for high end headphones, earphones, speakers, and
                            <br />
                            audio accessories. We have a large showroom and luxury
                            <br />
                            demonstration rooms available for you to browse and
                            <br />
                            experience a wide range of our products. Stop by our store to
                            <br />
                            meet some of the fantastic people who make Audiophile the
                            <br />
                            best place to buy your portable audio equipment.
                        </p>
                    </div>
                    <div className="w-6/12 grid place-items-end">
                        <Card bgImage={BestAudioGear} isBgImage={true} height="570px" width="500px" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AudioGear