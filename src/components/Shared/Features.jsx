import React from 'react'

function Features({ featurePara1, featurePara2, includedItems }) {
    return (
        <div className="flex lg:flex-row flex-col xl-custom:gap-x-28 xl:gap-x-24 lg-custom:gap-x-20 lg:gap-x-16 gap-y-10 2xl:px-[135px] xl-custom:px-[130px] xl:px-32 lg-custom:px-12 lg:px-7 px-5">
            <div className='lg:w-[68%]'>
                <h2 className='text-3xl tracking-[2px] font-semibold'>FEATURES</h2>
                <p className='mt-7 w-11/12 text-[rgb(150,147,147)] leading-6 text-[15.5px] tracking-[0.2px]'>{featurePara1}</p>
                <p className='mt-6 w-11/12 text-[rgb(150,147,147)] leading-6 text-[15.5px] tracking-[0.2px]'>{featurePara2}</p>
            </div>
            <div className='lg:w-[32%] w-full flex flex-col lg:mt-0 mt-12'>
                <div className='lg:block flex md-custom:gap-x-48 md:gap-x-44 sm-custom:gap-x-36 xs-custom:gap-x-28 xs:gap-x-16'>
                    <h2 className='text-3xl tracking-[2px] font-black'>IN THE BOX</h2>
                    <div className='lg:mt-6 mt-0'>
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
    )
}

export default Features