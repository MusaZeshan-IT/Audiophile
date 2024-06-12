import React from 'react'
import CTA from '../Shared/ToViewCTA'
import './Hero.css'

function Hero() {
    return (
        <section>
            <div className='bg-[rgb(25,25,25)] bg-cont w-full bg-center 2xl:px-[135px] xl-custom:px-[130px] xl:px-32 lg-custom:px-12 lg:px-7 px-5 h-[610px] flex lg:justify-start justify-center'>
                <div>
                    <div className='w-full lg:mt-40 mt-32 lg:block flex flex-col items-center'>
                        <h1 className='flex flex-col'>
                            <strong className='text-[rgb(145,145,145)] lg:text-start text-center mb-3 text-[15px] tracking-[9px]'>NEW PRODUCT</strong>
                            <span className='md:text-[50px] sm-custom:text-[47px] sm:text-[44px] xs-custom:text-[41px] xs:text-[38px] text-[36px] lg:text-start text-center leading-[1.2] text-white font-black tracking-widest'>
                                XX99 MARK II
                                <br />
                                HEADPHONES
                            </span>
                        </h1>
                        <p className='xs:w-96 w-full text-[rgb(156,156,156)] lg:text-start text-center md:text-[15px] sm:text-[14.5px] text-[13.8px] tracking-wide mt-6 leading-6 mb-10'>
                            Experience natural, lifelike audio and exceptional
                            build quality made for the passionate music
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