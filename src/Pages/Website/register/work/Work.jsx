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
                <div className="box absolute flex flex-col justify-between bg-white h-screen py-5 px-5 global-radius">
                    <div className="top flex justify-between items-center">
                        <BackButton />
                    </div>
                    <div className="contain mx-auto sm:m-0 text-center">
                        <Outlet />
                    </div>
                    <div className="copyright">
                        <p className='text-sm text-[#CDCCC9]'>&copy; WorkWave 2024</p>
                    </div>
                </div>
            </div >

        </>
    )
}
