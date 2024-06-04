/* eslint-disable react/prop-types */

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./ClientCard.scss"
import { faCircleExclamation, faUser } from "@fortawesome/free-solid-svg-icons"
import { formatDistanceToNow } from "date-fns";
import { GETUSERBYID, HIRE_FREELANCER, baseURL } from "../Variables/Variables";
import axios from 'axios'
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const ClientCard = ({ props, isSlides }) => {
    const [freelancer, setFreelancer] = useState({});
    const relativeTime = formatDistanceToNow(new Date(props.createdAt), { addSuffix: true });
    const handleClick = async () => {
        try {
            const data = await axios.put(`${baseURL}/${HIRE_FREELANCER}/${props._id}`, {}, {
                withCredentials: true,
            }).then((res) => {
                console.log(res)
            });
        } catch (err) {
            console.log(err);
        }
    };
    useEffect(() => {
        const getFreelancer = async () => {
            try {
                const data = await axios.get(`${baseURL}/${GETUSERBYID}/${props.freelancer}`, {
                    withCredentials: true,
                }).then((res) => {
                    setFreelancer(res.data.data);
                    console.log(res.data.data)
                });
            } catch (err) {
                console.log(err);
            }
        }
        getFreelancer();
    }, [])


    return (
        <div id="container" className={`Client-Card max-md:w-[80%] max-sm:w-[95%] w-[60%] rounded-3xl mt-10 ${isSlides ? "max-sm:p-5 p-10" : "w-full p-5"}`}>
            <div className="flex justify-between h-[30%] max-sm:flex-col">
                <div id="text" className={isSlides ? "" : "w-[80%]"}>
                    <h1 className={`max-md:text-lg text-2xl font-bold ${isSlides ? "" : "text-lg"}`}>
                        {props.service}
                    </h1>
                    <h2 className={`font-light opacity-65 text-sm ${isSlides ? "" : "text-xs mt-1"}`}>
                        {props.type}
                    </h2>
                </div>
                <div id="price" className={isSlides ? "mt-2" : "w-[30%]"}>
                    <div id="price" className="text-xl font-bold"> {props.price} DA </div>
                    <div id="age" className="opacity-65 text-sm"> {relativeTime} </div>
                </div>
            </div>
            <div id="description" className={`${isSlides ? "mt-8" : "text-sm mt-6"} h-[14%]`}>
                {props.description}
            </div>
            <div className={`flex justify-between mt-12 ${isSlides ? "mt-12" : "mt-20"}`}>
                <Link to={`/profile/${freelancer._id}`} id="client" className="flex items-center">
                    <img src={freelancer.photo == null || freelancer.photo == "" ? "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" : freelancer.photo} className="w-10 h-10 border-2 mr- p-1 border-gray-300 text-gray-400 rounded-full" />
                    <div className="text">
                        <div id="client-name" className="mx-2 font-bold"> {freelancer.firstName} {freelancer.lastName} </div>
                    </div>
                </Link>
                <div id="buttons" className="flex items-center justify-center">
                    <Link to={`/report/${freelancer._id}`} id="report" className="text-red-500 max-sm:hidden border-2 border-red-500 hover:bg-red-500 transition-all duration-200 hover:text-gray-50 rounded-xl flex justify-between items-center px-2 py-2">
                        {isSlides ? <h3 className='text-sm mr-2 max-md:hidden'>Report</h3> : ""}
                        <FontAwesomeIcon icon={faCircleExclamation} />
                    </Link>
                    <button onClick={handleClick} id="place-a-bid" className={`text-gray-50 px-4 py-2 rounded-xl font-bold ml-3 transition-all duration-300 hover:-translate-y-1 hover:drop-shadow-xl`}>
                        {isSlides ? "Hire Freelancer" : "Hire"}
                    </button>
                </div>
            </div>
        </div>
    )
}


export default ClientCard