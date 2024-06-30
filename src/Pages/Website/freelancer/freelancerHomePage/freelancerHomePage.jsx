import Header from "../../../../Components/header/Header"
import "./freelancerHomePage.scss"
import { useState, useEffect } from "react";
import FreelanceCard from "../../../../Components/FreelanceCard/FreelanceCard";
import Footer from "../../../../Components/footer/Footer"
import Pagination from "../../../../Components/pagination/Pagination";
import { GET_ALL_PROJECTS, baseURL } from "../../../../Components/Variables/Variables";
import axios from "axios";
import FilterBar from '../../../../Components/filterBar/FilterBar'


const FreelancerHomePage = () => {
    //const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [isSlides, setIsSlides] = useState(true); //flex or grid
    const [projects, setProjects] = useState([]);

    const [filterForm, setFilterForm] = useState({
        searchParam: "",
        minAmount: 0,
        maxAmount: Infinity,
    });


    useEffect(() => {

        const getProjects = async (e) => {
            try {
                const response = await axios.get(`${baseURL}/${GET_ALL_PROJECTS}`, {
                    params: filterForm,
                    withCredentials: true,
                });
                setProjects(response.data.projects);
                console.log(projects);
            } catch (error) {
                console.error("Error:", error);
            }
        };
        getProjects();
    }, [filterForm])
    return (
        <div id="ClientNeeds" className="flex flex-col items-center justify-center relative transition-all duration-300">
            <Header />
            <FilterBar filterForm={filterForm} setFilterForm={setFilterForm}/>
            <div id="wrapper" className="fixed right-[5%] top-[11%] scale-[60%] max-md:hidden">
                <div id="slides" className={`px-3 py-1 rounded-xl transition-all duration-300 ${isSlides ? "bg-white drop-shadow-xl" : "opacity-40 border border-PrimColor giveBorder cursor-pointer"} `} onClick={() => setIsSlides(true)}>
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

            <div className={`${isSlides ? "flex flex-col items-center w-full" : "grid grid-cols-3 gap-10 mx-36"} mt-44 max-md:flex max-md:flex-col`}>
                {projects?.map((project, index) => (
                    <FreelanceCard key={index} props={project} isSlides={isSlides} />
                ))}
            </div>

            <Pagination />
            <Footer />
        </div>
    )
}

export default FreelancerHomePage