import React from 'react';
import './Work.scss';
import logo from '../../../../assets/Logo.png'
import { Link, Outlet } from 'react-router-dom';
import TextGradient from '../../../../Components/textGradient/TextGradient';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Logo from '../../../../Components/logo/Logo';
import InputComp from '../../../../Components/input/InputComp';
import BackButton from '../../../../Components/backButton/BackButton';


export default function Work() {
    return (
        <>
            <div className="create-work w-full h-screen relative">
                <div className='logo-white absolute z-10 mt-5 ml-5 hidden md:block'><img src={require("../../../../assets/register/work/Logo.svg")} className='w-24 xl:w-36' alt="" /></div>
                <div className="box absolute flex flex-col justify-start gap-10 bg-white h-screen py-5 px-5 global-radius">
                    <div className="top flex justify-between items-center">
                        <BackButton />
                    </div>
                    <div className="contain mx-auto sm:m-0 text-center">
                        <Outlet />
                    </div>
                </div>
                <div className='copy absolute ml-5 mb-5 z-10 bottom-0'>
                    <p className='text-xs text-[#CDCCC9]'>&copy; WorkWave 2024</p>
                </div>
            </div >

        </>
    )
}
