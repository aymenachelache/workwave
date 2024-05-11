import { faCheck, faCircleCheck, faEdit, faMessage, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react"
import { Link } from "react-router-dom";
import { GET_SINGLE_NEED, baseURL } from "../../../../../Components/Variables/Variables";
import axios from "axios";

const ActiveNeeds = ({item}) => {
const [isOpen, setIsOpen] = useState(false)
const [singleProject, setSingleProject] = useState({})

    const handleClick = async(e) => {
      e.stopPropagation();
      try {
        const response = await axios.get(`${baseURL}/${GET_SINGLE_NEED}/${item._id}`, {
          withCredentials: true,
        });
        setSingleProject(response.data);
        setIsOpen(pv => !pv);
        console.log(response.data);
      } catch (error) {
        console.error("Error:", error);
      }
    }

    return (
        <>
            <tr className="hover:bg-SecColor hover:bg-opacity-35 cursor-pointer" onClick={(e) => handleClick(e)}>
                <td className="p-3 px-5 font-semibold">{item.title}</td>
                <td className="p-3 px-5 font-bold font-Unbounded text-sm text-SecColor">
                  ${item.amount}
                </td>
                <td className="p-3 px-5 font-semibold">
                  {new Date(item.createdAt).toLocaleDateString()}
                </td>
                <td className="p-3 px-5 font-semibold">{item.description}</td>
                <td className="p-3 px-5 font-semibold">{item.reservedCount}</td>
                <td className="p-3 px-5 font-semibold text-yellow-400">
                  {item.status}
                </td>
                <td className="">
                  <Link to={item._id}>
                    <FontAwesomeIcon
                      icon={faEdit}
                      className="bg-SecColor rounded-lg text-white p-2 mx-1"
                    />
                  </Link>
                  <button onClick={() => handleDelete(item._id)}>
                    <FontAwesomeIcon
                      icon={faTrash}
                      className="bg-red-500 rounded-lg text-white p-2 mx-1"
                    />
                  </button>
                </td>
              </tr>
              {
                isOpen && (
                  <tr className="">
                    <td className="flex flex-wrap">
                    {
                      Array.isArray(singleProject?.reserved) && singleProject.reserved.map((reserve, index) => {
                        return (
                            <div className="flex items-center">
                              <div className="px-4 py-1">
                                <div className="text-PrimColor font-Unbounded text-xs"> {reserve.user.firstName} {reserve.user.lastName} </div>
                                <div className="text-PrimColor font-Unbounded font-light text-xs"> {reserve.user.email} </div>
                              </div>
                              <FontAwesomeIcon icon={faCircleCheck} className=" text-PrimColor mx-1 hover:scale-110 cursor-pointer" />
                              <FontAwesomeIcon icon={faMessage} className=" text-PrimColor hover:scale-110 cursor-pointer" />
                            </div>
                        ) 
                      })
                    }
                    </td>
*                 </tr>
                )
              }

        </>

              
    )
};

export default ActiveNeeds