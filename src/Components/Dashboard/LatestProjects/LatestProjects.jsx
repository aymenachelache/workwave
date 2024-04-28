import ProjectItem from "../Projects/History/ProjectItem/ProjectItem"


export const projects = [
    ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur iste voluptatem dicta ea eligendi accusantium, deleniti corporis. Maxime exercitationem adipisci quibusdam tempore, incidunt magnam. Atque minima earum quo alias harum.",
    "Done",
    "Packaging Design",
    "Oct 05 2024",
    "Nov 19 2024",
    "1000", //final cost
    "Heythem Laouici",
    "Nov 14 2024", //Delivered on
    "None", //Delay time
    "0", //Update times
    "Service", //Type
    ["link1", "link2", "link3"], //Deliverables
    "1000", // initial cost
    "0", //Delay tax
    "0", //Updates cost
    ],
    ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur iste voluptatem dicta ea eligendi accusantium, deleniti corporis. Maxime exercitationem adipisci quibusdam tempore, incidunt magnam. Atque minima earum quo alias harum.",
    "Done",
    "Packaging Design",
    "Oct 05 2024",
    "Nov 19 2024",
    "1000", //final cost
    "Heythem Laouici",
    "Nov 14 2024", //Delivered on
    "None", //Delay time
    "0", //Update times
    "Service", //Type
    ["link1", "link2", "link3"], //Deliverables
    "1000", // initial cost
    "0", //Delay tax
    "0", //Updates cost
    ],

    ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur iste voluptatem dicta ea eligendi accusantium, deleniti corporis. Maxime exercitationem adipisci quibusdam tempore, incidunt magnam. Atque minima earum quo alias harum.",
    "Pending",
    "Packaging Design",
    "Oct 05 2024",
    "Nov 19 2024",
    "1000", //final cost
    "Heythem Laouici",
    "Nov 14 2024", //Delivered on
    "None", //Delay time
    "0", //Update times
    "Service", //Type
    ["link1", "link2", "link3"], //Deliverables
    "1000", // initial cost
    "0", //Delay tax
    "0", //Updates cost
    ],

    ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur iste voluptatem dicta ea eligendi accusantium, deleniti corporis. Maxime exercitationem adipisci quibusdam tempore, incidunt magnam. Atque minima earum quo alias harum.",
    "Done",
    "Packaging Design",
    "Oct 05 2024",
    "Nov 19 2024",
    "1000", //final cost
    "Heythem Laouici",
    "Nov 14 2024", //Delivered on
    "None", //Delay time
    "0", //Update times
    "Service", //Type
    ["link1", "link2", "link3"], //Deliverables
    "1000", // initial cost
    "0", //Delay tax
    "0", //Updates cost
    ],

    ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur iste voluptatem dicta ea eligendi accusantium, deleniti corporis. Maxime exercitationem adipisci quibusdam tempore, incidunt magnam. Atque minima earum quo alias harum.",
    "Pending",
    "Packaging Design",
    "Oct 05 2024",
    "Nov 19 2024",
    "1000", //final cost
    "Heythem Laouici",
    "Nov 14 2024", //Delivered on
    "None", //Delay time
    "0", //Update times
    "Service", //Type
    ["link1", "link2", "link3"], //Deliverables
    "1000", // initial cost
    "0", //Delay tax
    "0", //Updates cost
    ],

    
]
const LatestProjects = () => {
    return (
        <div className=" container cursor-pointer shadow-xl pt-6 transition-all duration-300 max-h-[600px] rounded-3xl p-8 overflow-auto font-Unbounded">
            <h1 className="text-PrimColor text-opacity-60 font-semibold px-1 mb-6">Latest Projects</h1>
            <ul className="flex px-4 pb-4">
                <li className="text-xs text-gray-400 w-[15%] ">Project Name</li>
                <li className="text-xs text-gray-400 w-[8%]">Status </li>
                <li className="text-xs text-gray-400 w-[15%] ml-10 ">Skill</li>
                <li className="text-xs text-gray-400 w-[20%] ">Start Date</li>
                <li className="text-xs text-gray-400 w-[15%]">Deadline</li>
                <li className="text-xs text-gray-400 w-[15%]">Final Cost</li>
                <li className="text-xs text-gray-400 w-[15%]">Client</li>
            </ul>
            {projects.map((project, index) => {
                return (
                    <ProjectItem project={project} key={index} />
                )
            })}
        </div>
    )
}

export default LatestProjects
