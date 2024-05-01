import React, { useRef, useState } from 'react';
import './AddCertificate.scss';
import { Link, useOutletContext } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faPlus } from '@fortawesome/free-solid-svg-icons';
import BackButton from '../../../../../Components/backButton/BackButton';
import InputComp from '../../../../../Components/input/InputComp';
import TextGradient from '../../../../../Components/textGradient/TextGradient';
import Button from "../../../../../Components/Button/Button";
import { CERTIFICATE, baseURL, greyColor } from '../../../../../Components/Variables/VariablesColors';
import { motion } from 'framer-motion';
import axios from 'axios';
import Cookie from "cookie-universal";


export default function AddCertificate() {
    const cookie = Cookie();
    const token = cookie.get("token");
    const { skillsAndCertificate, setSkillsAndCertificate } = useOutletContext();
    const [selectedCertificate, setSelectedCertificate] = useState([]);


    // Create a ref for the file input
    const fileInputRef1 = useRef(null);
    const fileInputRef2 = useRef(null);
    const fileInputRef3 = useRef(null);


    const handleAddBoxClick = (inp) => {
        if (inp == 1) {
            if (fileInputRef1.current) {
                fileInputRef1.current.click(); // Trigger the hidden file input
            }
        } else if (inp == 2) {
            if (fileInputRef2.current) {
                fileInputRef2.current.click(); // Trigger the hidden file input
            }
        } else if (inp == 3) {
            if (fileInputRef3.current) {
                fileInputRef3.current.click(); // Trigger the hidden file input
            }
        }

    };

    // Create a new FormData instance
    const formData = new FormData();

    const handleFileChange = async (e) => {
        formData.append('images', e.target.files[0]); // Append the selected file to the FormData
        console.log(formData);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${baseURL}/${CERTIFICATE}`, formData, {
                withCredentials: true,
            }).then((res) => {
                setSelectedCertificate(res.data);
                setSkillsAndCertificate((prevState) => ({
                    ...prevState,
                    certificate: selectedCertificate,
                }))
                console.log(res.data);
                console.log(skillsAndCertificate);

            });
            console.log('Image uploaded successfully:');
        } catch (error) {
            console.error('Error uploading image:', error);
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
                className="create-account-work add-certificate w-full relative">
                <div className="contain payment-methode w-3/4 mx-auto text-center">
                    <TextGradient size='25px' weight='800' text='Setting up your profile' />
                    <motion.p
                        initial={{
                            opacity: 0,
                            // if odd index card,slide from right instead of left
                            x: 20
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0, // Slide in to its original position
                            transition: {
                                duration: 1 // Animation duration
                            }
                        }}
                        className='text-sm text-[#777775] mb-10'>Certify your skills.</motion.p>
                    <form action="">
                        <div className="flex flex-col sm:flex-row gap-4">
                            <div className="text-center">
                                <span className='text-xs font-bold primaryfont'>Skill 1</span>
                                <div
                                    onClick={() => { handleAddBoxClick(1) }} // Add the click handler here
                                    className='add-box cursor-pointer global-radius my-border mt-3 px-8 pt-6 pb-4'>
                                    <p className='text-8xl text-[#E4E2DE] primaryfont'><FontAwesomeIcon icon={faPlus} /></p>
                                    <span className="upload opacity-0 text-xs text-[#A3A19F] secondaryfont">Upload certificate</span>
                                </div>
                                {/* Hidden file input */}
                                <input
                                    type="file"
                                    ref={fileInputRef1}
                                    onChange={handleFileChange}
                                    style={{ display: 'none' }} // Hide the file input
                                />
                            </div>
                            <div className="text-center">
                                <span className='text-xs font-bold primaryfont'>Skill 2</span>
                                <div
                                    onClick={() => { handleAddBoxClick(2) }} // Add the click handler here
                                    className='add-box cursor-pointer global-radius my-border mt-3 px-8 pt-6 pb-4'>
                                    <p className='text-8xl text-[#E4E2DE] primaryfont'><FontAwesomeIcon icon={faPlus} /></p>
                                    <span className="upload opacity-0 text-xs text-[#A3A19F] secondaryfont">Upload certificate</span>
                                </div>
                                {/* Hidden file input */}
                                <input
                                    type="file"
                                    ref={fileInputRef2}
                                    onChange={handleFileChange}
                                    style={{ display: 'none' }} // Hide the file input
                                />
                            </div>
                            <div className="text-center">
                                <span className='text-xs font-bold primaryfont'>Skill 3</span>
                                <div
                                    onClick={() => { handleAddBoxClick(3) }} // Add the click handler here
                                    className='add-box cursor-pointer global-radius my-border mt-3 px-8 pt-6 pb-4'>
                                    <p className='text-8xl text-[#E4E2DE] primaryfont'><FontAwesomeIcon icon={faPlus} /></p>
                                    <span className="upload opacity-0 text-[#A3A19F] secondaryfont">Upload certificate</span>
                                </div>
                                {/* Hidden file input */}
                                <input
                                    type="file"
                                    ref={fileInputRef3}
                                    onChange={handleFileChange}
                                    style={{ display: 'none' }} // Hide the file input
                                />
                            </div>
                        </div>
                        <button type='submit' onClick={handleSubmit}>Submit</button>
                    </form>
                    <Link to={'profiledetails'} className={'btn-gradient block w-3/4 mx-auto mt-10'} ><span className='text-lg font-extrabold primaryfont block'>Continue</span></Link>
                    <div className='text-right mt-8'>
                        <Button link='profiledetails' text='Skip for now' color={greyColor} classes='font-extrabold text-xs tracking-wider' object={<FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: '5px' }} />} clicked />
                    </div>
                </div>
            </motion.div >
        </>
    )
}
