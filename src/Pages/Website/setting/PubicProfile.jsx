import React, { useEffect, useState } from 'react'
import Cookie from 'cookie-universal';

export default function PubicProfile() {
    const cookie = Cookie();
    const [formData, setFormData] = useState({
        firstName: cookie.get("firstName"),
        lastName: cookie.get("lastName"),
        email: cookie.get("email"),
        mobile: cookie.get("mobile")
    });
    function handleChange(e) {
        setFormData(formData => ({ ...formData, [e.target.name]: e.target.value }));
    }
    console.log(formData);

    return (
        <div className="w-full min-h-screen py-1 md:w-2/3 lg:w-3/4">
            <div className="p-2 md:p-4">
                <div className="w-full px-6 pb-8 mt-8 sm:max-w-xl sm:rounded-lg">
                    <h2 className="pl-6 text-2xl font-bold sm:text-xl">Public Profile</h2>

                    <div className="grid max-w-2xl mx-auto mt-8">
                        <div className="flex flex-col items-center space-y-5 sm:flex-row sm:space-y-0">

                            <img className="object-cover w-40 h-40 p-1 rounded-full ring-2 ring-[#00AEEF]"
                                src="https://images.unsplash.com/photo-1610397095767-84a5b4736cbd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                                alt="Bordered avatar" />

                            <div className="flex flex-col space-y-5 sm:ml-8">
                                <button type="button"
                                    className="py-3.5 px-7 text-base font-medium text-white focus:outline-none bg-[#00AEEF] rounded-lg border border-none hover:bg-[#06a2dc] focus:z-10">
                                    Change picture
                                </button>
                                <button type="button"
                                    className="py-3.5 px-7 text-base font-medium text-[#00AEEF] focus:outline-none bg-white rounded-lg border border-indigo-200 hover:bg-indigo-100 hover:text-[#202142] focus:z-10 focus:ring-4 focus:ring-indigo-200 ">
                                    Delete picture
                                </button>
                            </div>
                        </div>

                        <div className="items-center mt-8 sm:mt-14 text-[#202142]">

                            <div
                                className="flex flex-col items-center w-full mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6">
                                <div className="w-full">
                                    <label htmlFor="firstName"
                                        className="block mb-2 text-sm font-medium text-[#000]">Your
                                        first name</label>
                                    <input onChange={(e) => handleChange(e)} type="text" id="firstName" name="firstName"
                                        className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:focus:ring-[#00AEEF] focus:border-[#00AEEF] outline-[#00AEEF] block w-full p-2.5 "
                                        placeholder="Your first name" value={formData.firstName} required />
                                </div>

                                <div className="w-full">
                                    <label htmlFor="lastName"
                                        className="block mb-2 text-sm font-medium text-[#000]">Your
                                        last name</label>
                                    <input onChange={(e) => handleChange(e)} type="text" id="lastName" name="lastName"
                                        className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:focus:ring-[#00AEEF] focus:border-[#00AEEF] outline-[#00AEEF] block w-full p-2.5 "
                                        placeholder="Your last name" value={formData.lastName} required />
                                </div>

                            </div>

                            <div className="mb-2 sm:mb-6">
                                <label htmlFor="email"
                                    className="block mb-2 text-sm font-medium text-[#000]">Your
                                    email</label>
                                <input onChange={(e) => handleChange(e)} type="email" id="email" name="email"
                                    className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:focus:ring-[#00AEEF] focus:border-[#00AEEF] outline-[#00AEEF] block w-full p-2.5 "
                                    placeholder="your.email@mail.com" value={formData.email} required />
                            </div>

                            <div className="mb-2 sm:mb-6">
                                <label htmlFor="mobile"
                                    className="block mb-2 text-sm font-medium text-[#000]">Phone Number</label>
                                <input onChange={(e) => handleChange(e)} type="text" id="mobile" name="mobile"
                                    className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:focus:ring-[#00AEEF] focus:border-[#00AEEF] outline-[#00AEEF] block w-full p-2.5 "
                                    placeholder="your profession" value={formData.mobile} required />
                            </div>

                            <div className="flex justify-end">
                                <button type="submit"
                                    className="text-white bg-[#00AEEF]  hover:bg-[#06a2dc] focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Save</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
