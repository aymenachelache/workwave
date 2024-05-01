import TextGradient from '../../../Components/textGradient/TextGradient';
import Logo from '../../../Components/logo/Logo';
import Cookie from "cookie-universal";
import axios from 'axios';
import { useEffect, useState } from 'react';
import { LOGOUT, VERIFICATION, baseURL } from '../../../Components/Variables/VariablesColors';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function VerificationEmail() {
    const cookie = Cookie();
    const email = cookie.get("email");
    const [error, setError] = useState(false);
    const navigate = useNavigate();
    
    const handleCheck = async (e) => {
        const verified = cookie.get("verified");
        if(verified) {
            navigate('/choice');
        } else {
            setError(true);
        }
    };

    const handleLogout = async (e) => {
        try {
            const data = await axios.get(`${baseURL}/${LOGOUT}`, {
                withCredentials: true,
            }).then(res => {
                console.log(res.data);
            });
            cookie.removeAll();
            window.location = "/";
        } catch (err) {
            console.log("logOut Error");
            console.log(err);
        }
    };
    // useEffect(() => {
    //     async function sendEmailVerification() {
    //         await axios.post(`${baseURL}/${VERIFICATION}`, cookie.get("token"), {
    //             withCredentials: true,
    //             headers: {
    //                 'Authorization': 'Bearer ' + cookie.get("token"),
    //             }
    //         }).then(res => console.log(res));
    //     }
    //     sendEmailVerification();
    // }, []);
    return (
        <>
            <div className="forget-password p-5">
                <Logo />
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="boxx sm:w-8/12 md:w-7/12 mx-auto mt-5">
                    <div className="title mt-10">
                        <h2 className='text-center'><TextGradient size='26px' weight='900' text='Verify your Email' /></h2>
                        <p className='text-sm text-center text-[#777775] mb-10'>Recovery code.</p>
                    </div>
                    <div className="add-email text-center mx-auto mt-10 w-5/6">
                        <p className='text-lg'>We have sent an email to <span className='font-bold'>{email}</span></p>
                        <p className='text-lg'>You need to verify your email to continue.</p>
                        <p className='text-lg'>
                            If you have not received the verification email, please check your
                            "Spam" or "Bulk Email" folder.
                        </p>
                        <div className='flex flex-col items-center gap-5 mt-5 mx-auto w-1/2'>
                            <button onClick={handleCheck} type='submit' className={'btn-gradient block w-full'}><span className='text-sm font-extrabold primaryfont block'>Check again and continue</span></button>
                            {error && (
                                <motion.div
                                    key="confirm-password-error" // Unique key for AnimatePresence
                                    initial={{ opacity: 0, y: -10 }} // Initial hidden state
                                    animate={{ opacity: 1, y: 0 }}   // Animation to visible
                                    exit={{ opacity: 0, y: -10 }}    // Animation when removed
                                    transition={{ duration: 0.5 }}  // Duration
                                    className="error-text text-xs mb-5 text-[red]">Email Not Verified.</motion.div>
                            )}
                            <button onClick={handleLogout} type='submit' className={'btn text-[red] block w-full'}><span className='text-sm font-extrabold primaryfont block'>Log Out</span></button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </>
    )
}
