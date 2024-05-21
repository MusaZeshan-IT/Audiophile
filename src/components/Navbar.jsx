import React from 'react'
import Logo from '../assets/logo.svg'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className='bg-[rgb(30,30,30)] text-white h-20 flex items-center justify-center'>
        <div className='w-10/12 flex justify-between border-b border-gray-700 py-[26px]'>
            <div className="leftSide">
                <img src={Logo} alt="" />
            </div>
            <div className="navLinks tracking-widest font-bold text-[15px]">
                <NavLink to="/" className="me-8 hover:tracking-wider">HOME</NavLink>
                <NavLink to="/headphones" className="me-8 hover:tracking-wider">HEADPHONES</NavLink>
                <NavLink to="/speakers" className="me-8 hover:tracking-wider">SPEAKERS</NavLink>
                <NavLink to="/earphones" className="me-8 hover:tracking-wider">EARPHONES</NavLink>
            </div>
            <div className="rightSide">
              <i className='fa-solid fa-cart-shopping fa-lg text-white'></i>
            </div>
        </div>
    </div>
  )
}

export default Navbar