import bnadem from "../../assets/404/pexels-tima-miroshnichenko-5725432.png"
import bg from '../../assets/404/pexels-tima-miroshnichenko-5725432 (1).png';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faCopyright } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/404/Group 8.svg"
import { FooterCopyright } from "flowbite-react";


const NotFound = () => {

    return(

        <div 
        className="flex flex-col p-20 items-center h-screen relative">
            <div className="absolute p-6 z-40 top-0 left-0 text-white flex gap-2 justify-center items-center">
                <img src={logo} alt="" className="w-8" />
                <p className="font-Unbounded font-bold text-lg ">WorkWave</p>
            </div>
            <div className="h-screen w-screen bg-black absolute left-0 top-0 z-10 bg-gradient-to-r from-gradientDark bg-opacity-20 "></div>
            <h1 className=" z-10 text-[12rem] max-md:text-[9rem] max-sm:text-[6rem] text-yellow-400 font-bold">404!</h1>
            <img className=" pointer-events-none z-20  absolute bottom-0 left-0 w-full  h-screen object-cover"  src={bnadem} alt="" />
            <img className=" pointer-events-none -z-0  absolute bottom-0 w-full left-0 h-screen object-cover" src={bg} alt="" />

            <Link to='/' className="z-40 flex flex-col items-center gap-12 pt-32 text-center">
                <p className="font-Unbounded text-white z-30 text-2xl drop-shadow-2xl">It looks like we can not find what you are looking for!</p>
                <div className="bg-white px-3 py-2 flex gap-2 items-center justify-center rounded-full hover:-translate-y-2 transition-all duration-1000 ">
                    <FontAwesomeIcon icon={faArrowLeft} className="text-xs text-black font-bold" />
                    <p className="font-semibold text-sm font-Unbounded">Back</p>
                </div>
            </Link>

            <div className="absolute p-6 z-40 bottom-0 left-0 text-white flex gap-1 justify-center items-center">
                <FooterCopyright className="text-white text-lg" />
                <p className="font-Unbounded font-light text-xs">WorkWave 2024</p>
            </div>
        </div>
    )
}

export default NotFound