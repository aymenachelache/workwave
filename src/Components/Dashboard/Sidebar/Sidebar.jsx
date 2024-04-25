import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import './Sidebar.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faChartSimple, faClock, faClipboardList, faGear, faHourglass2, faPaste, faSliders, faWallet } from "@fortawesome/free-solid-svg-icons";
import icon1 from "../../../assets/freelancer/1.svg";

const Sidebar = () => {
    const location = useLocation();
    const [isMyProjectsOpen, setIsMyProjectsOpen] = useState(false);
    const [isMyFinancesOpen, setIsMyFinancesOpen] = useState(false);
    const [isMySettingsOpen, setIsMySettingsOpen] = useState(false);

    const handleToggleSidebar = () => {
        setIsSidebarOpen((prev) => !prev);
    };

    return (
        <div className="p-20 max-md:hidden lg:w-[32%] xl:w-[30%] text-PrimColor">
            <FontAwesomeIcon icon={faBars} className="hidden max-md:block mt-80" />
            <p className="text-gray-300 font-semibold px-4 py-1 ">Main</p>
            <ul>
                <li>
                    <Link to='/Dashboard' className={location.pathname === '/Dashboard' ? 'active' : ''}>
                        <div className="button text-sm font-bold max-lg:text-xs flex px-4 py-3 w-full rounded-2xl">
                            <FontAwesomeIcon icon={faChartSimple} className="text-lg mr-2" />
                            <h3 className="">Dashboard</h3>
                        </div>
                    </Link>
                </li>
                <li>
                    <div onClick={() => setIsMyProjectsOpen(prev => !prev)}>
                        <div className={`button text-sm font-bold max-lg:text-xs px-4 py-3 w-full flex rounded-2xl ${isMyProjectsOpen ? "text-white bg-PrimColor" : ""}`}>
                            <FontAwesomeIcon icon={faPaste} className="text-lg mr-2" />
                            <h3 className="">My Projects</h3>
                        </div>
                        {isMyProjectsOpen && (
                            <ul className="sublist text-xs rounded-xl ml-10 transition-all duration-300">
                                <Link to='/myprojects/workingon'>
                                    <div className="flex p-3 items-center transition-all duration-300">
                                        <FontAwesomeIcon icon={faHourglass2} className="mr-3" />
                                        <h4 className="">Working On</h4>
                                    </div>
                                </Link>
                                <Link to='/myprojects/history'>
                                    <div className="flex p-3 items-center transition-all duration-300">
                                        <FontAwesomeIcon icon={faClock} className="mr-3" />
                                        <h4 className="">History</h4>
                                    </div>
                                </Link>
                            </ul>
                        )}
                    </div>
                </li>
                <li>
                    <Link to='/services' className={location.pathname === '/services' ? 'active' : ''}>
                        <div className="button text-sm max-lg:text-xs flex font-bold px-4 py-3 w-full rounded-2xl">
                            <FontAwesomeIcon icon={faClipboardList} className="text-lg mr-2 hover:text-white" />
                            <h3 className="">My Services</h3>
                        </div>
                    </Link>
                </li>
                <li>
                    <div onClick={() => setIsMyFinancesOpen(prev => !prev)}>
                        <div className={`button text-sm max-lg:text-xs font-bold flex px-4 py-3 w-full rounded-2xl ${isMyFinancesOpen ? "text-white bg-PrimColor" : ""}`}>
                            <FontAwesomeIcon icon={faWallet} className="text-lg mr-2 hover:text-white" />
                            <h3 className="">My Finances</h3>
                        </div>
                        {isMyFinancesOpen && (
                            <ul className="sublist text-xs rounded-xl ml-10">
                                <Link to='/paymethods'>
                                    <div className="flex p-3 items-center">
                                        <img src="" alt="" />
                                        <h4>Payment Methods</h4>
                                    </div>
                                </Link>
                                <Link to='/withdraw'>
                                    <div className="flex p-3 items-center">
                                        <img src="" alt="" />
                                        <h4>Withdraw</h4>
                                    </div>
                                </Link>
                                <Link to='/movs'>
                                    <div className="flex p-3 items-center">
                                        <FontAwesomeIcon icon={faArrowRightArrowLeft} className="mr-3 border-2 px-[2%] py-1 border-PrimColor rounded-full" />
                                        <h4>Movements</h4>
                                    </div>
                                </Link>
                            </ul>
                        )}
                    </div>
                </li>
                <li>
                    <div onClick={() => setIsMySettingsOpen(prev => !prev)}>
                        <div className={`button text-sm font-bold max-lg:text-xs p-3 flex px-4 py-3 w-full rounded-2xl ${isMySettingsOpen ? "text-white bg-PrimColor" : ""}`}>
                            <FontAwesomeIcon icon={faGear} className="text-lg mr-2 hover:text-white" />
                            <h3 className="">Account Settings</h3>
                        </div>
                        {isMySettingsOpen && (
                            <ul className="sublist text-xs rounded-xl ml-10">
                                <Link to='/modifyprofile'>
                                    <div className="flex p-3 items-center">
                                        <FontAwesomeIcon icon={faUser} className="mr-3" />
                                        <h4>Modify Profile</h4>
                                    </div>
                                </Link>
                                <Link to='/modifyacc'>
                                    <div className="flex p-3 items-center">
                                        <FontAwesomeIcon icon={faSliders} className="mr-3" />
                                        <h4>Modify Account</h4>
                                    </div>
                                </Link>
                            </ul>
                        )}
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;