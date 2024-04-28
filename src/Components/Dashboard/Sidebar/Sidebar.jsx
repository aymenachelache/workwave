import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import './Sidebar.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faChartSimple, faClock, faClipboardList, faGear, faHourglass2, faPaste, faSliders, faWallet, faInbox, faRightFromBracket, faArrowRightArrowLeft } from "@fortawesome/free-solid-svg-icons";
import icon1 from "../../../assets/freelancer/1.svg";
import Login from "../../../Pages/Website/login/Login";
import SidebarBtn from "../SidebarBtn/SidebarBtn";
import SimpleSidebarBtn from "../SidebarBtn/SimpleSidebarBtn";

const Sidebar = () => {
    const location = useLocation();
    const [isMyProjectsOpen, setIsMyProjectsOpen] = useState(false);
    const [isMyFinancesOpen, setIsMyFinancesOpen] = useState(false);
    const [isMySettingsOpen, setIsMySettingsOpen] = useState(false);

    const handleToggleSidebar = () => {
        setIsSidebarOpen((prev) => !prev);
    };


    return (
        <div className="p-20 px-10 pl-20 max-lg:pl-20 max-md:pl-10 text-PrimColor flex flex-col justify-between h-screen">

            <ul>
                <FontAwesomeIcon icon={faBars} className="hidden max-md:block pt-80" />
                <p className="text-gray-300 font-semibold px-4 py-1 ">Main</p>


                <li>
                    <SimpleSidebarBtn content={ { to:"dashboard" ,icon: faChartSimple, title : "Dashboard"} } />
                </li>


                <li>
                    <SidebarBtn 
                        content={{ title: "My Projects", icon: faPaste, to: "myprojects" }} 
                        ul={true}
                        subtitles={[ {title : "Working On", icon: faHourglass2, to : "myprojects/workingon" }, {title: "History", icon: faClock, to: "myprojects/history"} ]} 
                    />
                </li>

                <li>
                    <SimpleSidebarBtn content={ {to: "services", icon: faClipboardList, title : "My Services"} } />
                </li>


                <li>
                    <SidebarBtn 
                        content={{ title: "My Finances", icon: faWallet }} 
                        ul={true}
                        subtitles={[ 
                            {title : "Payment Methods", icon: faHourglass2, to : "finances/maymethods" },
                            {title : "Withdraw", icon: faClock, to: "finances/withdraw"},
                            {title : "Movements", icon: faArrowRightArrowLeft, to: "finances/movs"} ]} 
                    />   
                </li>
                <li>
                    <div onClick={() => setIsMySettingsOpen(prev => !prev)}>
                        <div className={`button text-sm font-bold max-lg:text-xs p-3 cursor-pointer whitespace-nowrap flex px-4 py-3 w-full rounded-2xl ${isMySettingsOpen ? "text-white bg-PrimColor bg-opacity-80" : ""}`}>
                            <FontAwesomeIcon icon={faGear} className="text-lg mr-2 hover:text-white" />
                            <h3 className="">Account Settings</h3>
                        </div>
                        {isMySettingsOpen && (
                            <ul className="sublist text-xs rounded-xl ml-10">
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
                    </div>
                </li>
            </ul>
            <ul className="flex flex-col gap-2">
                <p className="text-gray-300 font-semibold px-4 py-1 ">Insights</p>

                <li>
                    <Link to='inbox' className={location.pathname === '/services' ? 'active' : ''}>
                        <div className="transition-all duration-200 border text-sm max-lg:text-xs flex font-bold hover:bg-SecColor hover:bg-opacity-15 text-SecColor px-4 py-3 w-full rounded-2xl">
                            <FontAwesomeIcon icon={faInbox} className="text-lg mr-2" />
                            <h3 className="">Inbox</h3>
                        </div>
                    </Link>
                </li>

                <li>
                    <Link to='inbox' className={location.pathname === '/services' ? 'active' : ''}>
                        <div className="transition-all duration-200 border border-red-200 text-sm max-lg:text-xs flex font-bold text-red-500 hover:bg-red-100 px-4 py-3 w-full rounded-2xl">
                            <FontAwesomeIcon icon={faRightFromBracket} className="text-lg mr-2" />
                            <h3 className="">Log Out</h3>
                        </div>
                    </Link>
                </li>

            </ul>

        </div>
    );
};

export default Sidebar;