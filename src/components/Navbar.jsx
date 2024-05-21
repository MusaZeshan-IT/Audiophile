import React from 'react'
import Logo from '../assets/logo.svg'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  const defaultClasses = "me-9 hover:text-orange-400";
  return (
    <div className='bg-[rgb(30,30,30)] text-white h-20 flex items-center justify-center'>
      <div className='w-10/12 flex justify-between border-b border-gray-700 py-[26px]'>
        <div className="leftSide">
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
        </div>
        <div className="navLinks tracking-widest font-bold text-[14.4px]">
          <NavLink exact to="/" className={({ isActive }) => isActive ? `${defaultClasses} text-orange-500` : defaultClasses}>HOME</NavLink>
          <NavLink to="/headphones" className={({ isActive }) => isActive ? `${defaultClasses} text-orange-500` : defaultClasses}>HEADPHONES</NavLink>
          <NavLink to="/speakers" className={({ isActive }) => isActive ? `${defaultClasses} text-orange-500` : defaultClasses}>SPEAKERS</NavLink>
          <NavLink to="/earphones" className={({ isActive }) => isActive ? `${defaultClasses} text-orange-500` : defaultClasses}>EARPHONES</NavLink>
        </div>
        <div className="rightSide">
          <i className='fa-solid fa-cart-shopping cursor-pointer fa-lg text-white'></i>
        </div>
      </div>
    </div>
  )
}

export default Navbar