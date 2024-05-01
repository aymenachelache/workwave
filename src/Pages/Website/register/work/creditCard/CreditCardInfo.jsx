import React from 'react';
import './CreditCardInfo.scss';
// import logo from '../../../assets/Logo.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import BackButton from '../../../../../Components/backButton/BackButton';
import InputComp from '../../../../../Components/input/InputComp';
import TextGradient from '../../../../../Components/textGradient/TextGradient';
import ButtonGradient from '../../../../../Components/buttonGradient/ButtonGradient';
import {motion} from 'framer-motion';

export default function CreditCardInfo() {
    return (
        <>
            <motion.div 
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 1}}
            className="create-account-work w-full relative">
                <div className="contain w-2/4 mx-auto text-center">
                    <TextGradient size='25px' weight='800' text='Create an account' />
                    <p className='text-sm text-[#777775] mb-10'>Credit card informations.</p>
                    <form action="">
                        <InputComp type="text" name="holderName" id="holderName" className='w-full text-sm outline-none px-4 py-3 my-4 mx-auto' placeholder='Card Holder Name' />
                        <InputComp type="number" name="cardNumber" id="cardNumber" className='w-full text-sm outline-none px-4 py-3 my-4 mx-auto' placeholder='Card Number' />
                        <div className='flex gap-2'>
                        <InputComp type="date" name="date" id="date" className='w-2/4 text-sm outline-none px-4 py-3 my-2' placeholder='Expiary Date' />
                        <InputComp type="text" name="cvc" id="cvc" className='w-2/4 text-sm outline-none px-4 py-3 my-2' placeholder='CVV/CVC' />
                        </div>
                        <Link to={'welcome'} className={'btn-gradient block w-full mt-5'} ><span className='text-lg font-extrabold primaryfont block'>Continue</span></Link>
                    </form>
                </div>
            </motion.div >
        </>
    )
}
