import React from 'react'
import NavListItem from './NavListItem'
import Headphones from '../../assets/category-headphones.png'
import Earphones from '../../assets/category-earphones.png'
import Speakers from '../../assets/category-speakers.png'

function NavList({ marginTop }) {
    return (
        <section>
            <div style={{ marginTop: marginTop }} className='w-full 2xl:px-[135px] xl-custom:px-[130px] xl:px-32 lg-custom:px-12 lg:px-7 px-5 h-52 flex justify-center items-center mb-32'>
                <div className='w-full h-full flex justify-between 2xl:gap-12 xl-custom:gap-12 xl:gap-10 lg-custom:gap-8 gap-7'>
                    <NavListItem name="HEADPHONES" image={Headphones} path="/headphones" />
                    <NavListItem name="SPEAKERS" image={Speakers} path="/speakers" />
                    <NavListItem name="EARPHONES" image={Earphones} path="/earphones" />
                </div>
            </div>
        </section>
    )
}

export default NavList