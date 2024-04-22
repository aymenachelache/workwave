import React from 'react';
import './PhoneAndPassword.scss';
// import logo from '../../../assets/Logo.png';
import { Link, useNavigate, useOutletContext } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import BackButton from '../../../../../Components/backButton/BackButton';
import InputComp from '../../../../../Components/input/InputComp';
import TextGradient from '../../../../../Components/textGradient/TextGradient';
import {motion} from 'framer-motion';
import axios from 'axios';

export default function PhoneAndPassword() {
    const {formData, setFormData}= useOutletContext();
    const navigate = useNavigate();
    console.log(formData);
    function handleChange(e) {
        setFormData(formData => ({...formData, [e.target.name]: e.target.value}));
    }
    const  handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        try {
            const data = await axios.post("http://127.0.0.1:5000/api/auth/sign-up", formData).then(res => console.log(res));
            navigate('paymentmethods');
        } catch(err) {
            console.log("Error Create Account");
            console.log(err);
        }
      };
    return (
        <>
            <motion.div 
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 1}}
            className="create-account-work w-full relative">
                <div className="contain w-2/4 mx-auto text-center">
                    <TextGradient size='25px' weight='800' text='Create an account' />
                    <p className='text-sm text-[#777775] mb-10'>Your personal informations.</p>
                    <form action=""  onSubmit={handleSubmit}>
                        <div className="flex gap-2">
                        <InputComp value='+213' type="text" name="firstName" id="firstName" className='w-1/4 text-sm outline-none px-4 py-3 my-2' disabled />
                        <InputComp onchange={(e) => handleChange(e)} value={formData.mobile} type="number" name="mobile" id="phone" className='w-3/4 text-sm outline-none px-4 py-3 my-2' placeholder='5 00 00 55 36' required pattern="[0-9]{9}" />
                        </div>
                        <InputComp onchange={(e) => handleChange(e)} value={formData.password} type="password" name="password" id="password" className='w-full text-sm outline-none px-4 py-3 my-4 mx-auto' placeholder='Password' required />
                        <InputComp onchange={(e) => handleChange(e)} value={formData.confirmPassword} type="password" name="confirmPassword" id="ConfirmPassword" className='w-full text-sm outline-none px-4 py-3 my-4 mx-auto' placeholder='Confirm Password' required />
                        <button type='submit' className={'btn-gradient block w-full'}><span className='text-lg font-extrabold primaryfont block'>Sign Up</span></button>
                    </form>
                </div>
            </motion.div >
        </>
    )
}
