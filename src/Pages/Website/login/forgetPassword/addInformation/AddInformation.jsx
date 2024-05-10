import React, { useState } from 'react';
import './AddInformation.scss';
import BackButton from '../../../../../Components/backButton/BackButton';
import TextGradient from '../../../../../Components/textGradient/TextGradient';
import InputComp from '../../../../../Components/input/InputComp';
import { Link, useNavigate, useOutletContext } from 'react-router-dom';

import { motion } from 'framer-motion';
import axios from 'axios';
import { FORGETPASSWORD, baseURL } from '../../../../../Components/Variables/Variables';


export default function AddInformation() {
    const { email, setEmail } = useOutletContext();
    const [error, setError] = useState(null);
    const navigate = useNavigate();


    function handleChange(e) {
        setEmail(email => ({ ...email, [e.target.name]: e.target.value }));
        console.log(email);
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(email)
        try {
            // Make a POST request to your backend endpoint
            const senEmaresponseil = await axios.post(`${baseURL}/${FORGETPASSWORD}`, email, {
                withCredentials: true,
            }).then(res => {
                if (res.data.message == "Verification email sent successfully") {
                    navigate('checkemail');
                } else {
                    setError(res.data.message);
                }
            }
            );
        } catch (error) {
            console.error('Error sending request:', error);
            setError('There was an error sending your request. Please try again.');
        }
    };
    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="box w-full sm:w-8/12 md:w-7/12 mx-auto mt-5">
                <BackButton />
                <div className="title my-10">
                    <h2 className='text-center'><TextGradient size='26px' weight='900' text='Forgot password?' /></h2>
                    <p className='text-sm text-center text-[#777775] mb-10'>Recover your account.</p>
                </div>
                <div className="add-email text-center w-full sm:w-8/12 md:w-1/2  mx-auto mt-20">
                    <p className='text-sm'>Enter your email that you used to log in with.</p>
                    <form onSubmit={handleSubmit}>
                        <InputComp onchange={(e) => handleChange(e)} value={email} type="email" name="email" id="email" className='w-full text-sm outline-none px-4 py-3 my-4 mx-auto bg-white' placeholder='Email' />
                        {error && <motion.p
                            ey="confirm-password-error" // Unique key for AnimatePresence
                            initial={{ opacity: 0, y: -10 }} // Initial hidden state
                            animate={{ opacity: 1, y: 0 }}   // Animation to visible
                            exit={{ opacity: 0, y: -10 }}    // Animation when removed
                            transition={{ duration: 0.5 }}  // Duration
                            className="text-red-500">{error}</motion.p>} {/* Display error message */}
                        <button type='submit' className={'btn-gradient block w-full mt-16'} ><span className='text-lg font-extrabold primaryfont block'>Continue</span></button>
                    </form>

                </div>
            </motion.div>
        </>
    )
}
