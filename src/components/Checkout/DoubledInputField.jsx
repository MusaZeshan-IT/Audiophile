import React from 'react';
import InputBox from './InputBox';
import CheckBox from './Checkbox';

function DoubledInputField({ isDoubledColumn = false, onChange1, onChange2, fieldName1, fieldName2, fieldPlaceholder1, fieldPlaceholder2, fieldType1, fieldType2, selectedOption, handleRadioClick }) {
    return (
        <>
            {isDoubledColumn ? (
                <div className="w-full flex flex-col justify-between">
                    <CheckBox
                        onClick={handleRadioClick}
                        selectedOption={selectedOption === "checkbox1"}
                        idName="checkbox1"
                        fieldName={fieldName1}
                        fieldPlaceholder={fieldPlaceholder1}
                    />
                    <CheckBox
                        onClick={handleRadioClick}
                        selectedOption={selectedOption === "checkbox2"}
                        idName="checkbox2"
                        fieldName={fieldName2}
                        fieldPlaceholder={fieldPlaceholder2}
                    />
                </div>
            ) : (
                <div className="w-full flex sm-custom:flex-row flex-col justify-between mt-[18px]">
                    <InputBox isDoubled={true} fieldType={fieldType1} fieldName={fieldName1} fieldPlaceholder={fieldPlaceholder1} />
                    <div className='md:mt-0 mt-4'></div>
                    <InputBox isDoubled={true} fieldType={fieldType2} fieldName={fieldName2} fieldPlaceholder={fieldPlaceholder2} />
                </div>
            )}
        </>
    );
}

export default DoubledInputField;