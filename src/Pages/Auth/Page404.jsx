import React from 'react';
import { Link } from 'react-router-dom';
import TextGradient from '../../Components/textGradient/TextGradient';

export default function Page404() {
    return (
        <div className="bg-gradient-to-r from-[#37b77784] to-[#00afef9f]">
            <div className="w-11/12 md:w-9/12 h-screen m-auto py-16 min-h-screen flex items-center justify-center">
                <div className="bg-white shadow overflow-hidden sm:rounded-lg pb-8">
                    <div className="border-t border-gray-200 text-center pt-8">
                        <TextGradient size='6rem' weight='800' text='404' />
                        <h1 className="text-2xl md:text-4xl font-medium py-8">oops! Page not found</h1>
                        <p className="text-sm md:text-xl pb-8 px-12 font-medium">Oops! The page you are looking for does not exist. It might have been moved or deleted.</p>
                        <button className="bg-gradient-to-r from-[#37B778] to-[#37b77797] hover:from-[#00AEEF] hover:to-[#00afef76] text-white font-semibold px-6 py-3 rounded-md mr-6 transition-all ease-in duration-1000">
                            <Link to="/">Go to HOME</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
