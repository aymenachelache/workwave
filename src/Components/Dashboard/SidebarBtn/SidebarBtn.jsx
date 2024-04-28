
import { Link, useLocation } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartSimple, faPaste } from "@fortawesome/free-solid-svg-icons"
import "./sidebarbtn.scss"
import React, {useEffect, useState} from "react";

const SidebarBtn = ({ content, ul, subtitles }) => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    
    useEffect(() => {
        // Check if location.pathname includes any subtitle.to
        if (subtitles.some(subtitle => location.pathname.includes(subtitle.to))) {
          setIsOpen(true);
        }
      }, [location.pathname, subtitles]); 

    return (
      <div onClick={() => setIsOpen((prev) => !prev)}>
        <div
            className={`button text-sm font-bold max-lg:text-xs px-4 py-3 cursor-pointer w-full flex rounded-2xl ${
            isOpen ? "text-white bg-PrimColor bg-opacity-80" : ""} ${location.pathname.includes(content.to) ? "active" : ""}`}
        >
          <FontAwesomeIcon icon={content.icon} id="icon" className="text-lg mr-2" />
          <h3 id="title">{content.title}</h3>
        </div>
        {isOpen && ul && (
          <ul className="sublist text-xs rounded-xl ml-10 transition-all duration-300">
            {subtitles.map((subtitle, index) => (
              <li key={index}>
                <Link to={subtitle.to}>
                  <div className={`flex p-3 items-center transition-all duration-300${location.pathname.includes(subtitle.to) ? "subtitle-active" : "bg-red-400"}`} >
                    <FontAwesomeIcon icon={subtitle.icon} id="sub-icon" className="mr-3" />
                    <h4 id="sub-title">{subtitle.title}</h4>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };
  
  export default SidebarBtn;