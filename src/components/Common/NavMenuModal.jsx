// /components/Cart/Modal.js
import React, { useEffect } from 'react';
import Headphones from '../../assets/category-headphones.png'
import Earphones from '../../assets/category-earphones.png'
import Speakers from '../../assets/category-speakers.png'
import NavListItem from '../Shared/NavListItem';

function NavMenuModal({ showMenu, handleCloseMenu }) {
    useEffect(() => {
        if (showMenu) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [showMenu]);

    if (!showMenu) {
        return null;
    }
    return (
        <div className='z-30 lg:hidden block fixed inset-0 mt-[88px] bg-black bg-opacity-[0.9] h-full w-full'>
            <div className='flex xs-custom:flex-row flex-col xs-custom:justify-center items-center bg-white overflow-hidden max-h-[80vh] w-full rounded-b-[10px] p-4'>
                <div className='flex xs-custom:flex-row flex-col md-custom:gap-x-9 md:gap-x-6 xs-custom:gap-x-4 gap-y-24 justify-between items-center overflow-auto w-full pt-[80px] pb-5 sm:px-4 px-2'>
                    <NavListItem isNavMenu={true} handleCloseMenu={handleCloseMenu} name="HEADPHONES" image={Headphones} path="/headphones" />
                    <NavListItem isNavMenu={true} handleCloseMenu={handleCloseMenu} name="SPEAKERS" image={Speakers} path="/speakers" />
                    <NavListItem isNavMenu={true} handleCloseMenu={handleCloseMenu} name="EARPHONES" image={Earphones} path="/earphones" />
                </div>
            </div>
        </div>
    );
}

export default NavMenuModal;
