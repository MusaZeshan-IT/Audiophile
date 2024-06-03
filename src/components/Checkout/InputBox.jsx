import React, { useRef } from 'react'

function InputBox({ isDoubled = false, fieldName, fieldPlaceholder, fieldWidth = 48.8 }) {
    const inputRef = useRef(null)
    const handleClick = (e) => {
        e.preventDefault();
        if (inputRef.current) {
            inputRef.current.style.borderColor = "#d87d4a"
        }
    }

    return (
        <>
            {isDoubled ? (
                <div style={{ width: `${fieldWidth}% ` }}>
                    <h4 className='font-semibold text-[12.5px]'>{fieldName}</h4>
                    <input required={true} ref={inputRef} onClick={handleClick} id='inputBox' className='w-full border border-[#d0d5dd] h-12 rounded-lg mt-2 px-5 font-bold text-sm tracking-wide' type="text" placeholder={fieldPlaceholder} />
                </div>
            ) : (
                <div className='mt-[18px]' style={{ width: `${fieldWidth}% ` }}>
                    <h4 className='font-semibold text-[12.5px]'>{fieldName}</h4>
                    <input required={true} ref={inputRef} onClick={handleClick} id='inputBox' className='w-full border border-[#d0d5dd] h-12 rounded-lg mt-2 px-5 font-bold text-sm tracking-wide' type="text" placeholder={fieldPlaceholder} />
                </div>
            )}
        </>
    )
}

export default InputBox