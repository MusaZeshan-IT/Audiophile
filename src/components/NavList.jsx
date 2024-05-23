import React from 'react'
import NavListItem from './NavListItem'
import Headphones from '../assets/category-headphones.png'
import Earphones from '../assets/category-earphones.png'
import Speakers from '../assets/category-speakers.png'

function NavList({ marginTop }) {
    return (
        <section>
            <div style={{ marginTop: marginTop }} className='w-full h-52 flex justify-center items-center mb-32'>
                <div className='w-5/6 h-full flex justify-between'>
                    <NavListItem name="HEADPHONES" image={Headphones} path="/headphones" />
                    <NavListItem name="SPEAKERS" image={Speakers} path="/speakers" />
                    <NavListItem name="EARPHONES" image={Earphones} path="/earphones" />
                </div>
            </div>
        </section>
    )
}

export default NavList