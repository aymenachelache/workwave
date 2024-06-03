const ClientProjectsCount = ({PendingProjects, ActiveNeeds}) => {
    return (
        <div className="flex flex-col gap-4 min-w-1/4 max-md:text-xs flex-grow  drop-shadow-lg">
            <div className="p-4 rounded-t-3xl h-1/2 rounded-b-lg shadow-xl flex items-center justify-between">
                <h1 id="title" className="text-SecColor text-sm text-opacity-50">Pending Projects</h1>
                <div className="flex text-SecColor items-center gap-1">
                    <h2 className="font-bold text-xl "> {PendingProjects} </h2>
                </div>
            </div>
            <div className="p-4 rounded-b-3xl h-1/2 rounded-t-lg shadow-xl flex items-center justify-between">
                <h1 id="title" className="text-SecColor text-sm text-opacity-50">Active Needs</h1>
                <div className="flex text-SecColor items-center gap-1">
                    <h2 className="font-bold text-xl "> {ActiveNeeds} </h2>
                </div>
            </div>
        </div>
    )
}

export default ClientProjectsCount