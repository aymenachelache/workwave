import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import './Sidebar.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faChartSimple, faClock, faClipboardList, faGear, faHourglass2, faPaste, faSliders, faWallet, faInbox, faRightFromBracket, faArrowRightArrowLeft, faUser } from "@fortawesome/free-solid-svg-icons";
import SidebarBtn from "../SidebarBtn/SidebarBtn";
import SimpleSidebarBtn from "../SidebarBtn/SimpleSidebarBtn";

const Sidebar = ({isClient}) => {
    const location = useLocation();
    const handleToggleSidebar = () => {
        setIsSidebarOpen((prev) => !prev);
    };
    return (
        <div className={`sidebar pb-28 h-screen max-md:h-min max-md:pb-0 px-8 text-PrimColor flex flex-col justify-between max-sm:px-0 flex-wrap min-lg:h-screen ${isClient && "text-SecColor"}`}>

            <ul className="max-md:flex gap-2">
                <p className="text-gray-300 font-semibold px-4 py-1 max-md:hidden">Main</p>


                <li>
                    <SimpleSidebarBtn isClient={isClient} content={ { to:"dashboard" ,icon: faChartSimple, title : "Dashboard"} } />
                </li>


                <li>
                    <SidebarBtn
                        isClient={isClient}
                        content={{ title: "My Projects", icon: faPaste, to: "myprojects" }} 
                        subtitles={[ {title : "Working On", icon: faHourglass2, to : "myprojects/workingon" }, {title: "History", icon: faClock, to: "myprojects/history"} ]} 
                    />
                </li>

                <li>
                    <SimpleSidebarBtn isClient={isClient} content={ {to: isClient ? "needs" : "services", icon: faClipboardList, title : isClient ? "My Needs" : "My Services"} } />
                </li>


                <li>
                    <SidebarBtn
                        isClient={isClient}
                        content={{ title: "My Finances", icon: faWallet }} 
                        subtitles={[ 
                            {title : "Payment Methods", icon: faHourglass2, to : "finances/maymethods" },
                            {title : "Withdraw", icon: faClock, to: "finances/withdraw"},
                            {title : "Movements", icon: faArrowRightArrowLeft, to: "finances/movs"} ]} 
                    />   
                </li>

                <li>
                    <SidebarBtn
                            isClient={isClient }
                            content={{ title: "Account Settings", icon: faGear }} 
                            subtitles={[ 
                                {title : "Modify Profile", icon: faUser, to : "settings/modifyprofile" },
                                {title : "Modify Account", icon: faSliders, to: "settings/modifyaccount"} ]} 
                        />   
                </li>
            </ul>

            <ul className="flex flex-col gap-2 max-md:hidden">
                <p className="text-gray-300 font-semibold px-4 py-1 max-md:hidden">Insights</p>

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