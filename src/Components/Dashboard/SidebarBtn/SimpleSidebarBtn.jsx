import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink, useLocation } from "react-router-dom";
import "./sidebarbtn.scss"

const SimpleSidebarBtn = ({ content, isClient }) => {
  const location = useLocation();
  return (
    <NavLink
      className={({ isActive }) => isActive ? "active-link" : ""}
      to={content.to}>
      <div className={`button text-sm max-lg:text-xs flex font-bold px-4 py-3 w-full rounded-2xl ${isClient ? "Client" : "Freelancer"}`}>
        <FontAwesomeIcon icon={content.icon} id="icon" className="text-lg mr-2 max-md:m-0" />
        <h3 id="title" className="max-md:hidden">{content.title}</h3>
      </div>
    </NavLink>
  );
};

export default SimpleSidebarBtn;
