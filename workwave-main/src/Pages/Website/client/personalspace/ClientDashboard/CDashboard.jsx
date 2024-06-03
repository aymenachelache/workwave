import React, { useEffect, useState } from "react";
import Card from "../../../../../Components/Dashboard/Card/Card";
import SkillsByProjectsRatio from "../../../../../Components/Dashboard/SkillsByProjectsRatio/SkillsByProjectsRatio";
import axios from "axios";
import { GET_ACCEPTED_SERVICES, GET_PROJECTS_CLIENT, GET_REFUSED_SERVICES, baseURL } from "../../../../../Components/Variables/Variables";
import AcceptedProjects from "../../../../../Components/Dashboard/LatestProjects/LatestProjects";
import ClientProjectsCount from "../../../../../Components/Dashboard/Projects/ClientProjectsCount/ClientProjectsCount";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTractor, faTrash } from "@fortawesome/free-solid-svg-icons";
import CreateConversation from "../../../../../Components/Chat/CreateConversation/CreateConversation";

const CDashboard = () => {
  const [servicesAccepted, setServicesAccepted] = useState([]);
  const [servicesRefused, setServicesRefused] = useState([]);

  const profit = {
    amount: "$1700",
    gain: "+25%",
  };
  const projects = {
    amount: "214",
    gain: "-14%",
  };
  const [activeNeeds, setActiveNeeds] = useState([]);

  useEffect(() => {
    const getMyActiveNeeds = async () => {
      try {
        const response = await axios
          .get(`${baseURL}/${GET_PROJECTS_CLIENT}`, {
            withCredentials: true,
          })
          .then((res) => {
            console.log(res);
            setActiveNeeds(res.data.data)
          });
      } catch (error) {
        console.error("Error:", error);
      }
    };
    getMyActiveNeeds();

      const getProjectsAccepted = async () => {
        try {
            const response = await axios.get(`${baseURL}/${GET_ACCEPTED_SERVICES}`, {
                withCredentials: true,
            }).then((res) => console.log(res.data));
        } catch (error) {
            console.error("Error:", error);
        }
    }
    getProjectsAccepted();
    const getProjectsRefused = async () => {
        try {
            const response = await axios.get(`${baseURL}/${GET_REFUSED_SERVICES}`, {
                withCredentials: true,
            }).then((res) => setServicesRefused(res.data.projects));
        } catch (error) {
            console.error("Error:", error);
        }
    }
    getProjectsRefused();
  }, []);


  

  return (
    <>
        <div className="flex gap-4 flex-wrap">
            <Card profit={profit} />
            <Card profit={projects} />
            <ClientProjectsCount ActiveNeeds={1} PendingProjects={3} />
        </div>
       
        <div className="px-6 mt-10 bg-SecColor bg-opacity-25 py-3 rounded-xl">
                <div className="font-semibold font-Unbounded text-sm py-1">Accepted Services :</div>
                <table className="w-full text-center">
                    <tbody>
                        {servicesAccepted?.length > 0 ? servicesAccepted?.map((item, index) =>
                            <tr key={index}>
                                <td>{item.title}</td>
                                <td>{item.status}</td>
                                <td>{item.isPaid ? "Paid" : "Not Paid"}</td>
                            </tr>) : (
                            <p className="text-xl font-Unbounded font-semibold">There is no accepted projects yet</p>
                        )}
                    </tbody>
                </table>
            </div>
            <div className="px-6 mt-2 bg-SecColor bg-opacity-25 py-3 rounded-xl">
                <div className="font-semibold font-Unbounded text-sm py-1">Refused Services :</div>
                <table className="w-full text-center">
                    <tbody>
                        {servicesRefused ?.length > 0 ? servicesRefused ?.map((item, index) =>
                            <tr key={index}>
                                <td>{item.title}</td>
                                <td>{item.status}</td>
                                <td>{item.isPaid ? "Paid" : "Not Paid"}</td>
                            </tr>) : (
                            <p className="text-xl font-Unbounded font-semibold">There is no refused projects</p>
                        )}
                    </tbody>
                </table>
            </div>
    </>
  );
};

export default CDashboard;
