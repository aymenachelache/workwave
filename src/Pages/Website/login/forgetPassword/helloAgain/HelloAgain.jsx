import React, { useState } from 'react';
import TextGradient from '../../../../../Components/textGradient/TextGradient';
import InputComp from '../../../../../Components/input/InputComp';
import { Link, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';


import { motion } from 'framer-motion';
import { RESETPASSWORD, baseURL } from '../../../../../Components/Variables/Variables';
import axios from 'axios';
export default function HelloAgain() {
    const [formData, setFormData] = useState({
        password: "",
    });
    const [errors, setErrors] = useState({}); // Utilisé pour stocker les erreurs par champ
    const { token } = useParams(); // Extract the 'token' from the URL
    const navigate = useNavigate();

    // Fonction de validation pour le mot de passe
    const validatePassword = (password) => {
        const errorMessages = [];
        if (password.length < 8) {
            errorMessages.push("Password must be at least 8 characters.");
        }
        if (!/[0-9]/.test(password)) {
            errorMessages.push("Password must contain at least one number.");
        }
        if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
            errorMessages.push("Password must contain at least one special character.");
        }
        return errorMessages;
    };

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData(formData => ({ ...formData, [e.target.name]: e.target.value }));
        if (name === "password") {
            const passwordErrors = validatePassword(value);
            setErrors((prev) => ({ ...prev, password: passwordErrors }));
        }

        if (name === "confirmPassword") {
            if (formData.password !== value) {
                setErrors((prev) => ({ ...prev, confirmPassword: "Passwords do not match." }));
            } else {
                setErrors((prev) => ({ ...prev, confirmPassword: "" }));
            }
        }
    }


    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        console.log(formData)
        console.log(formData)
        if (errors.password?.length || errors.confirmPassword) {
            setErrors((prev) => ({ ...prev, form: "Please correct the errors before submitting." }));
            return;
        }
        try {
            const data = await axios.put(`${baseURL}/${RESETPASSWORD}/${token}`, formData, {
                withCredentials: true,
            }).then(res => {
                console.log(res);
                //         // if (res.data.Success !== undefined && res.data.Success !== null) {
                //         //     setInvalidaDta(true);
                //         //     return;
                //         // }
                //         // localStorage.setItem("email", res.data.email);
                //         // localStorage.setItem("firstName", res.data.firstName);
                //         // localStorage.setItem("lastName", res.data.lastName);
                //         // localStorage.setItem("mobile", res.data.mobile);
                //         // localStorage.setItem("verified", res.data.verified);
                //         // localStorage.setItem("role", res.data.role);
                //         // window.location = "/"  ;
                navigate('/login');
            });
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <>
            <div className='flex justify-center items-center h-screen'>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="box sm:w-8/12 max-w:w-full mx-auto">
                    <div className="title">
                        <h2 className='text-center'><TextGradient size='26px' weight='900' text='Hello again !' /></h2>
                        <p className='text-sm text-center text-[#777775] mb-10'>Reset password.</p>
                    </div>
                    <div className="add-email text-center w-2/5 mx-auto my-10">
                        <form onSubmit={handleSubmit}>
                            <InputComp onchange={(e) => handleChange(e)} type="password" name="password" id="password" value={formData.password} className='w-full text-sm outline-none px-4 py-3 my-4 mx-auto bg-white' placeholder='New Password' />
                            <InputComp type="password" name="confirmPassword" id="confirmPassword" className='w-full text-sm outline-none px-4 py-3 my-4 mx-auto bg-white' placeholder='Password Confirmation' />
                            {errors.confirmPassword && (
                                <motion.div
                                    key="confirm-password-error" // Unique key for AnimatePresence
                                    initial={{ opacity: 0, y: -10 }} // Initial hidden state
                                    animate={{ opacity: 1, y: 0 }}   // Animation to visible
                                    exit={{ opacity: 0, y: -10 }}    // Animation when removed
                                    transition={{ duration: 0.5 }}  // Duration
                                    className="error-text text-xs ">{errors.confirmPassword}</motion.div>
                            )}
                            {errors.password?.map((msg, index) => (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }} // Initial hidden state
                                    animate={{ opacity: 1, y: 0 }}   // Animation to visible
                                    exit={{ opacity: 0, y: -10 }}    // Animation when removed
                                    transition={{ duration: 0.5 }}  // Duration
                                    key={`confirm-password-error ${index}`} className="error-text text-xs">
                                    {msg}
                                </motion.div>
                            ))}
                            <button type='submit' className={'btn-gradient block w-full mt-5'} ><span className='text-lg font-extrabold primaryfont block'>Reset Password</span></button>
                        </form>

                    </div>
                </motion.div>
            </div>
        </>
    )
}
