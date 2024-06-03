import "./ClientHomePage.scss"
import Header from "../../../../Components/header/Header";
import FilterBar from "../../../../Components/filterBar/FilterBar";
import { useState, useEffect } from "react";
import Footer from "../../../../Components/footer/Footer"
import ClientCard from "../../../../Components/clientCard/ClientCard"
import Pagination from "../../../../Components/pagination/Pagination";
import axios from "axios";
import { GET_HOME_SERVICES, baseURL } from "../../../../Components/Variables/Variables";
const ClientHomePage = () => {
    //const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [isSlides, setIsSlides] = useState(true); //flex or grid
    const [projects, setProjects] = useState([]);

    // Generate multiple random projects
    useEffect(() => {

        const getServices = async (e) => {
            try {
                const response = await axios.get(`${baseURL}/${GET_HOME_SERVICES}`, {
                    withCredentials: true,
                });
                console.log(response.data.services)
                setProjects(response.data.services);
            } catch (error) {
                console.error("Error:", error);
            }
        };
        // console.log(projects)
        getServices();
    }, []);

    return (
        <div id="ClientNeeds" className="flex flex-col items-center justify-center relative transition-all duration-300">
            <Header />
            <FilterBar />
            <div id="wrapper" className="fixed right-[5%] top-[11%] scale-[60%] max-md:hidden">
                <div id="slides" className={`px-3 py-1 rounded-xl transition-all duration-300 ${isSlides ? "bg-white drop-shadow-xl" : "opacity-40 giveBorder cursor-pointer"} `} onClick={() => setIsSlides(true)}>
                    <div id="icon" className="rounded-md bg-SecColor"></div>
                    <div id="icon" className="rounded-md bg-SecColor"></div>
                </div>
                <div id="grid" className={`px-3 py-2 rounded-xl grid transition-all duration-300 ${!isSlides ? "bg-white drop-shadow-xl" : "opacity-40 giveBorder cursor-pointer"}`} onClick={() => setIsSlides(false)}>
                    <div id="icon" className="rounded-[4px] bg-SecColor"></div>
                    <div id="icon" className="rounded-[4px] bg-SecColor"></div>
                    <div id="icon" className="rounded-[4px] bg-SecColor"></div>
                    <div id="icon" className="rounded-[4px] bg-SecColor"></div>
                    <div id="icon" className="rounded-[4px] bg-SecColor"></div>
                    <div id="icon" className="rounded-[4px] bg-SecColor"></div>
                </div>
            </div>

            <div className={`${isSlides ? "flex flex-col items-center w-full" : "grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10 mx-36"} mt-40 max-sm:mt-16 max-md:flex-col`}>
                {projects?.map((project, index) => (
                    <ClientCard key={index} props={project} isSlides={isSlides} />
                ))}
            </div>

            <Pagination />
            <Footer />
        </div>
    )
}

export default ClientHomePage