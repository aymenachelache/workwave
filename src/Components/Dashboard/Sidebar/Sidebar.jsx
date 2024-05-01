import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import './Sidebar.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faChartSimple, faClock, faClipboardList, faGear, faHourglass2, faPaste, faSliders, faWallet, faInbox, faRightFromBracket, faArrowRightArrowLeft, faUser } from "@fortawesome/free-solid-svg-icons";
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
        <div className="sidebar pb-32 px-8 text-PrimColor flex flex-col justify-between h-screen">

            <ul>
                <FontAwesomeIcon icon={faBars} className="hidden max-md:block pt-80" />
                <p className="text-gray-300 font-semibold px-4 py-1 ">Main</p>


                <li>
                    <SimpleSidebarBtn content={ { to:"dashboard" ,icon: faChartSimple, title : "Dashboard"} } />
                </li>


                <li>
                    <SidebarBtn 
                        content={{ title: "My Projects", icon: faPaste, to: "myprojects" }} 
                        subtitles={[ {title : "Working On", icon: faHourglass2, to : "myprojects/workingon" }, {title: "History", icon: faClock, to: "myprojects/history"} ]} 
                    />
                </li>

                <li>
                    <SimpleSidebarBtn content={ {to: "services", icon: faClipboardList, title : "My Services"} } />
                </li>


                <li>
                    <SidebarBtn 
                        content={{ title: "My Finances", icon: faWallet }} 
                        subtitles={[ 
                            {title : "Payment Methods", icon: faHourglass2, to : "finances/maymethods" },
                            {title : "Withdraw", icon: faClock, to: "finances/withdraw"},
                            {title : "Movements", icon: faArrowRightArrowLeft, to: "finances/movs"} ]} 
                    />   
                </li>

                <li>
                    <SidebarBtn 
                            content={{ title: "Account Settings", icon: faGear }} 
                            subtitles={[ 
                                {title : "Modify Profile", icon: faUser, to : "settings/modifyprofile" },
                                {title : "Modify Account", icon: faSliders, to: "settings/modifyaccount"} ]} 
                        />   
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