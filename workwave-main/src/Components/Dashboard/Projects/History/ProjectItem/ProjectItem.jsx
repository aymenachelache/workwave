import { faLink } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"



const ProjectItem = ({project}) => {
    const [isOpenMoreInfo, setIsOpenMoreInfo] = useState(false)


    return (
       <div className="">
            <div 
            className={`grid grid-cols-8 min-w-[700px] overflow-auto max-md:text-xs gap-1 hover:bg-PrimColor items-center hover:bg-opacity-25 p-2 rounded-full font-Unbounded ${isOpenMoreInfo && "bg-PrimColor bg-opacity-25"}`} onClick={() => setIsOpenMoreInfo(pv => !pv)}>
                <p className=" col-span-2 truncate font-semibold text-sm px-1 rounded-xl">{project[0]}</p>
                <p className={`font-bold text-white text-sm hover:bg-opacity-55 text-center px-1 col-span-1 rounded-xl ${project[1] == "Pending" ? "bg-yellow-400" : "bg-PrimColor"}`}>{project[1]}</p>
                <p className="font-semibold text-center px-1 rounded-xl col-span-1 text-sm">{project[3]}</p>
                <p className="font-semibold text-center px-1 rounded-xl col-span-1 text-sm">{project[4]}</p>
                <p className="text-PrimColor font-semibold font-Unbounded col-span-1 text-sm text-center px-1 -my-[2px] rounded-xl">+${project[5]}</p>
                <div className="flex gap-1 -my-[2px]">
                    <img class="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt="Rounded avatar" />
                    <p className="text-SecColor font-extrabold text-center px-1 text-sm rounded-xl mx-2">{project[6]}</p>
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