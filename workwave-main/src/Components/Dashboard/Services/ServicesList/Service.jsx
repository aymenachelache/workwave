import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ACCEPT_FREELANCER_SERVICE, DELETE_SERVICE, GET_SINGLE_SERVICE, REFUSE_FREELANCER_SERVICE, baseURL } from "../../../Variables/Variables";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react"

const Service = ({ dataPiece }) => {
    const [singleService, setSingleService] = useState([]);
    const [isOpen, setIsOpen] = useState(false);

    const handleDelete = async () => {
        try {
            const response = await axios.delete(`${baseURL}/${DELETE_SERVICE}/${dataPiece._id}`, {
                withCredentials: true,
            });
            window.location.reload();
        } catch (err) {
            console.error("Delete Error", err);
        }
    };

    const handleClick = async () => {
        try {
            const response = await axios.get(`${baseURL}/${GET_SINGLE_SERVICE}/${dataPiece._id}`, {
                withCredentials: true,
            }).then((res) => {
                setSingleService(res.data.data);
                setIsOpen(pv => !pv)
                console.log(res.data.data) });
        } catch (err) {
            console.error("Error Get project", err);
        }
    };

    const handleAccept = async (e,id,userID) => {
        try {
            const response = await axios.put(`${baseURL}/${ACCEPT_FREELANCER_SERVICE}/${id}`, {user: userID}, {
                withCredentials: true,
            }).then((res) => { e.target.classList.add("cursor-not-allowed", "bg-green-500"), console.log(res) });
        } catch (err) {
            console.error("Error :", err);
        }
    };

    const handleRefuse = async (e,id,userID) => {
        console.log(userID)
        console.log(id)

        try {
            const response = await axios.put(`${baseURL}/${REFUSE_FREELANCER_SERVICE}/${id}`, {user: userID}, {
                withCredentials: true,
            }).then((res) => { console.log(res) });
        } catch (err) {
            console.error("Error :", err);
        }    };


    return (
        <div className="mb-20 borer ">
            <div
            onClick={handleClick}
            className="rounded-2xl px-4 pt-4 grid grid-cols-7 gap-6 font-Unbounded hover:bg-PrimColor hover:bg-opacity-15">
                <div className="col-span-2">
                    <div id="title" className="font-semibold font-Unbounded text-sm py-1">{dataPiece.service}</div>
                    <div id="description" className="text-gray-400 font-light text-xs py-1">
                        {dataPiece.description}
                    </div>
                </div>
                <div className="col-span-1">
                    <p> {dataPiece.description} </p>
                </div>
                <div className="col-span-3 text-sm px-4">
                    <div className="grid grid-cols-2 items-center pt-1 pb-4">
                        <p className="font-Unbounded">Cost: </p> <p className="text-PrimColor font-bold font-Unbounded pl-3">{dataPiece.price}  DA</p>
                    </div>
                    <div className="grid grid-cols-2 items-center">
                        <p className="font-Unbounded">Sold: </p> <p className="font-Unbounded pl-3">{dataPiece.price}   DA</p>
                    </div>
                    <div className="grid grid-cols-2 items-center py-6">
                        <p className="font-Unbounded">Total Profit: </p> <p className="text-PrimColor font-bold font-Unbounded pl-3">{dataPiece.price}  DA</p>
                    </div>
                </div>
                <div className="cols-span-1 flex flex-col gap-2">
                    <Link to={`/work/editservice/${dataPiece._id}`} className="flex items-center gap-2 px-5 py-2 bg-PrimColor rounded-2xl text-white w-full">
                        <p className=" font-bold">Edit</p>
                        <FontAwesomeIcon icon={faEdit} className="hover:-scale-x-100 transition-all duration-300" />
                    </Link>
                    <button onClick={handleDelete} className="flex items-center gap-2 px-3 py-2 border-2 border-red-400 rounded-2xl w-full text-red-400 hover:bg-red-500 hover-border-red-500 hover:text-white transition-all duration-300">
                        <p className=" ont-bold">Delete</p>
                        <FontAwesomeIcon icon={faTrash} className="hover:-scale-x-100" />
                    </button>
                    
                </div>
                <div>
                </div>
            </div>
            <div className="">
                <div>
                        {isOpen && (
                            <div className="px-6 mt-2 bg-PrimColor bg-opacity-25 py-3 rounded-xl">
                                <div className="font-semibold font-Unbounded text-sm py-1">Requests :</div>
                                <table className="w-full text-center">
                                <tbody>
                                    {singleService.enroledUsers?.length > 0 ? singleService.enroledUsers?.map((item, index) =>
                                        <tr key={index}>
                                            <td>{item.user.lastName + " " + item.user.firstName}</td>
                                            <td>{item.status}</td>
                                            <td>{item.isPaid ? "Paid" : "Not Paid"}</td>
                                            <td className="flex gap-2 w-1/2 mx-auto">
                                                <button onClick={(e) => handleAccept(e,singleService._id,item.user._id)} className="flex text-xs items-center gap-2 px-3 py-2 border-2 border-green-300 text-green-300 rounded-2xl w-full text-white-300 hover:bg-green-500 hover-border-green-500 hover:text-white-500 transition-all duration-300">
                                                    <p className=" font-bold">Accept</p>
                                                </button>
                                                <button onClick={(e) => handleRefuse(e,singleService._id,item.user._id)} className="flex text-xs items-center gap-2 px-1 py-2 border-2 border-red-300 rounded-2xl w-full text-red-300 hover:bg-red-500 hover-border-red-500 hover:text-white transition-all duration-300">
                                                    <p className="font-bold">Refuse</p>
                                                </button>

                                                {/* {item._id} */}
                                            </td>
                                        </tr>) : (
                                            <p className="text-xl font-Unbounded font-semibold">There is no requests</p>
                                        )}
                                </tbody>
                            </table>
                         </div>
                        )}
                </div>
            </div>
        </div>
    )
}
export default Service