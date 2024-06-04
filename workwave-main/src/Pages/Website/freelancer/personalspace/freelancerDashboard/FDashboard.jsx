import React, { useEffect, useState } from "react";
import Card from "../../../../../Components/Dashboard/Card/Card";
import SkillsByProjectsRatio from "../../../../../Components/Dashboard/SkillsByProjectsRatio/SkillsByProjectsRatio";
import MyServices from "../../../../../Components/Dashboard/Services/MyServices/MyServices";
import LatestProjects from "../../../../../Components/Dashboard/LatestProjects/LatestProjects";
import ServicesList from "../../../../../Components/Dashboard/Services/ServicesList/ServicesList";
import axios from "axios";
import AcceptedProjects from "../../../../../Components/Dashboard/LatestProjects/LatestProjects";
import CreateConversation from "../../../../../Components/Chat/CreateConversation/CreateConversation";
import { GET_ACCEPTED_PROJECTS, baseURL } from "../../../../../Components/Variables/Variables";

const FDashboard = () => {

  const [acceptedProjects, setAcceptedProjects] = useState([])

  const profit = {
    amount: "$1700",
    gain: "+25%",
  };
  const projects = {
    amount: "214",
    gain: "-14%",
  };

  useEffect(() => {
    const getAcceptedProjects = async () => {
      try {
        const response = await axios
          .get(`${baseURL}/${GET_ACCEPTED_PROJECTS}`, {
            withCredentials: true,
          })
          .then((res) => {
            console.log(res);
            setAcceptedProjects(res.data.projects)
          });
      } catch (error) {
        console.error("Error:", error);
      }
    };
    getAcceptedProjects();
    
  }, []);



  return (
    <AcceptedProjects />      
  );
};

export default FDashboard;
