import React, { useRef, useState } from 'react';
import './ProfileDetails.scss';
// import logo from '../../../assets/Logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import InputComp from '../../../../../Components/input/InputComp';
import TextGradient from '../../../../../Components/textGradient/TextGradient';
import { motion } from 'framer-motion';
import Button from '../../../../../Components/Button/Button';
// import { PROFILEPICTURE, baseURL, greyColor } from '../../../../../Components/Variables/VariablesColors';
import { PROFILEPICTURE, UPDATEPROFILE, baseURL, greyColor } from '../../../../../Components/Variables/VariablesColors';
import axios from 'axios';



export default function ProfileDetails() {
    const navigate = useNavigate();
    const firstName = localStorage.getItem("firstName");
    const lastName = localStorage.getItem("lastName");
    const role = localStorage.getItem("role");
    const fileInputRef = useRef(null);
    const [imageProfile, setImageProfile] = useState(localStorage.getItem("picture"));
    const [form, setForm] = useState({
        photo: imageProfile,
        description: '',
        portfolio_url: '',
    });
    const [error, setError] = useState(false);


    const handleAddBoxClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click(); // Trigger the hidden file input
        }
    };

    function handleChange(e) {
        setForm(form => ({ ...form, [e.target.name]: e.target.value }));
    }


    const formData = new FormData();

    const handleImageChange = async (e) => {
        formData.append('image', e.target.files[0]); // Append the selected file to the FormData
        try {
            const response = await axios.post(`${baseURL}/${PROFILEPICTURE}`, formData, {
                withCredentials: true,
            }).then((res) => {
                setImageProfile(res.data.image.url);
                localStorage.setItem("picture", res.data.image.url);
            });
        } catch (error) {
            console.error("Error uploading image", error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (form.description.trim() === '') {
            setError(true);
        }
        try {
            const response = await axios.post(`${baseURL}/${UPDATEPROFILE}`, form, {
                withCredentials: true,
            }).then((res) => {
                console.log(res.data)
                navigate('congratulations');
            });
        } catch (error) {
            console.error("Error :", error);
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
                            className="avatar w-20 h-20 rounded-full cursor-pointer text bg-white" style={{ backgroundImage: `url(${imageProfile})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                            {/* Hidden file input */}
                            <input
                                type="file"
                                ref={fileInputRef}
                                onChange={handleImageChange}
                                style={{ display: 'none' }} // Hide the file input
                            />
                        </div>
                        <div className="details text-left">
                            <h3 className='text-sm md:text-xl text-nowrap font-bold uppercase'>{`${firstName} ${lastName}`}</h3>
                            <p className='text-lg font-normal capitalize'>{`${role}`}</p>
                        </div>

                    </div>
                    <form onSubmit={handleSubmit}>
                        <InputComp onchange={(e) => handleChange(e)} type="text" name="description" id="description" className='w-full text-sm outline-none px-4 pt-3 pb-10 my-4 mx-auto' placeholder='About Me' />
                        {error && <p className="text-red-600 text-sm">The 'About Me' field is required.</p>}
                        {role === 'freelancer' && <InputComp onchange={(e) => handleChange(e)} type="text" name="portfolio_url" id="portfolio_url" className='w-full text-sm outline-none px-4 py-3 my-4 mx-auto' placeholder='Portfolio Link' />}
                        <button type='submit' className={'btn-gradient block w-full mt-5'} ><span className='text-lg font-extrabold primaryfont block'>Finish</span></button>
                    </form>
                    <div className='text-right mt-4'>
                        <Button link='congratulations' text='Skip for now' color={greyColor} classes='font-extrabold text-xs tracking-wider' object={<FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: '5px' }} />} clicked />
                    </div>
                </div>
            </motion.div >
        </>
    )
}