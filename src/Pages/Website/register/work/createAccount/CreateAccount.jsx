import  { useEffect,useState } from 'react';
import './CreateAccount.scss';
// import logo from '../../../assets/Logo.png';
import {  useNavigate, useOutletContext } from 'react-router-dom';

import InputComp from '../../../../../Components/input/InputComp';
import TextGradient from '../../../../../Components/textGradient/TextGradient';
import { motion } from 'framer-motion';
import axios from 'axios';
// google   
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import { baseURL,REGISTER_GOOGLE } from '../../../../../Components/Variables/Variables';
import {  ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function CreateAccount() {
    const { formData, setFormData } = useOutletContext();
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const [googleForm,setGoogleForm] = useState({})


    const validateFields = () => {
        let isValid = true;
        let errors = {};

        if (!formData.firstName || formData.firstName.trim() === "") {
            errors.firstName = "First name is required.";
            isValid = false;
        }

        if (!formData.lastName || formData.lastName.trim() === "") {
            errors.lastName = "Last name is required.";
            isValid = false;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(formData.email)) {
            errors.email = "Invalid email format.";
            isValid = false;
        }

        setErrors(errors);
        return isValid;
    };


    function handleChange(e) {
        setFormData(formData => ({ ...formData, [e.target.name]: e.target.value }));
        setErrors((errors) => ({ ...errors, [e.target.name]: undefined })); // Effacer l'erreur une fois le champ modifié

    }
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        if (validateFields()) {
            navigate('phoneandpassword'); // Naviguer si le formulaire est valide
        }
    };

    // Google 

    const email = localStorage.getItem('email');

    // To prevent problems
    useEffect(()=>{
        if(typeof email === 'string'){
            setTimeout(() => {
                navigate('/choice')
            }, 300);
        }
    },[email])


    const createAccountWithGoogle = async (formData) => {
        try {
            const data = await axios.post(`${baseURL}/${REGISTER_GOOGLE}`, formData, {
                withCredentials: true,
            });
            if (!data) {
                toast.error('Error creating your account');
            }
            toast('Account created successfully');
            setTimeout(() => {
                navigate('/choice');
                localStorage.setItem("email", res.data.email);
                localStorage.setItem("firstName", res.data.firstName);
                localStorage.setItem("lastName", res.data.lastName);
                localStorage.setItem("mobile", res.data.mobile);
                localStorage.setItem("verified", res.data.verified);
                localStorage.setItem("role", res.data.role);
                localStorage.setItem("_id", res.data._id);
                localStorage.setItem("photo", data?.data?.photo);
            }, 2500);
        } catch (err) {
            toast.error(err?.response?.data?.message || 'Error happened (from google)')
        }
    };


    // Google

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
                        <div className="flex gap-2">
                            <InputComp onchange={(e) => handleChange(e)} value={formData.firstName} type="text" name="firstName" id="firstName" className='w-2/4 text-sm outline-none px-4 py-3 my-2' placeholder='First Name' />
                            <InputComp onchange={(e) => handleChange(e)} value={formData.lastName} type="text" name="lastName" id="lastName" className='w-2/4 text-sm outline-none px-4 py-3 my-2' placeholder='Last Name' />
                        </div>
                        <InputComp onchange={(e) => handleChange(e)} value={formData.email} type="text" name="email" id="email" className='w-full text-sm outline-none px-4 py-3 mt-4 mx-auto' placeholder='Email' />
                        <div className='h-5 my-2'>
                            {(errors.firstName || errors.lastName || errors.email) && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}  // Start position (invisible, slightly above)
                                    animate={{ opacity: 1, y: 0 }}   // End position (visible, move down to align)
                                    transition={{ duration: 0.5 }}   // Duration of animation
                                    className="error-text text-sm"
                                >Data Invalid</motion.div>
                            )}
                        </div>
                        <button type='submit' className={'btn-gradient block w-full'}><span className='text-lg font-extrabold primaryfont block'>Continue</span></button>
                    </form>
                    <div className="other flex items-center justify-between gap-3 text-[#1F1F1F1A] my-8">
                        <span className="line"></span>
                        <span className='or text-sm'>Or</span>
                        <span className="line"></span>
                    </div>

                     {/*  google  */}
                    <ToastContainer/>
                    <GoogleLogin
                        onSuccess={async (credentialResponse) => {
                            const credentialResponseDecoded = jwtDecode(credentialResponse.credential);
                            const updatedForm = {
                                googleId: credentialResponse.clientId,
                                email: credentialResponseDecoded.email,
                                firstName: credentialResponseDecoded.family_name,
                                lastName: credentialResponseDecoded.given_name,
                                mobile: '555555555'
                            };
                            await setGoogleForm(updatedForm);
                            createAccountWithGoogle(updatedForm);
                        }}
                        onError={() => {
                            console.log('Login Failed');
                        }}
                    />



                        {/*  google  */}

                </div>
            </motion.div>
        </>
    )
}
