import Header from "../../../Components/header/Header"
import { Link } from "react-router-dom";
import "./ClientNeeds.scss"
import FilterBar from "../../../Components/filterBar/FilterBar";
import React, {useState, useEffect} from "react";
import FreelanceCard from "../../../Components/FreelanceCard/FreelanceCard";
import { PaginationItem } from "@mui/material";
import Footer from "../../../Components/footer/Footer"
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const ClientNeeds = () => {
    const [isSlides , setIsSlides] = useState(true); //flex or grid
    const [projects, setProjects] = useState([]);

    // Function to generate a random number within a range
    const getRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    // Function to generate a random project object
    const generateRandomProject = () => {
        const titles = ['Lorem ipsum dolor sit amet', 'Consectetur adipiscing elit', 'Sed do eiusmod tempor incididunt'];
        const types = ['Design & Creativity', 'Development', 'Writing', 'Marketing'];
        const prices = ['$50 - $100', '$100 - $200', '$200 - $300', '$300+'];
        const ages = ['2 hours ago, 3 bids', '1 day ago, 8 bids', '5 hours ago, 2 bids'];
        const descriptions = ['Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'];
        const clients = ['John Doe', 'Jane Smith', 'Alice Johnson', 'Bob Brown'];

        return {
            title: titles[getRandomNumber(0, titles.length - 1)],
            type: types[getRandomNumber(0, types.length - 1)],
            price: prices[getRandomNumber(0, prices.length - 1)],
            age: ages[getRandomNumber(0, ages.length - 1)],
            description: descriptions[getRandomNumber(0, descriptions.length - 1)],
            tags: ['Tag1', 'Tag2', 'Tag3'], // Example tags
            client: clients[getRandomNumber(0, clients.length - 1)]
        };
    };

    // Generate multiple random projects
    useEffect(() => {
        const newProjects = [];
        for (let i = 0; i < 5; i++) {
            newProjects.push(generateRandomProject());
        }
        setProjects(newProjects);
    }, []);

    return(
        <div id="ClientNeeds" className="flex flex-col items-center justify-center relative">
            <Header />
            <FilterBar />
            <div id="wrapper" className="fixed right-[6%] top-[11%] scale-75">
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

            <div className ={`${isSlides ? "flex flex-col items-center w-full" : "grid grid-cols-3 gap-10 mx-36"} mt-44`}>
                {projects.map((project, index) => (
                    <FreelanceCard key={index} props={project} isSlides={isSlides} />
                ))}
            </div>

            <Pagination count={10} shape="rounded" className="mt-20" />
            <Footer />
        </div>
    )
}

export default ClientNeeds