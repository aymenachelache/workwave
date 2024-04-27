import React from 'react'
import TextGradient from '../../../Components/textGradient/TextGradient'
import { Link } from 'react-router-dom'
import Header from '../../../Components/header/Header'
import InputComp from '../../../Components/input/InputComp'

export default function ContactUs() {
    return (
        <>
            <Header />
            <section className="text-gray-600 body-font relative">
                <div className="container px-5 pt-24 pb-16 mx-auto">
                    <div className="flex flex-col text-center w-full mb-12">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900"></h1>
                        <TextGradient size='35px' weight='800' text='Contact Us' />
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Please get in touch</p>
                    </div>
                    <form>
                        <div className="lg:w-1/2 md:w-2/3 mx-auto">
                            <div className="flex flex-wrap -m-2">
                                <div className="p-2 w-1/2">
                                    <div className="relative">
                                        <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                                        <InputComp type="text" name="name" id="name" className='w-full text-sm outline-none px-4 py-3 mx-auto' placeholder='Name' required />

                                    </div>
                                </div>
                                <div className="p-2 w-1/2">
                                    <div className="relative">
                                        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                                        <InputComp type="email" name="email" id="email" className='w-full text-sm outline-none px-4 py-3 mx-auto' placeholder='Email' required />
                                    </div>
                                </div>
                                <div className="p-2 w-full">
                                    <div className="relative">
                                        <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                                        <InputComp type="message" name="email" id="email" className='w-full text-sm outline-none px-4 pt-3 pb-16 mx-auto' placeholder='Message' required />
                                    </div>
                                </div>
                                <div className="p-2 w-full">
                                    <button type='submit' className={'btn-gradient block w-full'}><span className='text-lg font-extrabold primaryfont block'>Send</span></button>
                                </div>
                                <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                                    <Link className="text-indigo-500" to="/">Go to Home</Link>
                                    <p className="leading-normal my-5">Amizour.
                                        <br />Béjaïa, Algeria
                                    </p>
                                    <span className="inline-flex">
                                        <a href='#' target='_blank' className="text-gray-500">
                                            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                            </svg>
                                        </a>
                                        <a href='#' target='_blank' className="ml-4 text-gray-500">
                                            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                            </svg>
                                        </a>
                                        <a href='#' target='_blank' className="ml-4 text-gray-500">
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                            </svg>
                                        </a>
                                        <a href='#' target='_blank' className="ml-4 text-gray-500">
                                            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                            </svg>
                                        </a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </section >
        </>
    )
}
