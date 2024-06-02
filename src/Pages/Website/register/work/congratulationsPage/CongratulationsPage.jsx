import React from 'react';
import './CongratulationsPage.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import BackButton from '../../../../../Components/backButton/BackButton';
import InputComp from '../../../../../Components/input/InputComp';
import TextGradient from '../../../../../Components/textGradient/TextGradient';
import Button from "../../../../../Components/Button/Button";
import { greyColor } from '../../../../../Components/Variables/Variables';
import { motion } from 'framer-motion';
import Cookie from 'cookie-universal';


export default function CongratulationsPage() {
    const cookie = Cookie();
    const firstName = cookie.get("firstName");


    
    const handleClick = () => {
        window.location.pathname = "/";
    }

    const postFirstService = () => {
        window.location.pathname = "/work/addService";
    }

    return (
        <>
            <motion.div
                initial={{
                    opacity: 0,
                    // if odd index card,slide from right instead of left
                    x: -50
                }}
                whileInView={{
                    opacity: 1,
                    x: 0, // Slide in to its original position
                    transition: {
                        duration: 1 // Animation duration
                    }
                }}
                viewport={{ once: true }}
                className="create-account-work w-full relative">
                <div className="contain payment-methode w-3/4 mx-auto text-center">
                    <span className='capitalize'><TextGradient size='25px' weight='800' text={`Welcome ${firstName}!`} /></span>
                    <motion.p
                        initial={{
                            opacity: 0,
                            // if odd index card,slide from right instead of left
                            x: 100
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0, // Slide in to its original position
                            transition: {
                                duration: 1 // Animation duration
                            }
                        }}
                        className='text-sm text-[#777775] mb-10'>Welcome to WorkWave!</motion.p>

                    <p className='leading-8'>
                        Now, you are officially a freelancer at WorkWave!<br></br>
                        Start working in the freelance market by posting your own services and getting paid like a professional!
                    </p>
                    <button onClick={postFirstService} className={'btn-gradient block w-3/4 mx-auto mt-5 capitalize'} ><span className='text-lg font-extrabold primaryfont block'>Post your first service</span></button>
                    <div className='text-right mt-8'>
                        <Button onClick={handleClick} text='Proceed to WorkWave' color={greyColor} classes='font-extrabold text-xs tracking-wider' object={<FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: '5px' }} />} clicked />
                    </div>
                </div>
            </motion.div >
        </>
    )
}
