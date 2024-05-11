import React, { useEffect, useState } from "react";
import Card from "../../../../../Components/Dashboard/Card/Card";
import SkillsByProjectsRatio from "../../../../../Components/Dashboard/SkillsByProjectsRatio/SkillsByProjectsRatio";
import MyServices from "../../../../../Components/Dashboard/Services/MyServices/MyServices";
import LatestProjects from "../../../../../Components/Dashboard/LatestProjects/LatestProjects";
import ServicesList from "../../../../../Components/Dashboard/Services/ServicesList/ServicesList";
import axios from "axios";
import { GET_ACCEPTED_PROJECTS, baseURL } from "../../../../../Components/Variables/Variables";
import AcceptedProjects from "../../../../../Components/Dashboard/LatestProjects/LatestProjects";

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
      <div className="bg-white p-4 rounded-xl shadow-xl">
      <p className="text-PrimColor px-2 text-opacity-70 font-Unbounded font-semibold px-1">
          Accepted Projects
        </p>

      <table className="mt-6 w-full">
          <thead className="text-left">
            <tr>
              <th className="p-3 px-5 text-sm text-gray-400">Title</th>
              <th className="p-3 px-5 text-sm text-gray-400">Description</th>
              <th className="p-3 px-5 text-sm text-gray-400">Amount</th>
              <th className="p-3 px-5 text-sm text-gray-400">Status</th>
              <th className="p-3 px-5 text-sm text-gray-400">userID</th>
            </tr>
          </thead>
          <tbody className="w-full">
            {/* Assuming 'data' is your array of objects */}
            {acceptedProjects.map((item, index) => (
              <tr key={index} className="">
                <td className="p-3 px-5 font-semibold">{item.title}</td>
                <td className="p-3 px-5 font-bold font-Unbounded text-sm text-SecColor">
                  ${item.description}
                </td>
                <td className="p-3 px-5 font-semibold">
                  {item.amount}
                </td>
                <td className="p-3 px-5 font-semibold">{item.status}</td>
                <td className="p-3 px-5 font-semibold">{item.user}</td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </div>
  );
};

export default FDashboard;
