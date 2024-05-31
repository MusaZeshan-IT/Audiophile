import React, { useContext } from 'react';
import Logo from '../../assets/logo.svg';
import { NavLink, Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

function Navbar({ handleShowModal }) {
  const { totalItemsInCart } = useContext(CartContext);

  const defaultClasses = "me-9 hover:text-orange-400";

  const renderCartBadge = () => {
    if (totalItemsInCart === 0) {
      return (
        <i className='fa-solid fa-cart-shopping cursor-pointer text-[20px] text-white'></i>
      )
    }
    if (totalItemsInCart > 0 && totalItemsInCart <= 9) {
      return (
        <div>
          <i className='fa-solid fa-cart-shopping cursor-pointer text-[20px] text-white'></i>
          <div className='w-[20px] h-[20px] relative bottom-[34.5px] left-[12.5px] bg-[#d87d4a] rounded-[50%] flex items-center justify-center'>
            <span className='text-[12px] font-semibold tracking-[1px]'>{totalItemsInCart}</span>
          </div>
        </div>
      );
    } else if (totalItemsInCart > 9) {
      return (
        <div>
          <i className='fa-solid fa-cart-shopping cursor-pointer text-[22px] text-white'></i>
          <div className='w-[22px] h-[22px] relative bottom-[37px] left-[12.5px] bg-[#d87d4a] rounded-[50%] flex items-center justify-center'>
            <span className='text-[11.6px] font-semibold tracking-[1px]'>{totalItemsInCart}</span>
          </div>
        </div>
      );
    }
  };

  return (
    <div className='bg-[rgb(25,25,25)] text-white h-[90px] flex items-center justify-center'>
      <div className='w-10/12 flex justify-between border-b border-zinc-700 py-[32.4px]'>
        <div className="leftSide">
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
        </div>
        <div className="navLinks tracking-[3px] font-bold text-[13px]">
          <NavLink to="/" className={({ isActive }) => isActive ? `${defaultClasses} text-orange-500` : defaultClasses}>HOME</NavLink>
          <NavLink to="/headphones" className={({ isActive }) => isActive ? `${defaultClasses} text-orange-500` : defaultClasses}>HEADPHONES</NavLink>
          <NavLink to="/speakers" className={({ isActive }) => isActive ? `${defaultClasses} text-orange-500` : defaultClasses}>SPEAKERS</NavLink>
          <NavLink to="/earphones" className={({ isActive }) => isActive ? `${defaultClasses} text-orange-500` : defaultClasses}>EARPHONES</NavLink>
        </div>
        <div className="rightSide">
          <button className='absolute' onClick={() => handleShowModal()} type="button" role='button'>
            {renderCartBadge()}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
