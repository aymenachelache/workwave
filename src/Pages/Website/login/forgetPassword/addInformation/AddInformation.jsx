import React from 'react';
import './AddInformation.scss';
import BackButton from '../../../../../Components/backButton/BackButton';
import TextGradient from '../../../../../Components/textGradient/TextGradient';
import InputComp from '../../../../../Components/input/InputComp';
import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';


export default function AddInformation() {
    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="box sm:w-8/12 md:w-7/12 mx-auto mt-5">
                <BackButton />
                <div className="title my-10">
                    <h2 className='text-center'><TextGradient size='26px' weight='900' text='Forgot password?' /></h2>
                    <p className='text-sm text-center text-[#777775] mb-10'>Recover your account.</p>
                </div>
                <div className="add-email text-center w-2/5 mx-auto mt-20">
                    <p className='text-sm'>Enter your email that you used to log in with.</p>
                    <InputComp type="email" name="email" id="email" className='w-full text-sm outline-none px-4 py-3 my-4 mx-auto bg-white' placeholder='Email' />
                    <Link to={'verificationcode'} className={'btn-gradient block w-full mt-16'} ><span className='text-lg font-extrabold primaryfont block'>Continue</span></Link>

                </div>
            </motion.div>
        </>
    )
}
