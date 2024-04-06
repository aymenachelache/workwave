import React, { useEffect, useRef } from 'react';
import './PaymentMethods.scss';
// import logo from '../../../assets/Logo.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import BackButton from '../../../../../Components/backButton/BackButton';
import InputComp from '../../../../../Components/input/InputComp';
import TextGradient from '../../../../../Components/textGradient/TextGradient';
import Button from "../../../../../Components/Button/Button";
import { greyColor } from '../../../../../Components/Variables/VariablesColors';
import {motion} from 'framer-motion';

export default function PaymentMethods() {
    function changeImageHover(elem) {
        elem.childNodes[0].src = elem.childNodes[0].src.replace('.png', 'Hover.png');
    }
    function changeImage(elem) {
        elem.childNodes[0].src = elem.childNodes[0].src.replace('Hover.png', '.png');
    }
    return (
        <>
            <motion.div 
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 1}}
            className="create-account-work w-full relative">
                <div className="contain payment-methode w-3/4 mx-auto text-center">
                    <TextGradient size='25px' weight='800' text='Create an account' />
                    <p className='text-sm text-[#777775] mb-10'>Payment methods.</p>
                    <div className="contain flex justify-between gap-5 mb-5">
                        <div className="methode paypal global-radius my-border cursor-pointer flex items-center justify-between">
                            <Link onMouseEnter={(e) => changeImageHover(e.target)}  onMouseLeave={(e) => changeImage(e.target)} to='/'><img src={require('../../../../../assets/register/PayPal-Logo.png')} style={{width: '300px'}} alt="" /></Link>
                        </div>
                        <div className="methode credit-card global-radius my-border cursor-pointer flex items-center justify-between">
                            <Link onMouseEnter={(e) => changeImageHover(e.target)}  onMouseLeave={(e) => changeImage(e.target)}  to='creditcardinformation'><img src={require('../../../../../assets/register/CreditCard-Logo.png')} style={{width: '300px'}} alt="" /></Link>
                        </div>
                    </div>
                    <div className='text-right'>
                    <Button link='creditcardinformation/welcome' text='Skip for now' color={greyColor} classes='font-extrabold text-xs tracking-wider' object={<FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: '5px'}} />} clicked />
                    </div>
                </div>
            </motion.div >
        </>
    )
}
