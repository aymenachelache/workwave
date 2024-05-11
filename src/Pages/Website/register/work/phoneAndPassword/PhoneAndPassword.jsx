import React, { useState } from 'react';
import './PhoneAndPassword.scss';
// import logo from '../../../assets/Logo.png';
import { useNavigate, useOutletContext } from 'react-router-dom';
import InputComp from '../../../../../Components/input/InputComp';
import TextGradient from '../../../../../Components/textGradient/TextGradient';
import { AnimatePresence, motion } from 'framer-motion';
import axios from 'axios';
import { REGISTER, VERIFICATION, baseURL } from '../../../../../Components/Variables/Variables';

export default function PhoneAndPassword() {
    const { formData, setFormData } = useOutletContext();
    const [errors, setErrors] = useState({}); // Utilisé pour stocker les erreurs par champ
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

    const validateMobile = (mobile) => {
        if (!/^\d{9}$/.test(mobile)) {
            return "Mobile number must contain exactly 9 digits.";
        }
        return null;
    };






    function handleChange(e) {
        const { name, value } = e.target;

        setFormData(formData => ({ ...formData, [e.target.name]: e.target.value }));
        if (name === "password") {
            const passwordErrors = validatePassword(value);
            setErrors((prev) => ({ ...prev, password: passwordErrors }));
        }

        if (name === "mobile") {
            const mobileError = validateMobile(value);
            setErrors((prev) => ({ ...prev, mobile: mobileError }));
        }

        if (name === "confirmPassword") {
            if (formData.password && formData.password !== value) {
                setErrors((prev) => ({ ...prev, confirmPassword: "Passwords do not match." }));
            } else {
                setErrors((prev) => ({ ...prev, confirmPassword: "" }));
            }
        }
    }
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        if (errors.password?.length || errors.mobile || errors.confirmPassword) {
            setErrors((prev) => ({ ...prev, form: "Please correct the errors before submitting." }));
            return;
        }
        if (formData.password !== formData.confirmPassword) {
            setErrors((prev) => ({ ...prev, confirmPassword: "Passwords do not match." }));
            return;
        }
        try {
            const data = await axios.post(`${baseURL}/${REGISTER}`, formData, {
                withCredentials: true,
            }).then(res => {
                navigate('/emailverfication');
                localStorage.setItem("email", res.data.email);
                localStorage.setItem("firstName", res.data.firstName);
                localStorage.setItem("lastName", res.data.lastName);
                localStorage.setItem("mobile", res.data.mobile);
                localStorage.setItem("verified", res.data.verified);
                localStorage.setItem("role", res?.data?.role ?  res?.data?.role : "user" );
            }).catch((err) => console.log(err));
            const sendEmail = await axios.post(`${baseURL}/${VERIFICATION}`, "" ,{
                withCredentials: true, 
            }).then(res => console.log(res));
        } catch (err) {
            // setError(err.response.data.error);
            // setErrors((prev) => ({ ...prev, form: err.response.data.error }));
            console.log(err)
        }
    };
    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="create-account-work w-full relative">
                <div className="contain w-2/4 mx-auto text-center">
                    <TextGradient size='25px' weight='800' text='Create an account' />
                    <p className='text-sm text-[#777775] mb-10'>Your personal informations.</p>
                    <form action="" onSubmit={handleSubmit}>
                        <div>
                            <div className="flex gap-2">
                                <InputComp value='+213' type="text" name="countrynumber" id="countrynumber" className='w-1/4 text-sm outline-none px-4 py-3 my-2' disabled />
                                <InputComp onchange={(e) => handleChange(e)} value={formData.mobile} type="number" name="mobile" id="phone" className='w-3/4 text-sm outline-none px-4 py-3 my-2' placeholder='5-00-00-55-36' />
                            </div>
                            <AnimatePresence> {/* Wrap with AnimatePresence */}
                                {errors.mobile && (
                                    <motion.div
                                        key="confirm-password-error" // Unique key for AnimatePresence
                                        initial={{ opacity: 0, y: -10 }} // Initial hidden state
                                        animate={{ opacity: 1, y: 0 }}   // Animation to visible
                                        exit={{ opacity: 0, y: -10 }}    // Animation when removed
                                        transition={{ duration: 0.5 }}  // Duration
                                        className="error-text text-xs">{errors.mobile}</motion.div>
                                )}
                            </AnimatePresence>

                        </div>
                        <InputComp onchange={(e) => handleChange(e)} value={formData.password} type="password" name="password" id="password" className='w-full text-sm outline-none px-4 py-3 my-4 mx-auto' placeholder='Password' />
                        <AnimatePresence> {/* Wrap with AnimatePresence */}
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
                        </AnimatePresence>

                        <InputComp onchange={(e) => handleChange(e)} value={formData.confirmPassword} type="password" name="confirmPassword" id="ConfirmPassword" className='w-full text-sm outline-none px-4 py-3 my-4 mx-auto' placeholder='Confirm Password' />
                        <AnimatePresence> {/* Wrap with AnimatePresence */}
                            {errors.confirmPassword && (
                                <motion.div
                                    key="confirm-password-error" // Unique key for AnimatePresence
                                    initial={{ opacity: 0, y: -10 }} // Initial hidden state
                                    animate={{ opacity: 1, y: 0 }}   // Animation to visible
                                    exit={{ opacity: 0, y: -10 }}    // Animation when removed
                                    transition={{ duration: 0.5 }}  // Duration
                                    className="error-text text-xs ">{errors.confirmPassword}</motion.div>
                            )}
                            {errors.form && (
                                <motion.div
                                    key="confirm-password-error" // Unique key for AnimatePresence
                                    initial={{ opacity: 0, y: -10 }} // Initial hidden state
                                    animate={{ opacity: 1, y: 0 }}   // Animation to visible
                                    exit={{ opacity: 0, y: -10 }}    // Animation when removed
                                    transition={{ duration: 0.5 }}  // Duration
                                    className="error-text text-xs mb-5 text-[red]">{errors.form}</motion.div>
                            )}
                        </AnimatePresence>

                        <button type='submit' className={'btn-gradient block w-full'}><span className='text-lg font-extrabold primaryfont block'>Sign Up</span></button>
                    </form>
                </div>
            </motion.div >
        </>
    )
}
