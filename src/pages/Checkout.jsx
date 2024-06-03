import React, { useState } from 'react';
import BackButton from '../components/Shared/BackButton';
import DoubledInputField from '../components/Checkout/DoubledInputField';
import InputBox from '../components/Checkout/InputBox';
import CashOnDeliveryImg from '../assets/cash-on-delivery.svg';

function Checkout() {
    const [selectedOption, setSelectedOption] = useState(null);

    function handleRadioClick(id) {
        setSelectedOption(id);
    }

    return (
        <div className='w-full bg-[rgb(241,241,241)] pt-20 pb-14'>
            <BackButton marginValueTop="0" />
            <div className='w-full flex justify-center'>
                <div className='w-5/6 flex justify-between'>
                    <div className='bg-white w-[63%] rounded-md p-11'>
                        <h1 className='font-black tracking-[1.5px] text-3xl'>CHECKOUT</h1>
                        <form action="">
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
                                        <DoubledInputField
                                            isDoubledColumn={true}
                                            fieldName1="e-Money"
                                            fieldName2="Cash on Delivery"
                                            selectedOption={selectedOption}
                                            handleRadioClick={handleRadioClick}
                                        />
                                    </div>
                                </div>
                                {selectedOption === "checkbox1" && (
                                    <DoubledInputField
                                        fieldName1="e-Money Number"
                                        fieldPlaceholder1="238521993"
                                        fieldName2="e-Money PIN"
                                        fieldPlaceholder2="6891"
                                    />
                                )}
                                {selectedOption === "checkbox2" && (
                                    <div className='mt-10 flex justify-between items-center'>
                                        <div className='w-[7.8%]'>
                                            <img className='w-full' src={CashOnDeliveryImg} alt="" />
                                        </div>
                                        <p className='w-[86%] tracking-[0.1px] text-gray-400 leading-[26px] text-[15.5px]'>The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be delayed.</p>
                                    </div>
                                )}
                            </div>
                        </form>
                    </div>
                    <div className='bg-white w-[34%] rounded-md'>
                        <h2>SUMMARY</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Checkout;