import React, { useContext, useRef, useState } from 'react';
import BackButton from '../components/Shared/BackButton';
import DoubledInputField from '../components/Checkout/DoubledInputField';
import InputBox from '../components/Checkout/InputBox';
import CashOnDeliveryImg from '../assets/cash-on-delivery.svg';
import { CartContext } from '../context/CartContext';
import ProductList from '../helpers/ProductList';
import CTAButton from '../components/Shared/CTAButton';
import SuccessModal from '../components/Checkout/SuccessModal';

function Checkout() {
    const [showModal, setShowModal] = useState(false);
    const handleShowModal = () => {
        if (formRef.current.reportValidity()) {
            setShowModal(true);
        }
    }
    const handleCloseModal = () => setShowModal(false);

    const { cartItems, totalItemsInCart } = useContext(CartContext);
    const [selectedOption, setSelectedOption] = useState('checkbox1');
    const formRef = useRef(null)

    const productAddedToCartList = ProductList.filter((product) => cartItems[product.id] > 0);

    function handlePrice(product) {
        return product.price > 999 ? product.price.toLocaleString() : product.price;
    }

    function handleTotalAmount() {
        let totalAmount = 0;
        for (const productIndex in productAddedToCartList) {
            const product = productAddedToCartList[productIndex];
            const actualPrice = product.price * cartItems[product.id];
            totalAmount += actualPrice;
        }
        return totalAmount;
    }

    function handleGrandTotal() {
        const grandTotal = Number(handleTotalAmount()) + Number(handleVAT()) + 50;
        return grandTotal;
    }

    function handleVAT() {
        const vat = Number(handleTotalAmount()) * 0.20;
        const vatRounded = Math.round(vat);
        return vatRounded;
    }

    function handleRadioClick(id) {
        setSelectedOption(id);
    }

    function handleValue(fn) {
        const valueWithCommas = fn() > 999 ? fn().toLocaleString() : fn()
        return valueWithCommas;
    }

    return (
        <div>
            <SuccessModal showModal={showModal} handleCloseModal={handleCloseModal} grandTotal={handleGrandTotal} handleValue={handleValue} />
            <div className='w-full bg-[rgb(241,241,241)] pt-20 pb-14 2xl:px-[135px] xl-custom:px-[130px] xl:px-32 lg-custom:px-12 lg:px-7 px-5'>
                <BackButton marginValueTop="0" width={100} display='inline-block' />
                <div className='w-full flex justify-center'>
                    <div className='w-full flex lg:flex-row flex-col justify-between'>
                        {/* Checkout */}
                        <div className='bg-white lg:w-[64.5%] w-full rounded-lg lg:p-11 md:p-8 p-6'>
                            <h1 className='font-black tracking-[1.5px] text-3xl'>CHECKOUT</h1>
                            <form ref={formRef} action="" method='post' autoComplete='on'>
                                {/* Billing Details Section */}
                                <div>
                                    <h3 className='text-[13.5px] text-[#d87d4a] font-bold tracking-[1.2px] mt-10 mb-6'>BILLING DETAILS</h3>
                                    <DoubledInputField marginTop="10" fieldName1="Name" fieldPlaceholder1="Alexei Ward" fieldType2="email" fieldName2="Email Address" fieldPlaceholder2="alexei@mail.com" />
                                    <div>
                                        <InputBox fieldName="Phone Number" fieldType='tel' fieldPlaceholder="+1 202-555-0136" />
                                    </div>
                                </div>
                                {/* Shipping Info Section */}
                                <div>
                                    <h3 className='text-[13.5px] text-[#d87d4a] font-bold tracking-[1.2px] mt-10 mb-6'>SHIPPING INFO</h3>
                                    <InputBox marginTop="10" fieldName="Your Address" fieldPlaceholder="1137 Williams Avenue" />
                                    <DoubledInputField fieldName1="ZIP Code" fieldPlaceholder1="10001" fieldName2="City" fieldPlaceholder2="New York" />
                                    <div>
                                        <InputBox fieldName="Country" fieldPlaceholder="United States" />
                                    </div>
                                </div>
                                {/* Payment Details Section */}
                                <div>
                                    <h3 className='text-[13.5px] text-[#d87d4a] font-bold tracking-[1.2px] mt-10 mb-6'>PAYMENT DETAILS</h3>
                                    <div className='flex sm-custom:flex-row flex-col'>
                                        <div className='sm-custom:w-6/12 w-full'>
                                            <h4 className='font-semibold text-[12.5px]'>Payment Method</h4>
                                        </div>
                                        <div className='sm-custom:w-6/12 w-full'>
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
                                        <div className='mt-12 flex xs-custom:flex-row flex-col xs-custom:justify-between items-center'>
                                            <div className='md:w-[6%] sm-custom:w-[7%] xs-custom:w-[10%] w-[20%]'>
                                                <img className='w-full' src={CashOnDeliveryImg} alt="" />
                                            </div>
                                            <p className='xs-custom:w-[86%] xs-custom:mt-0 mt-5 w-full tracking-[0.1px] text-gray-400 leading-[26px] text-[15.5px]'>The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be delayed.</p>
                                        </div>
                                    )}
                                </div>
                            </form>
                        </div>
                        {/* Summary */}
                        <div className='bg-white lg:w-[32.5%] w-full lg:mt-0 mt-10 h-fit rounded-lg lg:p-9 md:p-7 p-5'>
                            <h2 className='font-black tracking-[1.2px] text-xl mb-7'>SUMMARY</h2>
                            {productAddedToCartList.map((product) => (
                                <div key={product.id} className='flex mb-6 justify-between items-center mt-5'>
                                    <div className='flex w-[80%]'>
                                        <img className='h-16 w-16 rounded-lg' src={product.image} alt={product.name} />
                                        <div className='flex flex-col ml-4 justify-center ms-[18px]'>
                                            <p className='text-[rgb(0,0,0)] font-black tracking-[0.5px] text-[15.3px]'>{product.shortName}</p>
                                            <p className='mt-1 text-[rgb(141,141,141)] font-bold tracking-widest text-[13px]'>
                                                <span className='me-[1.6px]'>$</span>
                                                {handlePrice(product)}
                                            </p>
                                        </div>
                                    </div>
                                    <div className='w-[20%] h-8 flex justify-end'>
                                        <span className='font-semibold text-gray-500 text-[16.6px]'>
                                            <span className='text-sm me-[0.6px]'>x</span>
                                            {cartItems[product.id]}
                                        </span>
                                    </div>
                                </div>
                            ))}
                            {totalItemsInCart < 1 && (
                                <p className='text-center text-gray-500 text-[15.2px] font-semibold tracking-wider'>No items in cart</p>
                            )}
                            <div className='w-full flex justify-between mt-8'>
                                <span className='text-gray-500 text-[16px]'>TOTAL</span>
                                <span className='text-[rgb(27,27,27)] text-[17.5px] font-black tracking-[0.7px]'>
                                    <span className='me-[3px]'>$</span>
                                    {handleValue(handleTotalAmount)}
                                </span>
                            </div>
                            <div className='w-full flex justify-between mt-2'>
                                <span className='text-gray-500 text-[16px]'>SHIPPING</span>
                                <span className='text-[rgb(27,27,27)] text-[17.5px] font-black tracking-[0.7px]'>
                                    <span className='me-[3px]'>$</span>
                                    50
                                </span>
                            </div>
                            <div className='w-full flex justify-between mt-2'>
                                <span className='text-gray-500 text-[16px]'>VAT (INCLUDED)</span>
                                <span className='text-[rgb(27,27,27)] text-[17.5px] font-black tracking-[0.7px]'>
                                    <span className='me-[3px]'>$</span>
                                    {handleValue(handleVAT)}
                                </span>
                            </div>
                            <div className='w-full flex justify-between mt-6 mb-8'>
                                <span className='text-gray-500 text-[16px]'>GRAND TOTAL</span>
                                <span className='text-[#d87d4a] text-[17.5px] font-black tracking-[0.7px]'>
                                    <span className='me-[3px]'>$</span>
                                    {handleValue(handleGrandTotal)}
                                </span>
                            </div>
                            {totalItemsInCart > 1 ? (
                                <CTAButton formRef={formRef} buttonType='submit' functionName={handleShowModal} name="CONTINUE & PAY" />
                            ) : (
                                <CTAButton isDisabled={true} formRef={formRef} buttonType='submit' functionName={handleShowModal} name="CONTINUE & PAY" />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Checkout;