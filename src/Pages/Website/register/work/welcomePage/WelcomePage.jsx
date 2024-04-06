import React from 'react';
import './WelcomePage.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import BackButton from '../../../../../Components/backButton/BackButton';
import InputComp from '../../../../../Components/input/InputComp';
import TextGradient from '../../../../../Components/textGradient/TextGradient';
import Button from "../../../../../Components/Button/Button";
import { greyColor } from '../../../../../Components/Variables/VariablesColors';
import {motion} from 'framer-motion';

export default function WelcomePage() {
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
                    <TextGradient size='25px' weight='800' text='Welcome Hamza!' />
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
                    className='text-sm text-[#777775] mb-10'>Account created successfully!</motion.p>

                    <p className='leading-8'>
                        Your account has been created successfully!<br></br>
                        In order to start working, we need to set up your profile.
                    </p>
                    <Link to={window.location.pathname.split('/')[2] === 'work' ? 'addskills' : 'profiledetails'} className={'btn-gradient block w-3/4 mx-auto mt-5'} ><span className='text-lg font-extrabold primaryfont block'>Set up my profile!</span></Link>
                </div>
            </motion.div >
        </>
    )
}
