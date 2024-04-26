import { faLink } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"



const ProjectItem = ({project}) => {
    const [isOpenMoreInfo, setIsOpenMoreInfo] = useState(false)


    return (
       <div className=" my-2">
            <div className={`flex justify-around gap-6 hover:bg-PrimColor items-center hover:bg-opacity-25 p-2 rounded-full font-Unbounded ${isOpenMoreInfo && "bg-PrimColor bg-opacity-25"}`} onClick={() => setIsOpenMoreInfo(pv => !pv)}>
                <p className="truncate w-[15%] font-semibold text-sm text-center px-1 rounded-xl">{project[0]}</p>
                <p className={`font-bold text-white text-sm hover:bg-opacity-55 text-center px-1 rounded-xl ${project[1] == "Pending" ? "bg-yellow-400" : "bg-PrimColor"}`}>{project[1]}</p>
                <p className=" text-gray-500 text-sm text-center px-1 rounded-xl">{project[2]}</p>
                <p className="font-semibold text-center px-1 rounded-xl text-sm">{project[3]}</p>
                <p className="font-semibold text-center px-1 rounded-xl text-sm">{project[4]}</p>
                <p className="text-PrimColor font-semibold font-Unbounded text-sm text-center px-1 -my-[2px] rounded-xl">+${project[5]}</p>
                <div className="flex gap-1 -my-[2px]">
                    <div className="flex justify-center items-start relative w-6 h-6 overflow-hidden  bg-gray-100 rounded-full dark:bg-gray-600">
                        <svg className="absolute w-7 h-7 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
                    </div>
                    <p className="text-SecColor truncate font-extrabold hover:bg-PrimColor hover:bg-opacity-25 text-center px-1 rounded-xl">{project[6]}</p>
                </div>
            </div>
            {/*the div under*/} 
               {isOpenMoreInfo && (
                <div className="bg-PrimColor bg-opacity-25 rounded-2xl mt-1 p-4 px-12 flex justify-between">
                    <div className="">
                        <p className="font-Unbounded text-xs font-semibold my-2">Delivered On: <span className="font-normal ml-1">{project[7]}</span> </p>
                        <p className="font-Unbounded text-xs font-semibold my-2">Delay time: <span className="font-normal ml-1">{project[8]}</span> </p>
                    </div>

                    <div className="">
                        <p className="font-Unbounded text-xs font-semibold my-2">Update times: <span className="font-normal ml-1">{project[9]}</span> </p>
                        <p className="font-Unbounded text-xs font-semibold my-2">Type: <span className="font-normal ml-1">{project[10]}</span> </p>
                    </div>

                    <div className="flex justify-center items-start">
                        <div className="font-Unbounded text-xs font-semibold my-2">Deliverables: </div>
                        <ul className="my-1 ml-2">
                            {project[11].map((link, index) => {
                                return (
                                    <li className="text-SecColor font-bold">
                                        <a href={link} className="flex items-center">
                                            <FontAwesomeIcon icon={faLink} />
                                            <p className="ml-1">Delivery</p>
                                        </a>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>

                    <div className="font-semibold ">
                        <p className="font-Unbounded text-xs font-semibold my-2">Initial cost: <span className="ml-1 text-PrimColor">+${project[12]}</span> </p>
                        <p className="font-Unbounded text-xs font-semibold my-2">Delay tax: <span className={`ml-1 ${project[13] > 0 ? "text-red-400" : "text-PrimColor"}`}>-${project[13]}</span> </p>
                        <p className="font-Unbounded text-xs font-semibold my-2">Updates cost: <span className={`ml-1 ${project[14] > 0 ? "text-PrimColor" : "text-yellow-500"}`}>+${project[14]}</span> </p>
                        <p className="font-Unbounded text-xs font-semibold my-2">Final Cost: <span className="ml-1 text-PrimColor">+${project[5]}</span> </p>
                    </div>

                </div>
               )}

       </div>
    )
}

export default ProjectItem