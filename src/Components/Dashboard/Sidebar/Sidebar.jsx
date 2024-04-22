import React, { useState } from "react"
import { Link } from "react-router-dom"
import './Sidebar.scss'
import icon1 from "../../../assets/freelancer/1.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHourglass2, faPaste, faUser } from "@fortawesome/free-regular-svg-icons"
import { faArrowRightArrowLeft, faBars, faClipboardList, faClock, faGear, faSliders, faWallet } from "@fortawesome/free-solid-svg-icons"

const Sidebar = () => {
    const [isMyProjectsOpen, setIsMyProjectsOpen] = useState(false)
    const [isMyFinancesOpen, setIsMyFinancesOpen] = useState(false)
    const [isMySettingsOpen, setIsMySettingsOpen] = useState(false)
    const [activeButton, setActiveButton] = useState(null);
    const handleClick = (button) => {
        setActiveButton(button);
      };

  
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
        
    const handleToggleSidebar = () => {
        setIsSidebarOpen((prev) => !prev);
    };
    
    return (
        <div className="p-20 max-md:hidden lg:w-[32%] xl:w-[30%] text-PrimColor">
            <FontAwesomeIcon icon={faBars} className="hidden max-md:block mt-80" />
            <p className="text-gray-300 font-semibold px-4 py-1 ">Main</p>
            <ul>
                <Link to='Dashboard'
                onClick={() => handleClick('button1')}
                className={activeButton === 'button1' ? 'active' : ''}
                >
                <div className="button text-sm font-bold max-lg:text-xs flex px-4 py-3 w-full rounded-2xl ">
                    <img src={icon1} alt="" className="mr-3 firstIcon" />
                    <h3 className="">Dashboard</h3>
                </div>
                </Link>

                <Link onClick={() => setIsMyProjectsOpen(pv => !pv)}>
                    <div className={`button text-sm font-bold max-lg:text-xs px-4 py-3 w-full flex rounded-2xl ${isMyProjectsOpen ? "text-white bg-PrimColor none" : ""}`}>
                        <FontAwesomeIcon icon={faPaste} className="text-lg mr-2" />
                        <h3 className="">My Projects</h3>
                    </div>
                    {isMyProjectsOpen && (
                        <ul className="sublist text-xs transition-all duration-300">
                            <Link to='workingOn'>
                                <div className="flex p-3 items-center transition-all duration-300">
                                    <FontAwesomeIcon icon={faHourglass2} className="mr-3" />
                                    <h4 className="">Working On</h4>
                                </div>
                            </Link>
                            <Link to='History'>
                                <div className="flex p-3 items-center transition-all duration-300">
                                    <FontAwesomeIcon icon={faClock} className="mr-3" />
                                    <h4 className="">History</h4>
                                </div>
                            </Link>
                        </ul>
                    )}
                </Link>

                <Link to='services'
                onClick={() => handleClick('button3')}
                className={activeButton === 'button3' ? 'active' : ''}
                >
                    <div className="button text-sm max-lg:text-xs flex font-bold px-4 py-3 w-full rounded-2xl">
                        <FontAwesomeIcon icon={faClipboardList} className="text-lg mr-2 hover:text-white" />
                        <h3 className="">My Services</h3>
                    </div>
                </Link>

                <Link
                className="" 
                onClick={() => setIsMyFinancesOpen(pv => !pv)}>
                    <div className={`button text-sm max-lg:text-xs font-bold flex px-4 py-3 w-full rounded-2xl ${isMyFinancesOpen ? "text-white bg-PrimColor none" : ""}`}>
                        <FontAwesomeIcon icon={faWallet} className="text-lg mr-2 hover:text-white" />
                        <h3 className="">My Finances</h3>
                    </div>
                    {isMyFinancesOpen && (
                        <ul className="sublist text-xs">
                            <Link to='paymethods'>
                                <div className="flex p-3 items-center">
                                    <img src="" alt="" />
                                    <h4>Payment Methods</h4>
                                </div>
                            </Link>
                            <Link to='withdraw'>
                                <div className="flex p-3 items-center">
                                    <img src="" alt="" />
                                    <h4>Withdraw</h4>
                                </div>
                            </Link>
                            <Link to='movs'>
                                <div className="flex p-3 items-center">
                                    <FontAwesomeIcon icon={faArrowRightArrowLeft} className="mr-3 border-2 px-[2%] py-1 border-PrimColor rounded-full" />
                                    <h4>Movements</h4>
                                </div>
                            </Link>
                        </ul>
                    )}
                </Link>
                <Link
                onClick={() => setIsMySettingsOpen(pv => !pv)}>
                    <div className={`button text-sm font-bold max-lg:text-xs p-3 flex px-4 py-3 w-full rounded-2xl ${isMySettingsOpen ? "text-white bg-PrimColor none" : ""}`}>
                        <FontAwesomeIcon icon={faGear} className="text-lg mr-2 hover:text-white" />
                        <h3 className="">Account Settings</h3>

                    </div>
                    {isMySettingsOpen && (
                        <ul className="sublist text-sm">
                            <Link to='modifyprofile'>
                                <div className="flex p-3 items-center">
                                    <FontAwesomeIcon icon={faUser} className="mr-3" />
                                    <h4>Modify Profile</h4>
                                </div>
                            </Link>
                            <Link to='modifyacc'>
                                <div className="flex p-3 items-center">
                                    <FontAwesomeIcon icon={faSliders} className="mr-3" />
                                    <h4>Modify Account</h4>
                                </div>
                            </Link>
                        </ul>
                    )}
                </Link>
            </ul>
        </div>
    )
}

export default Sidebar