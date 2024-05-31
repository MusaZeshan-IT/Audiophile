import React from 'react'
import Logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='w-full h-[350px] bg-[rgb(25,25,25)] relative px-[120px]'>
      <div className='content-empty::before block absolute h-1 w-[102px] bg-[rgb(216,125,74)]'></div>
      <div className='flex pt-[75px]'>
        <div className='flex flex-col w-7/12'>
          <div className='h-6 mb-[42px]'>
            <img src={Logo} alt="Audiophile Logo" />
          </div>
          <div className='mb-[50px]'>
            <p className='text-[rgb(156,156,156)] tracking-[0.001em] font-medium leading-6 text-[15.5px]'>
              Audiophile is an all in one stop to fulfill your audio needs. We're a small team
              <br />
              of music lovers and sound specialists who are devoted to helping you get the
              <br />
              most out of personal audio. Come and visit our demo facility - we’re open 7
              <br />
              days a week.
            </p>
          </div>
          <p className='text-[rgb(156,156,156)] text-[14.5px]'> Copyright &copy; 2021. All Rights Reserved.</p>
        </div>
        <div className='flex flex-col w-5/12 ps-8'>
          <div className='flex justify-between text-white font-semibold tracking-[2.5px] text-[12.5px]'>
            <Link to='/'>HOME</Link>
            <Link to='/headphones'>HEADPHONES</Link>
            <Link to='/speakers'>SPEAKERS</Link>
            <Link to='/earphones'>EARPHONES</Link>
          </div>
          <div className='flex justify-end mt-32 text-[27px] text-white'>
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