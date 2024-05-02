import React, { useEffect, useState } from 'react';
import './Login.scss';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../../Components/logo/Logo';
import InputComp from '../../../Components/input/InputComp';
import BackButton from '../../../Components/backButton/BackButton';
import axios from 'axios';
import Cookie from 'cookie-universal';
import {motion} from 'framer-motion';
import { LOGIN, VERIFICATION,LOGIN_GOOGLE, baseURL } from '../../../Components/Variables/VariablesColors';

import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import {  ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Login() {
    const [form, setForm] = useState({
        email: "",
        password: "",
    });
    const navigate = useNavigate();
    const cookie = Cookie();
    const [invalidData, setInvalidaDta] = useState(false);

    const notify = () => {
        if (!invalidData) {
            toast.error("Email or Password incorrect!");
        }
    };


    function handleChange(e) {
        setForm(form => ({ ...form, [e.target.name]: e.target.value }));
    }
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        try {
            const data = await axios.post(`${baseURL}/${LOGIN}`, form, {
                withCredentials: true,
            }).then(res => {
                console.log(res.data);
                if (res.data.Success !== undefined && res.data.Success !== null) {
                    setInvalidaDta(true);
                    return;
                }
                cookie.set("email", res.data.email);
                cookie.set("firstName", res.data.firstName);
                cookie.set("lastName", res.data.lastName);
                cookie.set("mobile", res.data.mobile);
                cookie.set("verified", res.data.verified);
                navigate('/');

            });
        } catch (err) {
            setInvalidaDta(true);
            console.log("login Error");
            console.log(err);
        }
    };



    // Google 

    const [googleForm,setGoogleForm] = useState({})

    const email = localStorage.getItem('email');

    // To prevent problems
    useEffect(()=>{
        if(typeof email === 'string'){
            setTimeout(() => {
                navigate('/choice')
            }, 300);
        }
    },[email])


    const loginAccountWithGoogle = async (formData) => {
        try {
            const data = await axios.post(`${baseURL}/${LOGIN_GOOGLE}`, 
            {
                googleId:formData.googleId
            },{
                withCredentials: true,
            });

            if (!data) {
                toast.error('Error login to your account');
            }

            toast('You have been login successfully');
            setTimeout(() => {
                 //  Here remember to add the dashboard when it is ready 
                // navigate('/choice');
                const addEmailToLocalStorage = localStorage.setItem('email',formData.email)
            }, 2500);
        } catch (err) {
            toast.error(err?.response?.data?.message || 'Error happend')
        }
    };


    // Google


    return (
        <>
            <div className="login w-full h-screen relative">
                <div className="box absolute flex flex-col justify-between bg-white h-screen py-4 px-5">
                    <div className="top flex justify-between items-center">
                        <Logo className='font-bold' />
                        <BackButton />
                    </div>
                    <div className="contain w-2/4 mx-auto text-center">
                        <h2 className='font-black mb-1'>Welcome back!</h2>
                        <p className='text-sm text-[#777775] mb-10'>Sign in to continue to WorkWave.</p>
                        <form action="" onSubmit={handleSubmit}>
                            <InputComp onchange={(e) => handleChange(e)} type="email" value={form.email} name="email" id="email" className='w-full text-sm outline-none px-4 py-3 my-4 mx-auto' placeholder='Email' required />
                            <InputComp onchange={(e) => handleChange(e)} type="password" value={form.password} name="password" id="pass" className='w-full text-sm outline-none px-4 py-3 my-4 mx-auto' placeholder='Password' required />
                            <button onClick={notify} type='submit' className={'btn-gradient block w-full'}><span className='text-lg font-extrabold primaryfont block'>log In</span></button>
                            <ToastContainer position='bottom-left' />
                        </form>
                        <div className="forget flex justify-between mt-2">
                            <Link to={'/register'} className='text-xs font-thin cursor-pointer text-[#777775]'>New to WorkWave?</Link>
                            <Link to='forgetpassword/addinformation' className='text-xs font-thin cursor-pointer text-[#777775]'>Forgot password?</Link>
                        </div>
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
                                email: credentialResponseDecoded.email
                            };
                            await setGoogleForm(updatedForm);
                            loginAccountWithGoogle(updatedForm);
                        }}
                        onError={() => {
                            console.log('Login Failed');
                        }}
                    />;



                        {/*  google  */}

                    </div>
                    <div className="copyright">
                        <p className='text-sm text-[#CDCCC9]'>&copy; WorkWave 2024</p>
                    </div>
                </div>
            </div >

        </>
    )
}
