import React, { useRef } from 'react';
import './ProfileDetails.scss';
// import logo from '../../../assets/Logo.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import InputComp from '../../../../../Components/input/InputComp';
import TextGradient from '../../../../../Components/textGradient/TextGradient';
import { motion } from 'framer-motion';
import Button from '../../../../../Components/Button/Button';
import { greyColor } from '../../../../../Components/Variables/VariablesColors';
import Cookie from 'cookie-universal';
import defaultAvatar from '../../../../../assets/register/avatar.png';



export default function ProfileDetails() {
    const cookie = Cookie();
    const firstName = cookie.get("firstName");
    const lastName = cookie.get("lastName");
    const role = cookie.get("role");
    const fileInputRef = useRef(null);

    const handleAddBoxClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click(); // Trigger the hidden file input
        }
    };

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
                className="create-account-work profile-details w-full relative">
                <div className="contain w-2/4 mx-auto text-center">
                    <TextGradient size='25px' weight='800' text='Create an account' />
                    <p className='text-sm text-[#777775] mb-10'>Credit card informations.</p>
                    <div className="flex items-center gap-8">
                        <div
                            onClick={handleAddBoxClick} // Add the click handler here
                            className="avatar w-20 h-20 rounded-full cursor-pointer text bg-white" style={{ backgroundImage: `url(${defaultAvatar})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                            {/* Hidden file input */}
                            <input
                                type="file"
                                ref={fileInputRef}
                                style={{ display: 'none' }} // Hide the file input
                            />
                        </div>
                        <div className="details text-left">
                            <h3 className='text-sm md:text-xl text-nowrap font-bold uppercase'>{`${firstName} ${lastName}`}</h3>
                            <p className='text-lg font-normal'>Front-End Web dev</p>
                        </div>

                    </div>
                    <form action="">
                        <InputComp type="text" name="aboutMe" id="aboutMe" className='w-full text-sm outline-none px-4 pt-3 pb-10 my-4 mx-auto' placeholder='About Me' />
                        {role === 'freelancer' && <InputComp type="text" name="portfolio" id="portfolio" className='w-full text-sm outline-none px-4 py-3 my-4 mx-auto' placeholder='Portfolio Link' />}
                        <Link to={'congratulations'} className={'btn-gradient block w-full mt-5'} ><span className='text-lg font-extrabold primaryfont block'>Finish</span></Link>
                    </form>
                    <div className='text-right mt-4'>
                        <Button link='congratulations' text='Skip for now' color={greyColor} classes='font-extrabold text-xs tracking-wider' object={<FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: '5px' }} />} clicked />
                    </div>
                </div>
            </motion.div >
        </>
    )
}