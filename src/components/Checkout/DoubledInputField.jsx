import React, { useState } from 'react'
import InputBox from './InputBox'
import CheckBox from './Checkbox'

function DoubledInputField({ isDoubledColumn = false, fieldName1, fieldName2, fieldPlaceholder1, fieldPlaceholder2 }) {
    const [selectedOption, setSelectedOption] = useState(null);
    function handleRadioClick(id) {
        setSelectedOption(id);
    }

    return (
        <>
            {isDoubledColumn ? (
                <div className="w-full flex flex-col justify-between" >
                    <CheckBox onClick={handleRadioClick} selectedOption={selectedOption === "checkbox1"} idName="checkbox1" fieldWidth="100" fieldName={fieldName1} fieldPlaceholder={fieldPlaceholder1} />
                    <CheckBox onClick={handleRadioClick} selectedOption={selectedOption === "checkbox2"} idName="checkbox2" fieldWidth="100" fieldName={fieldName2} fieldPlaceholder={fieldPlaceholder2} />
                </div>
            ) : (
                <div className="w-full flex justify-between mt-[18px]">
                    <InputBox isDoubled={true} fieldName={fieldName1} fieldPlaceholder={fieldPlaceholder1} />
                    <InputBox isDoubled={true} fieldName={fieldName2} fieldPlaceholder={fieldPlaceholder2} />
                </div>
            )
            }
        </>
    )
}

export default DoubledInputField