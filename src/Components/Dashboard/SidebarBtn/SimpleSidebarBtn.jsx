import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink, useLocation } from "react-router-dom";
import "./sidebarbtn.scss"

const SimpleSidebarBtn = ({ content }) => {
  const location = useLocation();
  const currUrl = location.pathname == "/work/personalspace" ? "/work/personalspace":`/work/personalspace/${content.to}`;
  return (
    <NavLink
    style={({ isActive }) => isActive ? {backgroundColor : 'green'}:{background:"white"} }
    to={content.to}>
      <div className={`button text-sm max-lg:text-xs flex font-bold px-4 py-3 w-full rounded-2xl`}>
        <FontAwesomeIcon icon={content.icon} id="icon" className="text-lg mr-2" />
        <h3 id="title">{content.title}</h3>
      </div>
    </NavLink>
  );
};

export default SimpleSidebarBtn;
