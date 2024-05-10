
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { DELETE_SERVICE, baseURL } from "../../../Variables/Variables";
import { Link } from "react-router-dom";
import axios from "axios";

const Service = ({ dataPiece }) => {
  const handleDelete = async () => {
    try {
      const response = await axios.delete(
        `${baseURL}/${DELETE_SERVICE}/${dataPiece._id}`,
        {
          withCredentials: true,
        }
      ).then((res) => console.log(res));
      window.location.reload();
    } catch (err) {
      console.error("Delete Error", err);
    }
  };
  useEffect(() => {}, [dataPiece]);

  return (
    <div className=" rounded-2xl p-4 grid grid-cols-7 gap-6 font-Unbounded pb-2">
      <div className="col-span-3">
        <div id="title" className="font-semibold font-Unbounded text-sm py-1">
          {dataPiece.service}
        </div>
        <div id="description" className="text-gray-400 font-light text-xs py-1">
          {dataPiece.description}
        </div>
      </div>
      {/* <div className="col-span-1">
                <ul className="">
                    <p className="font-Unbounded text-sm py-1">skills:</p>
                    dataPiece.skills.map((skill, index) => {
                        return <li className="text-gray-400 whitespace-nowrap text-xs" key={index}> {skill} </li>
                    })
                </ul>
            </div> */}
      <div className="col-span-3 text-sm px-4">
        <div className="grid grid-cols-2 items-center pt-1 pb-4">
          <p className="font-Unbounded">Cost: </p>{" "}
          <p className="text-PrimColor font-bold font-Unbounded pl-3">
            ${dataPiece.price}
          </p>
        </div>
        <div className="grid grid-cols-2 items-center">
          <p className="font-Unbounded">Sold: </p>{" "}
          <p className="font-Unbounded pl-3">{dataPiece.price}</p>
        </div>
        <div className="grid grid-cols-2 items-center py-6">
          <p className="font-Unbounded">Total Profit: </p>{" "}
          <p className="text-PrimColor font-bold font-Unbounded pl-3">
            ${dataPiece.price}
          </p>
        </div>
      </div>
      <div className="cols-span-1 py-1 flex flex-col gap-2">
        <Link
          to={`/work/editservice/${dataPiece._id}`}
          className="flex items-center gap-2 px-5 py-2 bg-PrimColor rounded-2xl text-white w-full"
        >
          <p className=" font-bold">Edit</p>
          <FontAwesomeIcon
            icon={faEdit}
            className="hover:-scale-x-100 transition-all duration-300"
          />
        </Link>
        <button
          onClick={handleDelete}
          className="flex items-center gap-2 px-3 py-2 border-2 border-red-300 rounded-2xl w-full text-red-300 hover:bg-red-500 hover-border-red-500 hover:text-white transition-all duration-300"
        >
          <p className=" font-bold">Delete</p>
          <FontAwesomeIcon icon={faTrash} className="hover:-scale-x-100" />
        </button>
      </div>
    </div>
  );
};
export default Service;
