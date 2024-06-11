import React from 'react'
import NavListItem from './NavListItem'
import Headphones from '../../assets/category-headphones.png'
import Earphones from '../../assets/category-earphones.png'
import Speakers from '../../assets/category-speakers.png'

function NavList({ marginTop, isProductPage = false }) {
    return (
        <section>
            {isProductPage ? (
                <div style={{ marginTop: marginTop }} className='xl:mt-80 sm-custom:mt-72 sm:mt-[260px] xs-custom:mt-[230px] 2xs-custom:mt-[280px] 2xs:mt-[260px] mt-[230px] w-full 2xl:px-[135px] xl-custom:px-[130px] xl:px-32 lg-custom:px-12 lg:px-7 px-5 flex justify-center items-center mb-32'>
                    <div className='w-full h-full flex xs-custom:flex-row flex-col xs-custom:justify-between 2xl:gap-12 xl-custom:gap-12 xl:gap-10 lg-custom:gap-8 xs-custom:gap-7 gap-y-24'>
                        <NavListItem name="HEADPHONES" image={Headphones} path="/headphones" />
                        <NavListItem name="SPEAKERS" image={Speakers} path="/speakers" />
                        <NavListItem name="EARPHONES" image={Earphones} path="/earphones" />
                    </div>
                </div>
            ) : (
                <div style={{ marginTop: marginTop }} className='w-full 2xl:px-[135px] xl-custom:px-[130px] xl:px-32 lg-custom:px-12 lg:px-7 px-5 flex justify-center items-center mb-32'>
                    <div className='w-full h-full flex xs-custom:flex-row flex-col xs-custom:justify-between 2xl:gap-12 xl-custom:gap-12 xl:gap-10 lg-custom:gap-8 xs-custom:gap-7 gap-y-24'>
                        <NavListItem name="HEADPHONES" image={Headphones} path="/headphones" />
                        <NavListItem name="SPEAKERS" image={Speakers} path="/speakers" />
                        <NavListItem name="EARPHONES" image={Earphones} path="/earphones" />
                    </div>
                </div>
            )}
        </section>
    )
}

export default NavList