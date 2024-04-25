

export const projects = [
    ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur iste voluptatem dicta ea eligendi accusantium, deleniti corporis. Maxime exercitationem adipisci quibusdam tempore, incidunt magnam. Atque minima earum quo alias harum.",
    "Pending",
    "Packaging Design",
    "Oct 05 2024",
    "Nov 19 2024",
    "120",
    "Heythem Laouici"
    ],
    ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur iste voluptatem dicta ea eligendi accusantium, deleniti corporis. Maxime exercitationem adipisci quibusdam tempore, incidunt magnam. Atque minima earum quo alias harum.",
    "Done",
    "Packaging Design",
    "Oct 05 2024",
    "Nov 19 2024",
    "1000",
    "Heythem Laouici"
    ],
    ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur iste voluptatem dicta ea eligendi accusantium, deleniti corporis. Maxime exercitationem adipisci quibusdam tempore, incidunt magnam. Atque minima earum quo alias harum.",
    "Done",
    "Packaging Design",
    "Oct 05 2024",
    "Nov 19 2024",
    "200",
    "Heythem Laouici"
    ],
    ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur iste voluptatem dicta ea eligendi accusantium, deleniti corporis. Maxime exercitationem adipisci quibusdam tempore, incidunt magnam. Atque minima earum quo alias harum.",
    "Done",
    "Packaging Design",
    "Oct 05 2024",
    "Nov 19 2024",
    "350",
    "Heythem Laouici"
    ]
]
const LatestProjects = () => {
    return (
        <div className="hover:-translate-y-3 cursor-pointer shadow-xl transition-all duration-300 h-fit hover:shadow-emerald-200 rounded-2xl p-8">
        <p className="font-semibold text-PrimColor text-opacity-50 mb-2 px-1">Latest projects</p>
        <div className="flex gap-8">
            <div className="Name w-[15%] truncate flex flex-col justify-center gap-8">
                <p className="font-semibold text-gray-400 text-xs mb-2 px-1">Project Name</p>
                {projects.map((project, index) => {
                    return(
                        <p key={index} className="truncate font-semibold hover:bg-PrimColor hover:bg-opacity-25  text-center px-1 rounded-xl">{project[0]}</p> 
                    )
                })}
            </div>

            
            <div className="Skill  flex flex-col justify-center gap-8">
                <p className="font-semibold text-gray-400 text-xs mb-2 px-1 ">Status</p>
                {projects.map((project, index) => {
                    return(
                        <p key={index} className={`font-bold text-white text-sm hover:bg-opacity-55 text-center px-1 rounded-xl ${project[1] == "Pending" ? "bg-yellow-400" : "bg-PrimColor"}`}>{project[1]}</p> 
                    )
                })}
            </div>

            <div className="Skill flex flex-col justify-center  gap-8">
                <p className="font-semibold text-gray-400 text-xs mb-2 px-1 ">Start Date</p>
                {projects.map((project, index) => {
                    return(
                        <p key={index} className="font-bold text-gray-400 hover:bg-PrimColor hover:bg-opacity-25  text-center px-1 rounded-xl">{project[2]}</p> 
                    )
                })}
            </div>
            <div className="Sold flex flex-col justify-center  gap-8">
                <p className="font-semibold text-gray-400 text-xs mb-2 px-1">Deadline</p>
                {projects.map((project, index) => {
                    return(
                        <p key={index} className="font-semibold hover:bg-PrimColor hover:bg-opacity-25  text-center px-1 rounded-xl">{project[4]}</p> 
                    )
                })}
            </div>
            <div className="Cost flex flex-col justify-center  gap-8">
                <p className="font-semibold text-gray-400 text-xs mb-2 px-1">Final Cost</p>
                {projects.map((project, index) => {
                    return(
                        <p key={index} className="text-PrimColor font-extrabold hover:bg-PrimColor hover:bg-opacity-25  text-center px-1 rounded-xl">+${project[5]}</p> 
                    )
                })}
            </div>
            <div className="Cost flex flex-col justify-center  gap-8">
                <p className="font-semibold text-gray-400 text-xs mb-2 px-1r">Client</p>
                {projects.map((project, index) => {
                    return(
                        <p key={index} className="text-SecColor truncate font-extrabold hover:bg-PrimColor hover:bg-opacity-25  text-center px-1 rounded-xl">{project[6]}</p> 
                    )
                })}
            </div>
        </div>
    </div>
    )
}

export default LatestProjects