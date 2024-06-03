import React from 'react'
import InputBox from './InputBox'
import CheckBox from './Checkbox'

function DoubledInputField({ isDoubledColumn = false, fieldName1, fieldName2, fieldPlaceholder1, fieldPlaceholder2 }) {
    return (
        <>
            {isDoubledColumn ? (
                <div className="w-full flex flex-col justify-between" >
                    <CheckBox fieldWidth="100" isDoubled={true} fieldName={fieldName1} fieldPlaceholder={fieldPlaceholder1} />
                    {/* <CheckBox fieldWidth="100" isDoubled={true} fieldName={fieldName2} fieldPlaceholder={fieldPlaceholder2} /> */}
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