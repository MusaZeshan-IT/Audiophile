import React from 'react'
import NavListItem from './NavListItem'
import Headphones from '../assets/category-headphones.png'
import Earphones from '../assets/category-earphones.png'
import Speakers from '../assets/category-speakers.png'

function NavList() {
    return (
        <section>
            <div className='w-full h-52 flex justify-center items-center mt-40 mb-32'>
                <div className='w-5/6 h-full grid grid-cols-3'>
                    <NavListItem name="HEADPHONES" image={Headphones} />
                    <NavListItem name="SPEAKERS" image={Speakers} />
                    <NavListItem name="EARPHONES" image={Earphones} />
                </div>
            </div>
        </section>
    )
}

export default NavList