import React, { useEffect, useState } from "react";
import Card from "../../../../../Components/Dashboard/Card/Card";
import SkillsByProjectsRatio from "../../../../../Components/Dashboard/SkillsByProjectsRatio/SkillsByProjectsRatio";
import axios from "axios";
import { GET_PROJECTS_CLIENT, baseURL } from "../../../../../Components/Variables/Variables";
import AcceptedProjects from "../../../../../Components/Dashboard/LatestProjects/LatestProjects";
import ClientProjectsCount from "../../../../../Components/Dashboard/Projects/ClientProjectsCount/ClientProjectsCount";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTractor, faTrash } from "@fortawesome/free-solid-svg-icons";

const CDashboard = () => {
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
  }, []);


  

  return (
    <>
        <div className="flex gap-4 flex-wrap">
            <Card profit={profit} />
            <Card profit={projects} />
            <ClientProjectsCount ActiveNeeds={1} PendingProjects={3} />
        </div>
        <div className=" bg-white shadow-xl p-4 my-4 rounded-2xl">
            <p className="text-SecColor px-2 text-opacity-70 font-Unbounded font-semibold">My active needs</p>
            <table className="mt-6 w-full">
                <thead className="text-left">
                    <tr>
                    <th className="p-3 px-5 text-sm text-gray-400">Title</th>
                    <th className="p-3 px-5 text-sm text-gray-400">Amount</th>
                    <th className="p-3 px-5 text-sm text-gray-400">Created At</th>
                    <th className="p-3 px-5 text-sm text-gray-400">Description</th>
                    <th className="p-3 px-5 text-sm text-gray-400">Reserved Count</th>
                    <th className="p-3 px-5 text-sm text-gray-400">Status</th>
                    </tr>
                </thead>
                <tbody className="w-full">
                    {/* Assuming 'data' is your array of objects */}
                    {activeNeeds.map((item, index) => (
                    <tr key={index} className="hover:bg-SecColor hover:bg-opacity-35">
                        <td className="p-3 px-5 font-semibold">{item.title}</td>
                        <td className="p-3 px-5 font-bold font-Unbounded text-sm text-SecColor">${item.amount}</td>
                        <td className="p-3 px-5 font-semibold">{new Date(item.createdAt).toLocaleDateString()}</td>
                        <td className="p-3 px-5 font-semibold">{item.description}</td>
                        <td className="p-3 px-5 font-semibold">{item.reservedCount}</td>
                        <td className="p-3 px-5 font-semibold text-yellow-400">{item.status}</td>
                        <td className="">
                            <button>
                                <FontAwesomeIcon icon={faEdit} className="bg-SecColor rounded-lg text-white p-2 mx-1" />
                            </button>
                            <button>
                                <FontAwesomeIcon icon={faTrash} className="bg-red-500 rounded-lg text-white p-2 mx-1" />
                            </button>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>




        </div>
    </>
  );
};

export default CDashboard;
