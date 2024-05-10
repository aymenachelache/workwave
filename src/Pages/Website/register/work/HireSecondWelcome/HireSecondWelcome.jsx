import React from 'react';
import './HireSecondWelcome.scss';
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


export default function HireSecondWelcome() {
    const cookie = Cookie();
    const firstName = cookie.get("firstName");
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
                        className='text-sm text-[#777775] mb-10'>Welcome to WorkWave</motion.p>

                    <p className='leading-8'>
                        Now, you are officially a client at WorkWave!<br></br>
                        Start hiring reliable freelancers by choosing a service offer or posting a need!
                    </p>
                    <Link to={'/'} className={'btn-gradient block w-3/4 mx-auto mt-5'} ><span className='text-lg font-extrabold primaryfont block'>Consult Services</span></Link>
                    <div className='text-right mt-14'>
                        <Button link='/' text='Post your first need' color={greyColor} classes='font-bold text-xs tracking-wider' object={<FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: '5px' }} />} clicked />
                    </div>
                </div>
            </motion.div >
        </>
    )
}
