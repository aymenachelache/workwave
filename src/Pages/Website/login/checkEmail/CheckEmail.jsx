import React, { useState } from 'react';
import InputComp from '../../../../Components/input/InputComp';
import { Link, useOutletContext } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FORGETPASSWORD, baseURL, greyColor } from '../../../../Components/Variables/VariablesColors';
import axios from 'axios';
import TextGradient from '../../../../Components/textGradient/TextGradient';
export default function CheckEmail() {
    const { email, setEmail } = useOutletContext();
    const [emailSend, setEmailSend] = useState(false);
    const [error, setError] = useState(null);


    const sendEmailVerification = async () => {
        try {
            // Make a POST request to your backend endpoint
            const senEmaresponseil = await axios.post(`${baseURL}/${FORGETPASSWORD}`, email, {
                withCredentials: true,
            }).then(res => {
                if (res.data.message == "Verification email sent successfully") {
                    setEmailSend(true);
                    setError("");
                } else {
                    setError(res.data.message);
                }
            });
        } catch (error) {
            console.error('Error sending request:', error);
        }
    }
    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="box sm:w-8/12 md:w-7/12 mx-auto mt-20">
                <div className="title my-10">
                    <h2 className='text-center'><TextGradient size='26px' weight='900' text='Forgot password?' /></h2>
                    <p className='text-sm text-center text-[#777775] mb-10'>Check Email.</p>
                </div>
                <div className="add-email text-center w-full sm:w-8/12 md:w-1/2  mx-auto mt-20">
                    <p className='text-sm'>Please check your email.</p>
                    <button onClick={sendEmailVerification} type='submit' className={'btn-gradient block w-full mt-16'}><span className='text-lg font-extrabold primaryfont block'>Send Email Again</span></button>
                    {emailSend && (
                        <motion.div
                            key="confirm-password-error" // Unique key for AnimatePresence
                            initial={{ opacity: 0, y: -10 }} // Initial hidden state
                            animate={{ opacity: 1, y: 0 }}   // Animation to visible
                            exit={{ opacity: 0, y: -10 }}    // Animation when removed
                            transition={{ duration: 0.5 }}  // Duration
                            className="error-text text-xs mb-5 text-[#37B778] mt-6">The email has been successfully sent</motion.div>
                    )}
                    {error && <motion.p
                            ey="confirm-password-error" // Unique key for AnimatePresence
                            initial={{ opacity: 0, y: -10 }} // Initial hidden state
                            animate={{ opacity: 1, y: 0 }}   // Animation to visible
                            exit={{ opacity: 0, y: -10 }}    // Animation when removed
                            transition={{ duration: 0.5 }}  // Duration
                            className="text-red-500">{error}</motion.p>} {/* Display error message */}
                </div>
            </motion.div>
        </>
    )
}
