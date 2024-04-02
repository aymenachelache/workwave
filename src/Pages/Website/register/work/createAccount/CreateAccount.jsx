import React from 'react';
import './CreateAccount.scss';
// import logo from '../../../assets/Logo.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import BackButton from '../../../../../Components/backButton/BackButton';
import InputComp from '../../../../../Components/input/InputComp';
import TextGradient from '../../../../../Components/textGradient/TextGradient';
export default function CreateAccount() {
    return (
        <>
            <div className="create-account-work w-full relative">
                <div className="contain mx-auto text-center">
                    <TextGradient size='25px' weight='800' text='Create an account' />
                    <p className='text-sm text-[#777775] mb-10'>Your personal informations.</p>
                    <form action="">
                        <InputComp type="text" name="firstName" id="firstName" className='w-2/4 inline-block text-sm outline-none px-4 py-3 my-2' placeholder='First Name' />
                        <InputComp type="text" name="lastName" id="lastName" className='w-2/4 inline-block text-sm outline-none px-4 py-3 my-2' placeholder='Last Name' />
                        <InputComp type="email" name="email" id="email" className='w-full text-sm outline-none px-4 py-3 my-4 mx-auto' placeholder='Email' />
                        <select name="country" id="country" className='w-full cursor-pointer text-sm outline-none px-4 py-3 mb-4'>
                            <option value='country'>Country</option>
                            <option value="algerie">Algerie</option>
                            <option value="france">France</option>
                            <option value="italy">Italy</option>
                            <option value="maroc">Maroc</option>
                        </select>
                        <Link to={'phoneandpassword'} className={'btn block w-full'} ><span className='text-lg font-extrabold primaryfont block'>Continue</span></Link>
                    </form>
                    <div className="other flex items-center justify-between gap-3 text-[#1F1F1F1A] my-8">
                        <span className="line"></span>
                        <span className='or text-sm'>Or</span>
                        <span className="line"></span>
                    </div>
                    <div className="social-media flex justify-between gap-3">
                            <div className="social google bg-[#fff] cursor-pointer">
                                <img src={require('../../../../../assets/login/google.png')} alt="" />
                                <span className='hidden'>Continue with Google</span>
                            </div>
                            <div className="social facebook bg-[#1877F2] cursor-pointer">
                                <img src={require('../../../../../assets/login/facebook.png')} alt="" />
                            </div>
                            <div className="social apple bg-[#0D0D0D] cursor-pointer">
                                <img src={require('../../../../../assets/login/apple.png')} alt="" />
                            </div>
                            <div className="social linkedin bg-[#0077B5] cursor-pointer">
                                <img src={require('../../../../../assets/login/linkedin.png')} alt="" />
                            </div>
                        </div>
                </div>
            </div >
        </>
    )
}
