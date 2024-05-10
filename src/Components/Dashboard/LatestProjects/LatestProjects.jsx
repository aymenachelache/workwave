import ProjectItem from "../Projects/History/ProjectItem/ProjectItem"
import { baseURL, PROJECT_ACCEPTED } from "../../Variables/Variables";
import { useEffect, useState } from "react";





const AcceptedProjects = () => {
    const [acceptedProjects, setAcceptedProjects] = useState([]);
    useEffect (() => {
        const getAcceptedProjects = async(e) => {
            try {
                const data = await axios.get(`${baseURL}/${PROJECT_ACCEPTED}`, {
                    withCredentials: true,
                }).then((res) => {
                        console.log(res);
                    });
            } catch (err) {
                console.log(err);
            }
        }
        getAcceptedProjects()
    } , [])
        
    return (
        <div className="cursor-pointer shadow-xl w-full pt-6 transition-all duration-300 max-h-[600px] rounded-3xl p-8 overflow-auto font-Unbounded">
            <h1 className="text-PrimColor text-opacity-60 font-semibold px-1 mb-6">Accepted Projects</h1>
            <ul className="lg:grid grid-cols-8 px-3 gap-3 max-lg:hidden text-xs text-gray-400 min-w-[700px] w-full">
                <li className="col-span-2 pr-1">Project Name</li>
                <li className="col-span-1 px-1">Status</li>
                <li className="col-span-1 px-1">Start Date</li>
                <li className="col-span-1 px-1">Deadline</li>
                <li className="col-span-1 px-1">Final Cost</li>
                <li className="col-span-1 px-1">Client</li>
            </ul>
            {acceptedProjects.map((project, index) => {
                return (
                    <ProjectItem project={project} key={index} />
                )
            })}
        </div>
    )
}

export default AcceptedProjects
