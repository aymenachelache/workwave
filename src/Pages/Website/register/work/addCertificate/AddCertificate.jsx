import React, { useRef, useState } from 'react';
import './AddCertificate.scss';
import { Link, useNavigate, useOutletContext } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faCheck, faPlus } from '@fortawesome/free-solid-svg-icons';
import BackButton from '../../../../../Components/backButton/BackButton';
import InputComp from '../../../../../Components/input/InputComp';
import TextGradient from '../../../../../Components/textGradient/TextGradient';
import Button from "../../../../../Components/Button/Button";
import { CERTIFICATE, SENDCERTIFICATE, baseURL, greyColor } from '../../../../../Components/Variables/VariablesColors';
import { motion } from 'framer-motion';
import axios from 'axios';


export default function AddCertificate() {
    const { skillsAndCertificate, setSkillsAndCertificate } = useOutletContext();
    const [selectedCertificate, setSelectedCertificate] = useState([]);
    const [certificateUploaded, setCertificateUploaded] = useState([]);
    const [loading1, setLoading1] = useState(false);
    const [loading2, setLoading2] = useState(false);
    const [loading3, setLoading3] = useState(false);


    // Create a ref for the file input
    const fileInputRef1 = useRef(null);
    const fileInputRef2 = useRef(null);
    const fileInputRef3 = useRef(null);
    const navigate = useNavigate();
    const [error, setError] = useState(false);



    const handleAddBoxClick = (inp) => {
        if (inp == 1 && !certificateUploaded.includes(1)) {
            if (fileInputRef1.current) {
                fileInputRef1.current.click(); // Trigger the hidden file input
            }
        } else if (inp == 2 && !certificateUploaded.includes(2)) {
            if (fileInputRef2.current) {
                fileInputRef2.current.click(); // Trigger the hidden file input
            }
        } else if (inp == 3 && !certificateUploaded.includes(3)) {
            if (fileInputRef3.current) {
                fileInputRef3.current.click(); // Trigger the hidden file input
            }
        }
    };




    // Create a new FormData instance
    const formData = new FormData();

    const handleFileChange = async (number, e) => {
        formData.append('images', e.target.files[0]); // Append the selected file to the FormData
        console.log(selectedCertificate);
        console.log(certificateUploaded);
        if (number == 1) {
            setLoading1(true);
        } else if (number == 2) {
            setLoading2(true);
        } else if (number == 3) {
            setLoading3(true);
        }
        try {
            const response = await axios.post(`${baseURL}/${CERTIFICATE}`, formData, {
                withCredentials: true,
            }).then((res) => {
                setSkillsAndCertificate((prevState) => ({
                    ...prevState,
                    certificate: [...prevState.certificate, res.data], // Updating the skills property with new data
                }));
            });
            console.log(selectedCertificate);
            console.log("Image uploaded successfully:", selectedCertificate);
            if (number == 1) {
                setLoading1(false);
            } else if (number == 2) {
                setLoading2(false);
            } else if (number == 3) {
                setLoading3(false);
            }

        } catch (error) {
            console.error("Error uploading image:", error);
            if (number == 1) {
                setLoading1(false);
            } else if (number == 2) {
                setLoading2(false);
            } else if (number == 3) {
                setLoading3(false);
            }
        }
        setCertificateUploaded([...certificateUploaded, number]);
    };

    const sendSkillsAndcertificate = async () => {
        if (skillsAndCertificate.skills.length!=0) {
            try {
                const sendEmail = await axios.post(`${baseURL}/${SENDCERTIFICATE}`, skillsAndCertificate,{
                    withCredentials: true,
                }).then(res => navigate("profiledetails"));
            } catch (err) {
                console.log("Error Sned Skills And Certificate.");
            }
        } else {
            setError(true);
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
                    <div className="flex flex-col sm:flex-row gap-4">
                        <div className="text-center">
                            <span className='text-xs font-bold primaryfont' style={{ color: certificateUploaded.includes(1) ? "#37B778" : "" }}>Skill 1</span>
                            <div
                                onClick={() => { handleAddBoxClick(1) }} // Add the click handler here
                                className='add-box cursor-pointer global-radius my-border mt-3 px-8 pt-6 pb-4' style={{ borderColor: certificateUploaded.includes(1) ? "#37b77880" : "" }}>
                                <p className='text-8xl mx-auto text-[#E4E2DE] primaryfont w-24' style={{ color: certificateUploaded.includes(1) ? "#37B778" : "" }}>{certificateUploaded.includes(1) ? <FontAwesomeIcon icon={faCheck} /> : loading1 ? <img className="w-20 h-20 animate-spin w-24 h-24" src="https://www.svgrepo.com/show/70469/loading.svg" alt="Loading icon" />
                                    : <FontAwesomeIcon icon={faPlus} />}</p>
                                <span className="upload opacity-0 text-xs text-[#A3A19F] secondaryfont" style={{ color: certificateUploaded.includes(1) ? "#37B778" : "" }}>{certificateUploaded.includes(1) ? "Done!" : "Upload certificate"}</span>
                            </div>
                            {/* Hidden file input */}
                            <input
                                type="file"
                                ref={fileInputRef1}
                                onChange={(e) => handleFileChange(1, e)}
                                style={{ display: 'none' }} // Hide the file input
                            />
                        </div>
                        
                        <div className="text-center">
                            <span className='text-xs font-bold primaryfont' style={{ color: certificateUploaded.includes(2) ? "#37B778" : "" }}>Skill 2</span>
                            <div
                                onClick={() => { handleAddBoxClick(2) }} // Add the click handler here
                                className='add-box cursor-pointer global-radius my-border mt-3 px-8 pt-6 pb-4' style={{ borderColor: certificateUploaded.includes(2) ? "#37b77880" : "" }}>
                                <p className='text-8xl mx-auto text-[#E4E2DE] primaryfont w-24' style={{ color: certificateUploaded.includes(2) ? "#37B778" : "" }}>{certificateUploaded.includes(2) ? <FontAwesomeIcon icon={faCheck} /> : loading2 ? <img className="w-20 h-20 animate-spin w-24 h-24" src="https://www.svgrepo.com/show/70469/loading.svg" alt="Loading icon" />
                                    : <FontAwesomeIcon icon={faPlus} />}</p>
                                <span className="upload opacity-0 text-xs text-[#A3A19F] secondaryfont" style={{ color: certificateUploaded.includes(2) ? "#37B778" : "" }}>{certificateUploaded.includes(2) ? "Done!" : "Upload certificate"}</span>
                            </div>
                            {/* Hidden file input */}
                            <input
                                type="file"
                                ref={fileInputRef2}
                                onChange={(e) => handleFileChange(2, e)}
                                style={{ display: 'none' }} // Hide the file input
                            />
                        </div>


                        <div className="text-center">
                            <span className='text-xs font-bold primaryfont' style={{ color: certificateUploaded.includes(3) ? "#37B778" : "" }}>Skill 3</span>
                            <div
                                onClick={() => { handleAddBoxClick(3) }} // Add the click handler here
                                className='add-box cursor-pointer global-radius my-border mt-3 px-8 pt-6 pb-4' style={{ borderColor: certificateUploaded.includes(3) ? "#37b77880" : "" }}>
                                <p className='text-8xl mx-auto text-[#E4E2DE] primaryfont w-24' style={{ color: certificateUploaded.includes(3) ? "#37B778" : "" }}>{certificateUploaded.includes(3) ? <FontAwesomeIcon icon={faCheck} /> : loading3 ? <img className="w-20 h-20 animate-spin w-24 h-24" src="https://www.svgrepo.com/show/70469/loading.svg" alt="Loading icon" />
                                    : <FontAwesomeIcon icon={faPlus} />}</p>
                                <span className="upload opacity-0 text-xs text-[#A3A19F] secondaryfont" style={{ color: certificateUploaded.includes(3) ? "#37B778" : "" }}>{certificateUploaded.includes(3) ? "Done!" : "Upload certificate"}</span>
                            </div>
                            {/* Hidden file input */}
                            <input
                                type="file"
                                ref={fileInputRef3}
                                onChange={(e) => handleFileChange(3, e)}
                                style={{ display: 'none' }} // Hide the file input
                            />
                        </div>

                      

                    </div>
                    {error && (
                        <motion.div
                            key="confirm-password-error" // Unique key for AnimatePresence
                            initial={{ opacity: 0, y: -10 }} // Initial hidden state
                            animate={{ opacity: 1, y: 0 }}   // Animation to visible
                            exit={{ opacity: 0, y: -10 }}    // Animation when removed
                            transition={{ duration: 0.5 }}  // Duration
                            className="error-text text-sm text-[red]">Please select 3 skills.</motion.div>
                    )}
                    <Link onClick={sendSkillsAndcertificate} className={'btn-gradient block w-3/4 mx-auto mt-10'} ><span className='text-lg font-extrabold primaryfont block'>Continue</span></Link>
                    <div className='text-right mt-8'>
                        <Button link='profiledetails' text='Skip for now' color={greyColor} classes='font-extrabold text-xs tracking-wider' object={<FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: '5px' }} />} clicked />
                    </div>
                </div>
            </motion.div >
        </>
    )
}
