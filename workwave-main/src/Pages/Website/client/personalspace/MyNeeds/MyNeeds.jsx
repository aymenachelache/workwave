import Card from "../../../../../Components/Dashboard/Card/Card";
import ServicesCountSold from "../../../../../Components/Dashboard/Services/ServicesCountSold/ServicesCountSold";
import { useState, useEffect } from "react";
import axios from "axios";
import {
  baseURL,
  DELETE_NEED,
  GET_PROJECTS_CLIENT,
} from "../../../../../Components/Variables/Variables";
import ActiveNeeds from "./ActiveNeeds";

const MyNeeds = () => {
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
            res.data.data.length > 0 ? setActiveNeeds(res.data.data) : console.log(res);
          });
      } catch (error) {
        console.error(error);
      }
    };
    getMyActiveNeeds();
  }, []);


  return (
    <div className="">
      <div className="bg-white shadow-xl p-4 my-4 rounded-2xl">
        <p className="text-SecColor text-opacity-70 font-Unbounded font-semibold px-1">
          My active needs
        </p>
        {activeNeeds.length === 0 ? (
          <div className="text-center font-Unbounded">You have no needs yet</div>
        ) : (
          <table className="mt-6 w-full">
            <thead className="text-left">
              <tr>
                <th className="p-3 px-5 text-sm text-gray-400">Title</th>
                <th className="p-3 px-5 text-sm text-gray-400">Description</th>
                <th className="p-3 px-5 text-sm text-gray-400">Amount</th>
                <th className="p-3 px-5 text-sm text-gray-400">Created At</th>
                <th className="p-3 px-5 text-sm text-gray-400">Status</th>
              </tr>
            </thead>
            <tbody className="w-full">
              {activeNeeds.map((item, index) => {
                return (
                  <ActiveNeeds
                    item={item}
                    key={index}
                    activeNeeds={activeNeeds}
                    setActiveNeeds={setActiveNeeds}
                  />
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default MyNeeds;
