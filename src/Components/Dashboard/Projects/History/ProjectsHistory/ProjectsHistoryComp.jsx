import ProjectItem from "../ProjectItem/ProjectItem"


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

    
]
const ProjectsHistoryComp = () => {
    return (
        <div className=" cursor-pointer shadow-xl mt-6 transition-all duration-300 h-fitrounded-2xl p-8 overflow-scroll scroll font-Unbounded">

            <ul className="flex px-4 mb-6">
                <li className="text-xs text-gray-400 ">Project Name</li>
                <li className="text-xs text-gray-400 ml-16">Status </li>
                <li className="text-xs text-gray-400 ml-16 ">Skill</li>
                <li className="text-xs text-gray-400 ml-24 ">Start Date</li>
                <li className="text-xs text-gray-400 ml-11 ">Deadline</li>
                <li className="text-xs text-gray-400 ml-10 ">Final Cost</li>
                <li className="text-xs text-gray-400 ml-16 ">Client</li>
            </ul>
            {projects.map((project, index) => {
                return (
                    <ProjectItem project={project} key={index} />
                )
            })}
        </div>
    )
}

export default ProjectsHistoryComp
