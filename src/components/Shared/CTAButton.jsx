import React from 'react';
import { Link } from 'react-router-dom';

function CTAButton({ name, formRef, pathname, functionName, buttonType }) {
    const defaultBtnClasses = 'cursor-pointer w-full font-semibold bg-[#d87d4a] hover:bg-[rgb(251,175,130)] tracking-[2px] text-white text-[12px] py-[13.5px]';

    const handleClick = (e) => {
        e.preventDefault();
        if (formRef.current) {
            formRef.current.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
            formRef.current.reset();
        }
        console.log('Form submitted'); // This should log when the button is clicked
        functionName();
    };

    return (
        <>
            {buttonType !== undefined ? (
                <button type={buttonType} onClick={handleClick} style={{ transition: 'all 0.4s ease' }} className={defaultBtnClasses}>{name}</button>
            ) : (
                <Link to={pathname}>
                    <button type={buttonType} onClick={functionName} style={{ transition: 'all 0.4s ease' }} className={defaultBtnClasses}>{name}</button>
                </Link>
            )}
        </>
    );
}

export default CTAButton;