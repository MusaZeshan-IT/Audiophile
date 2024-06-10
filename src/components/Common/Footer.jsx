import React from 'react'
import Logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='w-full bg-[rgb(25,25,25)] sm:block flex justify-center relative 2xl:px-32 xl-custom:px-28 xl:px-24 lg-custom:px-16 px-8'>
      <div className='content-empty::before block absolute sm:right-auto sm:left-auto h-1 w-[102px] bg-[rgb(216,125,74)]'></div>
      <div className='lg:pt-[75px] sm:pt-[60px] pt-[50px] pb-10'>
        {/* First Section */}
        <div className="flex md-custom:flex-row flex-col sm:justify-between justify-center sm:items-start items-center">
          <div className='flex xl:h-7 lg-custom:h-[26px] h-[25px]'>
            <img className='h-full' src={Logo} alt="Audiophile Logo" />
          </div>
          <div className='flex sm:flex-row flex-col items-center md-custom:mt-0 mt-8 text-white font-semibold xl:gap-10 lg-custom:gap-8 lg:gap-7 gap-5 tracking-[2.5px] xl:text-[14px] lg-custom:text-[13.5px] text-[13px]'>
            <Link to='/'>HOME</Link>
            <Link to='/headphones'>HEADPHONES</Link>
            <Link to='/speakers'>SPEAKERS</Link>
            <Link to='/earphones'>EARPHONES</Link>
          </div>
        </div>
        {/* Second Section */}
        <div className='lg:w-[66%] w-full mt-12'>
          <p className='sm:text-start text-center text-[rgb(156,156,156)] tracking-[0.001em] font-medium lg-custom:leading-7 leading-6 xl:text-[17px] lg-custom:text-[16.4px] text-[15.8px] xl:w-[75%] lg-custom:w-[85%] w-[100%]'>
            Audiophile is an all in one stop to fulfill your audio needs. We're a small team
            of music lovers and sound specialists who are devoted to helping you get the
            most out of personal audio. Come and visit our demo facility - we’re open 7
            days a week.
          </p>
        </div>
        {/* Third Section */}
        <div className='flex sm:flex-row flex-col sm:items-start items-center sm:justify-between mt-14'>
          <p className='text-[rgb(156,156,156)] xl:text-[15.5px] lg-custom:text-[15px] sm:text-[14.5px] text-[14px]'> Copyright &copy; 2021. All Rights Reserved.</p>
          <div className='sm:mt-0 mt-10 flex relative lg:bottom-16 bottom-0 justify-end xl:text-[29px] lg-custom:text-[28px] text-[27px] text-white'>
            <i className='fa-brands fa-square-facebook me-4'></i>
            <i className='fa-brands fa-twitter me-4'></i>
            <i className='fa-brands fa-instagram'></i>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer