import React from 'react';
import './AddCertificate.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faPlus } from '@fortawesome/free-solid-svg-icons';
import BackButton from '../../../../../Components/backButton/BackButton';
import InputComp from '../../../../../Components/input/InputComp';
import TextGradient from '../../../../../Components/textGradient/TextGradient';
import Button from "../../../../../Components/Button/Button";
import { greyColor } from '../../../../../Components/Variables/VariablesColors';
import {motion} from 'framer-motion';

export default function AddCertificate() {
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
             className="create-account-work add-certificate w-full relative">
                <div className="contain payment-methode w-3/4 mx-auto text-center">
                    <TextGradient size='25px' weight='800' text='Setting up your profile' />
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
                    className='text-sm text-[#777775] mb-10'>Certify your skills.</motion.p>
                    <div className="flex gap-4">
                        <div className="text-center">
                            <span className='text-xs font-bold primaryfont'>Skill 1</span>
                            <div className='add-box cursor-pointer global-radius my-border mt-3 px-8 pt-6 pb-4'>
                                <p className='text-8xl text-[#E4E2DE] primaryfont'><FontAwesomeIcon icon={faPlus} /></p>
                                <span className="upload opacity-0 text-xs text-[#A3A19F] secondaryfont">Upload certificate</span>
                            </div>
                        </div>
                        <div className="text-center">
                            <span className='text-xs font-bold primaryfont'>Skill 1</span>
                            <div className='add-box cursor-pointer global-radius my-border mt-3 px-8 pt-6 pb-4'>
                                <p className='text-8xl text-[#E4E2DE] primaryfont'><FontAwesomeIcon icon={faPlus} /></p>
                                <span className="upload opacity-0 text-xs text-[#A3A19F] secondaryfont">Upload certificate</span>
                            </div>
                        </div>
                        <div className="text-center">
                            <span className='text-xs font-bold primaryfont'>Skill 1</span>
                            <div className='add-box cursor-pointer global-radius my-border mt-3 px-8 pt-6 pb-4'>
                                <p className='text-8xl text-[#E4E2DE] primaryfont'><FontAwesomeIcon icon={faPlus} /></p>
                                <span className="upload opacity-0 text-[#A3A19F] secondaryfont">Upload certificate</span>
                            </div>
                        </div>
                    </div>  
                    <Link to={'profiledetails'} className={'btn-gradient block w-3/4 mx-auto mt-10'} ><span className='text-lg font-extrabold primaryfont block'>Continue</span></Link>
                    <div className='text-right mt-8'>
                    <Button link='profiledetails' text='Skip for now' color={greyColor} classes='font-extrabold text-xs tracking-wider' object={<FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: '5px'}} />} clicked />
                    </div>
                </div>
            </motion.div >
        </>
    )
}
