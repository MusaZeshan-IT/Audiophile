import React from 'react'

function Modal({ handleCloseModal, showModal }) {
    if (showModal === false) {
        return null;
    }
    else {
        return (
            <div className='fixed overflow-hidden inset-0 bg-black bg-opacity-[0.4] flex justify-end items-start'>
                <div className='me-48 overflow-hidden mt-32 bg-white min-h-48 w-96 rounded-md'>
                    <div className='w-full flex justify-end'>
                        <button onClick={() => handleCloseModal()} role='button' type='button'>
                            <i className='fa-solid fa-xmark text-[20px] me-2 mt-2 text-gray-500'></i>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Modal