import Header from "../../../../Components/header/Header"
import "./freelancerHomePage.scss"
import FilterBar from "../../../../Components/filterBar/FilterBar";
import {useState, useEffect} from "react";
import FreelanceCard from "../../../../Components/FreelanceCard/FreelanceCard";
import Footer from "../../../../Components/footer/Footer"
import Pagination from "../../../../Components/pagination/Pagination";
import { baseURL } from "../../../../Components/Variables/VariablesColors";
import axios from "axios";
const FreelancerHomePage = () => {
    //const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [isSlides , setIsSlides] = useState(true); //flex or grid
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const getProjects = async (e) => {
            try {
                const response = await axios.get(`${baseURL}/api/freelancer/get/projects/exists`, {
                    withCredentials: true,
                }).then((res) => {
                    console.log(res);
                });
            } catch (error) {
                console.error("Error:", error);
            }
        };
    getProjects()
    }, [])
    return(
        <div id="ClientNeeds" className="flex flex-col items-center justify-center relative transition-all duration-300">
            <Header />
            <FilterBar />
            <div id="wrapper" className="fixed right-[5%] top-[11%] scale-[60%] max-md:hidden">
                <div id="slides" className={`px-3 py-1 rounded-xl transition-all duration-300 ${isSlides ? "bg-white drop-shadow-xl" : "opacity-40 giveBorder cursor-pointer"} `} onClick={() => setIsSlides(true)}>
                    <div id="icon" className="rounded-md"></div>
                    <div id="icon" className="rounded-md"></div>
                </div>
                <div id="grid" className={`px-3 py-2 rounded-xl grid transition-all duration-300 ${!isSlides ? "bg-white drop-shadow-xl" : "opacity-40 giveBorder cursor-pointer"}`} onClick={() => setIsSlides(false)}>
                    <div id="icon" className="rounded-[4px]"></div>
                    <div id="icon" className="rounded-[4px]"></div>
                    <div id="icon" className="rounded-[4px]"></div>
                    <div id="icon" className="rounded-[4px]"></div>
                    <div id="icon" className="rounded-[4px]"></div>
                    <div id="icon" className="rounded-[4px]"></div>
                </div>
            </div>

            <div className ={`${isSlides ? "flex flex-col items-center w-full" : "grid grid-cols-3 gap-10 mx-36"} mt-44 max-md:flex max-md:flex-col`}>
                {projects.map((project, index) => (
                    <FreelanceCard key={index} props={project} isSlides={isSlides} />
                ))}
            </div>

            <Pagination />
            <Footer />
        </div>
    )
}

export default FreelancerHomePage