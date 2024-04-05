import React from 'react';
import './PhoneAndPassword.scss';
// import logo from '../../../assets/Logo.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import BackButton from '../../../../../Components/backButton/BackButton';
import InputComp from '../../../../../Components/input/InputComp';
import TextGradient from '../../../../../Components/textGradient/TextGradient';
import {motion} from 'framer-motion';

export default function PhoneAndPassword() {
    return (
        <>
            <motion.div 
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 1}}
            className="create-account-work w-full relative">
                <div className="contain w-2/4 mx-auto text-center">
                    <TextGradient size='25px' weight='800' text='Create an account' />
                    <p className='text-sm text-[#777775] mb-10'>Your personal informations.</p>
                    <form action="">
                        <div className="flex gap-2">
                        <InputComp value='+213' type="text" name="firstName" id="firstName" className='w-1/4 text-sm outline-none px-4 py-3 my-2' />
                        <InputComp type="number" name="phone" id="phone" className='w-3/4 text-sm outline-none px-4 py-3 my-2' placeholder='Phone Number' />
                        </div>
                        <InputComp type="password" name="password" id="password" className='w-full text-sm outline-none px-4 py-3 my-4 mx-auto' placeholder='Password' />
                        <InputComp type="password" name="ConfirmPassword" id="ConfirmPassword" className='w-full text-sm outline-none px-4 py-3 my-4 mx-auto' placeholder='Confirm Password' />
                        <Link to={'paymentmethods'} className={'btn-gradient block w-full'} ><span className='text-lg font-extrabold primaryfont block'>Continue</span></Link>
                    </form>
                </div>
            </motion.div >
        </>
    )
}
