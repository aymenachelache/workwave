import Header from "../../../Components/header/Header"
import "./ClientHomePage.scss"
import FilterBar from "../../../Components/filterBar/FilterBar";
import {useState, useEffect} from "react";
import Footer from "../../../Components/footer/Footer"
import ClientCard from "../../../Components/clientCard/ClientCard"
import Pagination from "../../../Components/pagination/Pagination";

const ClientHomePage = () => {
    //const [windowWidth, setWindowWidth] = useState(window.innerWidth);
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
        const prices = ['$50', '$100', '$200', '$300'];
        const ages = ['2 hours ago', '1 day ago', '5 hours ago'];
        const descriptions = ['Revamp an outdated website with modern UI/UX design principles. Bring new life to the platform with vibrant colors and intuitive navigation.',
        'Develop a custom mobile app tailored to specific business needs. Implement advanced features and seamless user experience to enhance engagement and productivity.',
        'Create compelling content for a social media marketing campaign. Craft engaging posts, captivating visuals, and persuasive copy to drive brand awareness and customer engagement.'];
        const clients = ['John Doe', 'Jane Smith', 'Alice Johnson', 'Bob Brown'];
        const jobs = ['Graphic Designer', 'FullStack Developer', 'UI/UX Designer']
        return {
            title: titles[getRandomNumber(0, titles.length - 1)],
            type: types[getRandomNumber(0, types.length - 1)],
            price: prices[getRandomNumber(0, prices.length - 1)],
            age: ages[getRandomNumber(0, ages.length - 1)],
            description: descriptions[getRandomNumber(0, descriptions.length - 1)],
            client: clients[getRandomNumber(0, clients.length - 1)],
            job: jobs[getRandomNumber(0, jobs.length - 1)]
        };
    };

    // Generate multiple random projects
    useEffect(() => {
        const newProjects = [];
        for (let i = 0; i < 9; i++) {
            newProjects.push(generateRandomProject());
        }
        setProjects(newProjects);
    }, []);
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

            <div className ={`${isSlides ? "flex flex-col items-center w-full" : "grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10 mx-36"} mt-44 max-md:flex-col`}>
                {projects.map((project, index) => (
                    <ClientCard key={index} props={project} isSlides={isSlides} />
                ))}
            </div>

            <Pagination />
            <Footer />
        </div>
    )
}

export default ClientHomePage