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
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </section >
        </>
    )
}
