// CheckBox.js
import React from 'react';

function CheckBox({ selectedOption, fieldName, fieldPlaceholder, idName, onClick }) {
    const handleInputClick = () => {
        onClick(idName);
    };

    return (
        <div>
            <label htmlFor={idName}>
                <div
                    onClick={handleInputClick}
                    className={`cursor-pointer flex items-center w-full border h-12 rounded-lg mt-2 px-5 font-bold text-sm tracking-wide ${selectedOption ? 'border-[#d87d4a]' : 'border-[#d0d5dd]'}`}
                    type="text"
                    placeholder={fieldPlaceholder}
                >
                    <div className='me-4 h-5 w-5 rounded-[50%] border border-[#ddd] outline-none transition-all duration-300 flex justify-center items-center'>
                        <input
                            className={`h-[10px] w-[10px] rounded-[50%] appearance-none checked:bg-[#d87d4a]`}
                            id={idName}
                            value={fieldName}
                            type="radio"
                            name="paymentMethod"
                            checked={selectedOption}
                            readOnly
                        />
                    </div>
                    <span>{fieldName}</span>
                </div>
            </label>
        </div>
    );
}

export default CheckBox;