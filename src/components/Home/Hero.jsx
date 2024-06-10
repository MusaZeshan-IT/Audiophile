import React from 'react'
import HeroImage from '../../assets/hero-img.png'
import CTA from '../Shared/ToViewCTA'
import './Hero.css'

function Hero() {
    return (
        <section>
            <div className='bg-cont w-full bg-center 2xl:px-[135px] xl-custom:px-[130px] xl:px-32 lg-custom:px-12 lg:px-7 px-5 h-[610px] flex lg:justify-start justify-center'>
                <div>
                    <div className='w-full lg:mt-40 mt-32 lg:block flex flex-col items-center'>
                        <h1 className='flex flex-col'>
                            <strong className='text-[rgb(145,145,145)] lg:text-start text-center mb-3 text-[15px] tracking-[9px]'>NEW PRODUCT</strong>
                            <span className='text-[50px] lg:text-start text-center leading-[1.2] text-white font-black tracking-widest'>
                                XX99 MARK II
                                <br />
                                HEADPHONES
                            </span>
                        </h1>
                        <p className='text-[rgb(156,156,156)] lg:text-start text-center text-[15px] tracking-wide mt-6 leading-6 mb-10'>
                            Experience natural, lifelike audio and exceptional
                            <br />
                            build quality made for the passionate music
                            <br />
                            enthusiast.
                        </p>
                        <CTA pathname="./headphones/xx99-mark-2" bgColor='#d87d4a' btnTextColor='white' hoverBgColor='rgb(251,175,130)' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero