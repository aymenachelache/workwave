import React from 'react';
import './PaymentMethods.scss';
// import logo from '../../../assets/Logo.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import BackButton from '../../../../../Components/backButton/BackButton';
import InputComp from '../../../../../Components/input/InputComp';
import TextGradient from '../../../../../Components/textGradient/TextGradient';
import Paypal from "../../../../../assets/register/work/ad106dd22c630dce31615bda072a06e5.png"
import CreditCard from "../../../../../assets/register/work/d970228833cfc5b2dc1b646841618435.png"
export default function PaymentMethods() {
    return (
        <>
            <div className="create-account-work w-full relative w-full left-0">
                <div className="contain mx-auto text-center">
                    <TextGradient size='25px' weight='800' text='Create an account' />
                    <div className="flex gap-4 w-full payment">
                        <div id='paypal' className="flex-1 border-2 border-gray-200 rounded-xl p-10 w-1/2">
                            <div id="logo" className=''>
                                <img src={Paypal} alt="" srcset="" className='filter grayscale opacity-70' />
                            </div>
                        </div>
                        <div id='paypal' className="flex-1 border-2 border-gray-200 rounded-xl px-2 w-1/2">
                            <div id="" className='flex'>
                                <img src={CreditCard} alt="" srcset="" className='opacity-55 w-9' />
                                <h1 className='text-gray-500 font-bold text-base'>Credit Card</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
