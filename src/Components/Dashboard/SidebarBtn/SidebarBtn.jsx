
import { NavLink, useLocation } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartSimple, faPaste } from "@fortawesome/free-solid-svg-icons"
import "./sidebarbtn.scss"
import React, {useEffect, useState} from "react";

const SidebarBtn = ({ content, subtitles, isClient=false }) => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    
    const backgroundWhileOpen = isClient ? "bg-SecColor" : "bg-PrimColor";

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
            ${isOpen ? backgroundWhileOpen + " text-white bg-opacity-80" : ""} ${location.pathname.includes(content.to) ? "active" : ""}`}
        >
          <FontAwesomeIcon icon={content.icon} id="icon" className="text-lg mr-2 max-md:m-0" />
          <h3 id="title" className="max-md:hidden">{content.title}</h3>
        </div>
        {isOpen && (
          <ul className={`sublist text-xs rounded-xl lg:ml-10 mb-2 ${isClient ? "Client" : "Freelancer"}`}>
            {subtitles.map((subtitle, index) => (
              <li key={index}>
                <NavLink to={subtitle.to} className={({ isActive }) => isActive ? 'active-link' : undefined}>
                  <div className={`flex p-3 items-center transition-all rounded-xl duration-300 ${isClient ? "Client" : "Freelancer"}`} >
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