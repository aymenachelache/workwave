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
    <div className="pb-10 flex flex-col gap-8 max-md:px-10 max-sm:px-1">
      <div className="flex flex-col lg:flex-row gap-8 max-lg:gap-0">
        <div className="flex flex-col gap-8 w-full lg:w-4/6">
          <div className="flex flex-col lg:flex-row gap-6">
            <Card profit={profit} />
            <Card profit={projects} />
          </div>
          <AcceptedProjects />
        </div>
        <SkillsByProjectsRatio />
      </div>
    </div>
      
  );
};

export default FDashboard;
