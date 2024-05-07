
import { NavLink, useLocation } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartSimple, faPaste } from "@fortawesome/free-solid-svg-icons"
import "./sidebarbtn.scss"
import React, {useEffect, useState} from "react";

const SidebarBtn = ({ content, subtitles }) => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    
    useEffect(() => {
        // Check if location.pathname includes any subtitle.to
        if (subtitles.some(subtitle => location.pathname.includes(subtitle.to))) {
          setIsOpen(true);
        }
      }, [location.pathname, subtitles]); 

    return (
      <div onClick={() => setIsOpen((prev) => !prev)} className="sideBarBtn">
        <div
            className={`button text-sm font-bold max-lg:text-xs my-2 px-4 py-3 cursor-pointer w-full flex rounded-2xl 
            ${isOpen ? "text-white bg-PrimColor bg-opacity-80" : ""} ${location.pathname.includes(content.to) ? "active" : ""}`}
        >
          <FontAwesomeIcon icon={content.icon} id="icon" className="text-lg mr-2" />
          <h3 id="title">{content.title}</h3>
        </div>
        {isOpen && (
          <ul className={`sublist text-xs rounded-xl ml-10 transition-all duration-400 mb-2 -mt-2 scale-y-0 ease-linear ${isOpen && "delay-500 scale-y-100"} `}>
            {subtitles.map((subtitle, index) => (
              <li key={index}>
                <NavLink to={subtitle.to} className={({ isActive }) => isActive ? 'active-link' : undefined}>
                  <div className={`flex p-3 items-center transition-all rounded-xl duration-300${location.pathname.includes(subtitle.to) ? "subtitle-active" : "bg-red-400"}`} >
                    <FontAwesomeIcon icon={subtitle.icon} id="sub-icon" className="mr-3" />
                    <h4 id="sub-title">{subtitle.title}</h4>
                  </div>
                </NavLink>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };
  
  export default SidebarBtn;