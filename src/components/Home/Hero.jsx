import React from 'react'
import HeroImage from '../../assets/hero-img.jpg'
import CTA from '../Shared/ToViewCTA'

function Hero() {
    return (
        <section>
            <div className='w-full h-[610px] flex justify-center' style={{ backgroundImage: `url(${HeroImage})`, backgroundSize: 'cover', backgroundPosition: '0px 100%' }}>
                <div className='w-10/12 absolute top-[245px]'>
                    <h1 className='flex flex-col'>
                        <strong className='text-[rgb(145,145,145)] mb-3 text-[15px] tracking-[9px]'>NEW PRODUCT</strong>
                        <span className='text-[50px] leading-[1.2] text-white font-black tracking-widest'>
                            XX99 MARK II
                            <br />
                            HEADPHONES
                        </span>
                    </h1>
                    <p className='text-[rgb(156,156,156)] text-[15px] tracking-wide mt-6 leading-6 mb-10'>
                        Experience natural, lifelike audio and exceptional
                        <br />
                        build quality made for the passionate music
                        <br />
                        enthusiast.
                    </p>
                    <CTA pathname="./headphones/xx99-mark-2" bgColor='#d87d4a' btnTextColor='white' hoverBgColor='rgb(251,175,130)' />
                </div>
            </div>
        </section>
    )
}

export default Hero