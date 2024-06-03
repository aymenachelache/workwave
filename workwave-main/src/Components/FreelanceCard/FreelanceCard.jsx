
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleExclamation, faUser } from "@fortawesome/free-solid-svg-icons"
import { formatDistanceToNow } from 'date-fns';
import axios from "axios";
import { PLACE_A_BILD, baseURL } from "../Variables/Variables";
import { useEffect } from "react";
import { Link } from "react-router-dom";


const FreelanceCard = ({ props, isSlides }) => {

    const createdAtDate = props?.createdAt ? new Date(props.createdAt) : null;
    const relativeTime = createdAtDate ? formatDistanceToNow(createdAtDate, { addSuffix: true }) : "Unknown";
        const handleClick = async () => {
        try {
            const data = await axios.put(`${baseURL}/${PLACE_A_BILD}/${props._id}`, {}, {
                withCredentials: true,
            })
                .then((res) => {
                    console.log(res)
                });
        } catch (err) {
            console.log(err);
        }
    };



    return (
        <div id="container" className={`FreelanceCard border border-gray-300 max-md:w-[80%] max-sm:w-[95%] w-[60%] rounded-3xl mt-10 ${isSlides ? "max-sm:p-5 p-10" : "w-full p-5"}`}>
            <div className="flex justify-between h-[30%] items-start max-sm:flex-col">
                <div id="text" className={isSlides ? "w-full sm:w-3/4" : ""}>
                    <h1 className={`text-lg md:text-xl text-PrimColor break-all lg:text-xl font-bold ${isSlides ? "" : "text-lg"}`}>
                        {props.title}
                    </h1>
                    <h2 className={`font-light opacity-65 text-sm ${isSlides ? "" : "text-xs mt-1"}`}>
                        {props.type}
                    </h2>
                </div>
                <div id="price" className={`${isSlides ? "" : "w-[30%]"} text-PrimColor`}>
                    <div id="price" className="text-lg md:text-3xl max-sm:mt-5 font-bold"> {props.amount} DA</div>
                    <div id="age" className="opacity-65 text-sm px-1"> {relativeTime} </div>
                </div>
            </div>
            <div id="description" className={`${isSlides ? "mt-8" : "text-sm mt-12"} h-[14%] line-clamp-4`}>
                {props.description}
            </div>
            {/* <div id="tags" className="flex my-8">
                {props.tags.map((tag, index) => {
                    return <div id="tag" key={index} className={`px-[2%] py-[0.8%] mx-2 rounded-full text-xs font-semibold cursor-pointer ${index == 0 ? "ml-0" : "mx-2"}`}> {tag} </div>
                })}
            </div> */}
            <div className="flex justify-between mt-12">
                <Link to={`/profile/${props.user?._id}`} id="client" className="flex items-center">
                    <img src={props.user?.photo == "" || props.user?.photo == null ? "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" : props.user?.photo} className="w-10 h-10 border-2 mr- p-1 border-gray-300 text-gray-400 rounded-full" />
                    <div id="client-name" className="mx-2 font-bold"> {props.user?.firstName} {props.user?.lastName} </div>
                </Link>
                <div id="buttons" className="flex items-center justify-center">
                    <Link to={"/report"} id="report" className="text-red-500 max-sm:hidden border-2 border-red-500 hover:bg-red-500 transition-all duration-200 hover:text-gray-50 rounded-xl flex justify-between items-center px-2 py-2">
                        {isSlides ? <h3 className='text-sm mr-2 max-md:hidden'>Report</h3> : ""}
                        <FontAwesomeIcon icon={faCircleExclamation} />
                    </Link>
                    <button onClick={handleClick} id="place-a-bid" className="text-gray-50 px-4 py-2 bg-PrimColor rounded-xl font-semibold ml-3 transition-all duration-300 hover:-translate-y-1 hover:drop-shadow-xl">
                        Place a bid
                    </button>
                </div>
            </div>
        </div>
    )
}


export default FreelanceCard