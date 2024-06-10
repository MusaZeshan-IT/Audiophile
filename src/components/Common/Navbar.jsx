import React, { useContext, useState } from 'react';
import Logo from '../../assets/logo.svg';
import { NavLink, Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

function Navbar({ handleShowModal, handleShowMenu, handleCloseMenu, showMenu }) {
  const { totalItemsInCart } = useContext(CartContext);

  const defaultClasses = "me-9 hover:text-orange-400";

  const renderCartBadge = () => {
    if (totalItemsInCart === 0) {
      return (
        <button className='' onClick={() => handleShowModal()} type="button" role='button'>

          <i className='fa-solid fa-cart-shopping cursor-pointer text-[20px] text-white'></i>
        </button>
      )
    }
    if (totalItemsInCart > 0 && totalItemsInCart <= 9) {
      return (
        <button className='flex' onClick={() => handleShowModal()} type="button" role='button'>
          <i className='fa-solid fa-cart-shopping cursor-pointer text-[20px] text-white'></i>
          <div className='bg-[#d87d4a] w-[20px] h-[20px] px-1 py-1 relative bottom-3 text-[14.5px] right-2 flex justify-center items-center rounded-[50%] font-semibold tracking-[1px]'>{totalItemsInCart}</div>
        </button>
      );
    } else if (totalItemsInCart > 9) {
      return (
        <button className='flex' onClick={() => handleShowModal()} type="button" role='button'>
          <i className='fa-solid fa-cart-shopping cursor-pointer text-[21px] text-white'></i>
          <div className='bg-[#d87d4a] w-[22.5px] h-[22.5px] px-1 py-1 relative bottom-3 text-[13px] right-2 flex justify-center items-center rounded-[50%] font-semibold tracking-[1px]'>{totalItemsInCart}</div>
        </button>
      );
    }
  };

  return (
    <div className='bg-[rgb(25,25,25)] 2xl:px-[135px] xl-custom:px-[130px] xl:px-32 lg-custom:px-12 lg:px-7 px-5'>
      <div className=' text-white h-[90px] items-center w-full flex justify-between border-b border-zinc-700 py-[32.4px]'>
        <div className="">
          <div className='flex items-center'>
            <i onClick={() => handleShowMenu()} className={`${showMenu ? 'hidden' : 'block'} fa-solid fa-bars lg:hidden cursor-pointer text-[18.5px] me-8`}></i>
            <i onClick={() => handleCloseMenu()} className={`${showMenu ? 'block' : 'hidden'} fa-solid fa-xmark lg:hidden block cursor-pointer text-[18.5px] me-8`}></i>
            <Link to="/">
              <img src={Logo} alt="" />
            </Link>
          </div>
        </div>
        <div className="lg:block hidden tracking-[3px] font-bold text-[13px]">
          <NavLink to="/" className={({ isActive }) => isActive ? `${defaultClasses} text-orange-500` : defaultClasses}>HOME</NavLink>
          <NavLink to="/headphones" className={({ isActive }) => isActive ? `${defaultClasses} text-orange-500` : defaultClasses}>HEADPHONES</NavLink>
          <NavLink to="/speakers" className={({ isActive }) => isActive ? `${defaultClasses} text-orange-500` : defaultClasses}>SPEAKERS</NavLink>
          <NavLink to="/earphones" className={({ isActive }) => isActive ? `${defaultClasses} text-orange-500` : defaultClasses}>EARPHONES</NavLink>
        </div>
        <div>
          {renderCartBadge()}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
