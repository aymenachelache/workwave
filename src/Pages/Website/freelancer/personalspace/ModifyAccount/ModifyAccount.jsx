import axios from 'axios';
import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from "react";
import InputComp from "../../../../../Components/input/InputComp";
import { DELETE_PICTURE, GETUSER, PROFILEPICTURE, UPDATEPROFILE, baseURL, primaryColor } from '../../../../../Components/Variables/Variables';
import Button from '../../../../../Components/Button/Button';
import { AnimatePresence, motion } from 'framer-motion';


const ModifyAccount = () => {
    const [formData, setFormData] = useState({
        firstName: localStorage.getItem("firstName"),
        lastName: localStorage.getItem("lastName"),
        email: localStorage.getItem("email"),
        mobile: localStorage.getItem("mobile")
    });
    const [msgUpdateProfile, setMsgUpdateProfile] = useState(false);

    const fileInputRef = useRef(null);
    const [form, setForm] = useState({
        photo: "",
        description: "",
        portfolio_url: ""
    });
    const [id, setId] = useState();
    useEffect(() => {
        const getUser = async () => {
            try {
                const response = await axios.get(`${baseURL}/${GETUSER}`, {
                    withCredentials: true,
                }).then((res) => setId(res.data.data._id));
            } catch (error) {
                console.error("Error:", error);
            }
        }
        getUser();


    }, []);

    //! I Want To get (About Me,  Portfoltio, Profile Picture)

    function handleChange(e) {
        setForm(form => ({ ...form, [e.target.name]: e.target.value }));
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
                setForm(form => ({ ...form, photo: res.data.image.url }))
            });
        } catch (error) {
            console.error("Error uploading image:", error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${baseURL}/${UPDATEPROFILE}`, form, {
                withCredentials: true,
            }).then((res) => { res.data.message == "User updated successfully" ? setMsgUpdateProfile(true) : "" });
        } catch (error) {
            console.error("Error uploading image:", error);
        }
    };

    const handleDeletePicture = async (id) => {
        try {
            const response = await axios.delete(`${baseURL}/${DELETE_PICTURE}/${id}`, {
                withCredentials: true,
            }).then((res) => {
                console.log(res),
                localStorage.setItem("picture", "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png")
            });
        } catch (error) {
            console.error("Delete Picture Error:", error);
        }
    };






    return (

        <div className="p-8 flex gap-6">
            <div id="head" className="shadow-xl p-6 rounded-2xl flex-1">
                <p className="text-PrimColor text-opacity-60 font-semibold pb-6">Personal Information</p>
                <div className="mx-auto mt-8">
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
                            <Button onClick={() => handleDeletePicture(id)} padding="15px 25px" text="Delete picture" clicked={true} color={primaryColor} border />

                        </div>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className="items-center mt-8 sm:mt-14 text-[#202142]">
                            <div className="flex flex-wrap">
                                <div className="p-2 w-full">
                                    <div className="relative">
                                        <InputComp onchange={(e) => handleChange(e)} value={""} type="text" name="description" id="description" className='w-full text-sm outline-none px-4 pt-3 py-3 mx-auto' placeholder='About Me' required />
                                    </div>
                                </div>
                                <div className="p-2 w-full">
                                    <div className="relative">
                                        <InputComp onchange={(e) => handleChange(e)} value={""} type="text" name="portfolio_url" id="portfolio_url" className='w-full text-sm outline-none px-4 pt-3 py-3 mx-auto' placeholder='Portfolio' required />
                                    </div>
                                </div>
                                <div className="p-2 w-full">
                                    <button type='submit' className={'btn-gradient block w-full'}><span className='text-lg font-extrabold primaryfont block'>Save</span></button>
                                </div>
                                <AnimatePresence> {/* Wrap with AnimatePresence */}
                                    {msgUpdateProfile && (
                                        <motion.div
                                            key="confirm-password-error" // Unique key for AnimatePresence
                                            initial={{ opacity: 0, y: -10 }} // Initial hidden state
                                            animate={{ opacity: 1, y: 0 }}   // Animation to visible
                                            exit={{ opacity: 0, y: -10 }}    // Animation when removed
                                            transition={{ duration: 0.5 }}  // Duration
                                            className="error-text text-xs text-green-400">User updated successfully</motion.div>
                                    )}
                                </AnimatePresence>

                            </div>
                        </div>
                    </form>
                </div>
            </div>

            <div className="flex flex-col gap-4 flex-grow flex-1">
                <div id="head" className="shadow-xl p-6 rounded-2xl">
                    <p className="text-PrimColor text-opacity-60 font-semibold pb-6">Change Password</p>
                    <div className="items-center mt-8 sm:mt-14 text-[#202142]">
                        <div className="flex flex-wrap -m-2">
                            <div className="p-2 w-full sm:w-1/2">
                                <div className="relative">
                                    <InputComp disabled value={formData.firstName} type="text" name="firstName" id="firstName" className='w-full text-sm outline-none px-4 py-3 mx-auto bg-gray-300' placeholder='First Name' required />
                                </div>
                            </div>
                            <div className="p-2 w-full sm:w-1/2">
                                <div className="relative">
                                    <InputComp disabled value={formData.lastName} type="text" name="lastName" id="lastName" className='w-full text-sm outline-none px-4 py-3 mx-auto bg-gray-300' placeholder='Last Name' required />
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <div className="relative">
                                    <InputComp disabled value={formData.email} type="email" name="email" id="email" className='w-full text-sm outline-none px-4 pt-3 py-3 mx-auto bg-gray-300' placeholder='Email' required />
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <div className="relative">
                                    <InputComp disabled value={formData.mobile} type="number" name="mobile" id="mobile" className='w-full text-sm outline-none px-4 pt-3 py-3 mx-auto bg-gray-300' placeholder='Phone Number' required />
                                </div>
                            </div>
                        </div>
                    </div>
                    <form action="" className="flex flex-col gap-5 mt-5">
                        <InputComp type="password" value={""} name="currentPassword" id="currentPassword" className='w-full text-sm outline-none px-4 pt-3 py-3 mx-auto' placeholder='Current Password' required />
                        <InputComp type="password" value={""} name="newPassword" id="newPassword" className='w-full text-sm outline-none px-4 pt-3 py-3 mx-auto' placeholder='New Password' required />
                        <InputComp type="password" value={""} name="confirmPassword" id="confirmPassword" className='w-full text-sm outline-none px-4 pt-3 py-3 mx-auto' placeholder='Confirm New Password' required />
                        <button type="button"
                            className="bg-gradient-to-r from-SecColor to-PrimColor text-white font-bold font-Unbounded text-xl p-4 rounded-2xl"
                        >
                            Change Password
                        </button>
                    </form>
                </div>

            </div>

        </div>
    )
}

export default ModifyAccount