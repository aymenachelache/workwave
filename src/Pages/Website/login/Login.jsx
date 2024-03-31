import React from 'react';
import './Login.scss';
import logo from '../../../assets/Logo.png'
import { Link } from 'react-router-dom';
import TextGradient from '../../../Components/textGradient/TextGradient';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Logo from '../../../Components/logo/Logo';
import InputComp from '../../../Components/input/InputComp';
import BackButton from '../../../Components/backButton/BackButton';


export default function Login() {
    return (
        <>
            <div className="login w-full h-screen relative">
                <div className="box absolute flex flex-col justify-between bg-white h-screen py-4 px-5">
                    <div className="top flex justify-between items-center">
                        <Logo className='font-bold'/>
                        <BackButton />
                    </div>
                    <div className="contain w-2/4 mx-auto text-center">
                        <h2 className='font-black mb-1'>Welcome back!</h2>
                        <p className='text-sm text-[#777775] mb-10'>Sign in to continue to WorkWave.</p>
                        <form action="">
                            <InputComp type="email" name="email" id="email" className='w-full text-sm outline-none px-4 py-3 my-4 mx-auto' placeholder='Email' />
                            <InputComp type="password" name="pass" id="pass" className='w-full text-sm outline-none px-4 py-3 my-4 mx-auto' placeholder='Password' />
                            <Link className={'btn block w-full'} ><span className='text-lg font-extrabold primaryfont block'>Log In</span></Link>
                        </form>
                        <div className="forget flex justify-between mt-2">
                            <Link to={'/register'} className='text-xs font-thin cursor-pointer text-[#777775]'>New to WorkWave?</Link>
                            <Link className='text-xs font-thin cursor-pointer text-[#777775]'>Forgot password?</Link>
                        </div>
                        <div className="other flex items-center justify-between gap-3 text-[#1F1F1F1A] my-8">
                            <span className="line"></span>
                            <span className='or text-sm'>Or</span>
                            <span className="line"></span>
                        </div>
                        <div className="social-media flex justify-between gap-3">
                            <div className="social google bg-[#fff] cursor-pointer">
                                <img src={require('../../../assets/login/google.png')} alt="" />
                                <span className='hidden'>Continue with Google</span>
                            </div>
                            <div className="social facebook bg-[#1877F2] cursor-pointer">
                                <img src={require('../../../assets/login/facebook.png')} alt="" />
                            </div>
                            <div className="social apple bg-[#0D0D0D] cursor-pointer">
                                <img src={require('../../../assets/login/apple.png')} alt="" />
                            </div>
                            <div className="social linkedin bg-[#0077B5] cursor-pointer">
                                <img src={require('../../../assets/login/linkedin.png')} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="copyright">
                        <p className='text-sm text-[#CDCCC9]'>&copy; WorkWave 2024</p>
                    </div>
                </div>
            </div >

        </>
    )
}
