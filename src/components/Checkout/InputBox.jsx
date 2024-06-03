import React, { useRef, useState } from 'react'

function InputBox({ isDoubled = false, fieldName, fieldPlaceholder, fieldWidth = 48.8 }) {
    const inputRef = useRef(null)
    const [inputValue, setInputValue] = useState('')
    const [hasError, setHasError] = useState(false)
    const handleClick = (e) => {
        e.preventDefault();
        if (inputRef.current) {
            inputRef.current.style.borderColor = "#d87d4a"
        }
    }

    const handleBlur = () => {
        // This is used to check if the input field is empty or not
        setHasError(inputValue.trim() === '')
    }

    if (hasError === false) {
        if (inputRef.current) {
            inputRef.current.style.borderColor = "#d0d5dd"
        }
    } else {
        if (inputRef.current) {
            inputRef.current.style.borderColor = "#d87d4a"
        }
    }

    return (
        <>
            {isDoubled ? (
                <div style={{ width: `${fieldWidth}% ` }}>
                    <div className='flex justify-between'>
                        <h4 className='font-semibold text-[12.5px]'>{fieldName}</h4>
                        {hasError && <p className='text-[#d87d4a] text-[12px] mt-1'>Field cannot be empty</p>}
                    </div>
                    <input onChange={(e) => setInputValue(e.target.value)} onBlur={handleBlur} value={inputValue} required={true} ref={inputRef} onClick={handleClick} className='w-full border border-[#d0d5dd] h-12 rounded-lg mt-2 px-5 font-bold text-sm tracking-wider' type="text" placeholder={fieldPlaceholder} />
                </div>
            ) : (
                <div className='mt-[18px]' style={{ width: `${fieldWidth}% ` }}>
                    <div className='flex justify-between'>
                        <h4 className='font-semibold text-[12.5px]'>{fieldName}</h4>
                        {hasError && <p className='text-[#d87d4a] text-[12px] mt-1'>Field cannot be empty</p>}
                    </div>
                    <input onChange={(e) => setInputValue(e.target.value)} onBlur={handleBlur} value={inputValue} required={true} ref={inputRef} onClick={handleClick} className='w-full border border-[#d0d5dd] h-12 rounded-lg mt-2 px-5 font-bold text-sm tracking-wider' type="text" placeholder={fieldPlaceholder} />
                </div>
            )}
        </>
    )
}

export default InputBox