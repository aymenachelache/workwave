import { baseURL, GET_ACCEPTED_PROJECTS } from "../../Variables/Variables";
import { useEffect, useState } from "react";





const AcceptedProjects = () => {
    const [acceptedProjects, setAcceptedProjects] = useState([]);
    useEffect (() => {
        const getAcceptedProjects = async(e) => {
            try {
                const data = await axios.get(`${baseURL}/${GET_ACCEPTED_PROJECTS}`, {
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
        
    if (acceptedProjects.length > 0) {
        return (
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
        )
    } else {
        return (
            <div className="cursor-pointer shadow-xl w-full pt-6 transition-all duration-300 max-h-[600px] rounded-3xl p-8 overflow-auto font-Unbounded">
                <p className="font-Unbounded text-lg text-center">There is no accepted projects yet</p>
            </div>
        )
    }
}

export default AcceptedProjects
