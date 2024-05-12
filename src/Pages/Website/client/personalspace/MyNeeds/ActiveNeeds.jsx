import { faCheck, faCircleCheck, faEdit, faMessage, faTrash, faX, faXmarkCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react"
import { Link } from "react-router-dom";
import { ACCEPT_FREELANCER, GET_SINGLE_NEED, REFUSE_FREELANCER, baseURL } from "../../../../../Components/Variables/Variables";
import axios from "axios";

const ActiveNeeds = ({item}) => {
const [isOpen, setIsOpen] = useState(false)
const [singleProject, setSingleProject] = useState({})
//to open the list of freelancers that applied to this need
    const handleClick = async(e) => {
      e.stopPropagation();
      try {
        const response = await axios.get(`${baseURL}/${GET_SINGLE_NEED}/${item._id}`, {
          withCredentials: true,
        });
        setSingleProject(response.data);
        setIsOpen(pv => !pv);
        console.log(response.data.reserved);
      } catch (error) {
        console.error("Error:", error);
      }
    }
//to accept a freelancer in this need
    const handleAccept = async(freelancerId) => {
      try {
        const response = await axios.put(`${baseURL}/${ACCEPT_FREELANCER}/${item._id}`, {
          "userId" : freelancerId
        } , {
          withCredentials : true
        }).then(res => {
          console.log(res);
        })
      } catch (error) {
        console.error("Error:", error);
      }
    }

//to REFUSE a freelancer in this need
    
    const handleRefuse = async(freelancerId) => {
      try {
        const response = await axios.put(`${baseURL}/${REFUSE_FREELANCER}/${item._id}`, {
          "userId" : freelancerId
        } , {
          withCredentials : true
        }).then(res => {
          console.log(res);
        })
      } catch (error) {
        console.error("Error:", error);
      }
    }

    return (
        <>
            <tr className="hover:bg-SecColor hover:bg-opacity-15 cursor-pointer" onClick={(e) => handleClick(e)}>
                <td className="p-3 px-5 font-semibold">{item.title}</td>
                <td className="p-3 px-5 font-semibold">{item.description}</td>
                <td className="p-3 px-5 font-bold font-Unbounded text-sm text-SecColor">
                  ${item.amount}
                </td>
                <td className="p-3 px-5 font-semibold">
                  {new Date(item.createdAt).toLocaleDateString()}
                </td>
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
                  <tr>
                    <td colSpan="6" className="p-4 bg-SecColor bg-opacity-15 rounded-2xl">
                    
                      <p className="text-SecColor font-Unbounded px-4">Freelancers that applied for this need</p>
                      <div className="flex gap-2">
                        {
                          Array.isArray(singleProject?.reserved) && singleProject.reserved.map((reserve, index) => {
                            return (
                                <div className="flex items-center py-2" key={index}>
                                  <div className="px-4 py-1">
                                    <div className="text-PrimColor font-Unbounded text-xs"> {reserve.user.firstName} {reserve.user.lastName} </div>
                                    <div className="text-gray-500 font-Unbounded font-light text-xs"> {reserve.user.email} </div>
                                  </div>
                                  <FontAwesomeIcon icon={faCircleCheck} id="accept" 
                                  className="text-lg text-PrimColor transition-all duration-150 hover:scale-110 cursor-pointer"
                                  onClick={() => handleAccept(reserve.user._id)}
                                   />
                                  <FontAwesomeIcon icon={faXmarkCircle} id="refuse" 
                                  onClick={(e) => handleRefuse(reserve.user._id, e)}
                                  className="text-lg text-red-500 transition-all duration-150 mx-1 hover:scale-110 cursor-pointer" />
                                  <FontAwesomeIcon icon={faMessage} id="send-message" className="text-lg transition-all duration-150 text-gray-500 hover:scale-110 cursor-pointer" />
                                </div>
                            ) 
                          })
                        }
                      </div>
          
                    </td>
                </tr>
                )
              }

        </>

              
    )
};

export default ActiveNeeds