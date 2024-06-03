import React from 'react'
import BackButton from '../components/Shared/BackButton'
import DoubledInputField from '../components/Checkout/DoubledInputField'
import InputBox from '../components/Checkout/InputBox'

function Checkout() {
    return (
        <div className='w-full bg-[rgb(241,241,241)] pt-20 pb-14'>
            <BackButton marginValueTop="0" />
            <div className='w-full flex justify-center'>
                <div className='w-5/6 flex justify-between'>
                    <div className='bg-white w-[63%] rounded-md p-11'>
                        <h1 className='font-black tracking-[1px] text-3xl'>CHECKOUT</h1>
                        {/* Billing Details Section */}
                        <div>
                            <h3 className='text-[13.5px] text-[#d87d4a] font-bold tracking-[1.2px] mt-10 mb-6'>BILLING DETAILS</h3>
                            <DoubledInputField marginTop="10" fieldName1="Name" fieldPlaceholder1="Alexei Ward" fieldName2="Email Address" fieldPlaceholder2="alexei@mail.com" />
                            <div>
                                <InputBox fieldName="Phone Number" fieldPlaceholder="+1 202-555-0136" />
                            </div>
                        </div>
                        {/* Shipping Info Section */}
                        <div>
                            <h3 className='text-[13.5px] text-[#d87d4a] font-bold tracking-[1.2px] mt-10 mb-6'>SHIPPING INFO</h3>
                            <InputBox marginTop="10" fieldWidth="100" fieldName="Your Address" fieldPlaceholder="1137 Williams Avenue" />
                            <DoubledInputField fieldName1="ZIP Code" fieldPlaceholder1="10001" fieldName2="City" fieldPlaceholder2="New York" />
                            <div>
                                <InputBox fieldName="Country" fieldPlaceholder="United States" />
                            </div>
                        </div>
                        {/* Payment Details Section */}
                        <div>
                            <h3 className='text-[13.5px] text-[#d87d4a] font-bold tracking-[1.2px] mt-10 mb-6'>PAYMENT DETAILS</h3>
                            <div className='flex'>
                                <div className='w-6/12'>
                                    <h4 className='font-semibold text-[12.5px]'>Payment Method</h4>
                                </div>
                                <div className='w-6/12'>
                                    <DoubledInputField isDoubledColumn={true} fieldPlaceholder1=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='bg-white w-[34%] rounded-md'>
                        <h2>SUMMARY</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout