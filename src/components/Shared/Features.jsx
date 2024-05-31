import React from 'react'

function Features({ featurePara1, featurePara2, includedItems }) {
    return (
        <div className='w-full flex justify-center'>
            <div className="w-5/6 flex">
                <div className='w-3/5'>
                    <h2 className='text-3xl tracking-[2px] font-semibold'>FEATURES</h2>
                    <p className='mt-7 text-[rgb(150,147,147)] leading-6 text-[15.5px] tracking-[0.2px]'>{featurePara1}</p>
                    <p className='mt-6 text-[rgb(150,147,147)] leading-6 text-[15.5px] tracking-[0.2px]'>{featurePara2}</p>
                </div>
                <div className='w-2/5 flex flex-col items-center'>
                    <div>
                        <h2 className='text-3xl tracking-[2px] font-black'>IN THE BOX</h2>
                        <div className='mt-6'>
                            {includedItems.map((item, index) => (
                                <div className='mb-[8px]'>
                                    <span className='font-semibold text-[#d87d4a]'>{item.quantity}</span>
                                    <span className='font-semibold me-[14px] text-sm text-[#d87d4a]'>x </span>
                                    <span className='text-[rgb(141,138,138)]'>{item.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features