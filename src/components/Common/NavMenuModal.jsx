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
            <div className='flex justify-center items-center overflow-auto bg-white h-72 w-full rounded-b-[10px] p-4 pointer-events-auto'>
                <div className='h-full flex justify-between items-center w-full pt-[85px]'>
                    <NavListItem isNavMenu={true} handleCloseMenu={handleCloseMenu} name="HEADPHONES" image={Headphones} path="/headphones" />
                    <NavListItem isNavMenu={true} handleCloseMenu={handleCloseMenu} name="SPEAKERS" image={Speakers} path="/speakers" />
                    <NavListItem isNavMenu={true} handleCloseMenu={handleCloseMenu} name="EARPHONES" image={Earphones} path="/earphones" />
                </div>
            </div>
        </div>
    );
}

export default NavMenuModal;
