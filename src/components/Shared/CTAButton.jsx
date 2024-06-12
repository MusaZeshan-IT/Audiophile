import React from 'react';
import { Link } from 'react-router-dom';

function CTAButton({ name, formRef, pathname, isDisabled = false, functionName, buttonType }) {
    const defaultBtnClasses = 'cursor-pointer w-full font-semibold bg-[#d87d4a] hover:bg-[rgb(251,175,130)] tracking-[2px] text-white text-[12px] py-[13.5px]';
    const defaultDisabledBtnClasses = 'cursor-not-allowed w-full font-semibold tracking-[2px] bg-[rgb(239,203,183)] text-white text-[12px] py-[13.5px]';

    const handleClick = (e) => {
        e.preventDefault();
        if (formRef.current) {
            formRef.current.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
            formRef.current.reset();
        }
        functionName();
    };

    return (
        <>
            {buttonType !== undefined ? (
                <>
                    {isDisabled ? (
                        <button className={`${defaultDisabledBtnClasses}`} disabled={isDisabled} type={buttonType} onClick={handleClick} style={{ transition: 'all 0.4s ease' }}>{name}</button>
                    ) : (
                        <button type={buttonType} onClick={handleClick} style={{ transition: 'all 0.4s ease' }} className={defaultBtnClasses}>{name}</button>
                    )}
                </>
            ) : (
                <Link to={pathname}>
                    <button type={buttonType} onClick={functionName} style={{ transition: 'all 0.4s ease' }} className={defaultBtnClasses}>{name}</button>
                </Link>
            )}
        </>
    );
}

export default CTAButton;