import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Service from "./Service"
import { faAdd } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
import AddService from "../addService/AddService"
import { useEffect, useState } from "react"
import { baseURL, GET_SERVICES } from "../../../Variables/Variables"
import axios from "axios"

const ServicesList = () => {
    const [servicesList, setServicesList] = useState([]);

    useEffect(() => {
        const getServices = async () => {
            try {
                const response = await axios.get(`${baseURL}/${GET_SERVICES}`, {
                    withCredentials: true,
                }).then((res) => {
                    setServicesList(res.data.services);
                    console.log(res);
                });
            } catch (error) {
                console.error("Error:", error);
            }
        };
        getServices()
    }, [])

    return (
        <div className="shadow-xl rounded-2xl my-10 p-5">
            <div className="flex items-center justify-between">
                <p className="text-PrimColor text-opacity-60 px-4 font-Unbounded font-semibold pb-3">Services</p>
                { servicesList?.length > 0 &&
                    <Link to={'/work/addService'} className="pr-10">
                        <button> <FontAwesomeIcon icon={faAdd} className="p-3 bg-PrimColor text-white text-lg rounded-full" /> </button>
                    </Link>
                }
            </div>
            <div className={servicesList?.length > 0 ? '' : ''}>
                {
                    servicesList && servicesList.length > 0 ? servicesList.map((dataPiece, index) => {
                        return (
                            <Service dataPiece={dataPiece} key={index} />
                        )
                    }) : <AddService />
                }
            </div>    
        </div>
        )
}

export default ServicesList
