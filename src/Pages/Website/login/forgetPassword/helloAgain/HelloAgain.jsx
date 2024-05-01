import React from 'react';
import './HelloAgain.scss';
import BackButton from '../../../../../Components/backButton/BackButton';
import TextGradient from '../../../../../Components/textGradient/TextGradient';
import InputComp from '../../../../../Components/input/InputComp';
import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';
export default function HelloAgain() {
    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="box sm:w-8/12 md:w-7/12 mx-auto mt-5">
                <BackButton />
                <div className="title my-10">
                    <h2 className='text-center'><TextGradient size='26px' weight='900' text='Hello again Hamza!' /></h2>
                    <p className='text-sm text-center text-[#777775] mb-10'>Reset password.</p>
                </div>
                <div className="add-email text-center w-2/5 mx-auto mt-20">
                    <InputComp type="password" name="password" id="password" className='w-full text-sm outline-none px-4 py-3 my-4 mx-auto bg-white' placeholder='Password' />
                    <InputComp type="password" name="passwordConfirmation" id="passwordConfirmation" className='w-full text-sm outline-none px-4 py-3 my-4 mx-auto bg-white' placeholder='Password Confirmation' />
                    <Link to={'/'} className={'btn-gradient block w-full mt-16'} ><span className='text-lg font-extrabold primaryfont block'>Reset Password</span></Link>

                </div>
            </motion.div>
        </>
    )
}
