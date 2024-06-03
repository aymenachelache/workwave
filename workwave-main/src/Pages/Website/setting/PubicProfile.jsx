import React, { useEffect, useRef, useState } from 'react'
import { PROFILEPICTURE, baseURL, primaryColor, secondaryColor } from '../../../Components/Variables/Variables';
import Button from '../../../Components/Button/Button';
import axios from 'axios';
import InputComp from '../../../Components/input/InputComp';
import { Link } from 'react-router-dom';

export default function PubicProfile() {
    const [formData, setFormData] = useState({
        firstName: localStorage.getItem("firstName"),
        lastName: localStorage.getItem("lastName"),
        email: localStorage.getItem("email"),
        mobile: localStorage.getItem("mobile")
    });
    const fileInputRef = useRef(null);

    function handleChange(e) {
        setFormData(formData => ({ ...formData, [e.target.name]: e.target.value }));
    }


    // Change Picture Profile
    const handleAddBoxClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click(); // Trigger the hidden file input
        }
    };


    const formdata = new FormData();
    const handleImageChange = async (e) => {
        formdata.append('image', e.target.files[0]); // Append the selected file to the FormData
        try {
            const response = await axios.post(`${baseURL}/${PROFILEPICTURE}`, formdata, {
                withCredentials: true,
            }).then((res) => {
                localStorage.setItem("picture", res.data.image.url);
                window.location.reload();
            });
        } catch (error) {
            console.error("Error uploading image:", error);
        }
    };


    return (
        <div className="w-full min-h-screen py-1 md:w-2/3 lg:w-3/4">
            <div className="p-2 md:p-4">
                <div className="w-full px-6 pb-8 mt-8 sm:max-w-xl sm:rounded-lg">
                    <h2 className="pl-6 text-2xl font-bold sm:text-xl text-[#37B778]">Public Profile</h2>

                    <div className="grid max-w-2xl mx-auto mt-8">
                        <div className="flex flex-col items-center space-y-5 sm:flex-row sm:space-y-0">

                            <img className="object-cover w-40 h-40 p-1 rounded-full ring-2 ring-[#37B778]"
                                src={localStorage.getItem("picture")}
                                alt="Bordered avatar" />
                            <input
                                type="file"
                                ref={fileInputRef}
                                onChange={handleImageChange}
                                style={{ display: 'none' }} // Hide the file input
                            />
                            <div className="flex flex-col space-y-5 sm:ml-8">
                                <Button onClick={handleAddBoxClick} padding="15px 25px" text="Change picture" clicked={false} color={primaryColor} border />
                                <Button padding="15px 25px" text="Delete picture" clicked={true} color={primaryColor} border />

                            </div>
                        </div>

                        <form>
                            <div className="items-center mt-8 sm:mt-14 text-[#202142]">
                                <div className="flex flex-wrap -m-2">
                                    <div className="p-2 w-full sm:w-1/2">
                                        <div className="relative">
                                            <label htmlFor="firstName" className="leading-7 text-sm text-gray-600">Your first name</label>
                                            <InputComp onChange={(e) => handleChange(e)} value={formData.firstName} type="text" name="firstName" id="firstName" className='w-full text-sm outline-none px-4 py-3 mx-auto' placeholder='First Name' required />

                                        </div>
                                    </div>
                                    <div className="p-2 w-full sm:w-1/2">
                                        <div className="relative">
                                            <label htmlFor="lastName" className="leading-7 text-sm text-gray-600">Your last name</label>
                                            <InputComp onChange={(e) => handleChange(e)} value={formData.lastName} type="text" name="lastName" id="lastName" className='w-full text-sm outline-none px-4 py-3 mx-auto' placeholder='Last Name' required />
                                        </div>
                                    </div>
                                    <div className="p-2 w-full">
                                        <div className="relative">
                                            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Your email</label>
                                            <InputComp onChange={(e) => handleChange(e)} value={formData.email} type="email" name="email" id="email" className='w-full text-sm outline-none px-4 pt-3 py-3 mx-auto' placeholder='Email' required />
                                        </div>
                                    </div>
                                    <div className="p-2 w-full">
                                        <div className="relative">
                                            <label htmlFor="mobile" className="leading-7 text-sm text-gray-600">Phone Number</label>
                                            <InputComp onChange={(e) => handleChange(e)} value={formData.mobile} type="number" name="mobile" id="mobile" className='w-full text-sm outline-none px-4 pt-3 py-3 mx-auto' placeholder='Phone Number' required />
                                        </div>
                                    </div>
                                    <div className="p-2 w-full">
                                        <button type='submit' className={'btn-gradient block w-full'}><span className='text-lg font-extrabold primaryfont block'>Save</span></button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
