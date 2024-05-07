const ProjectCard = () => {
    return (
        <div className="cursor-pointer shadow-xl font-Unbounded transition-all w-[30%] max-lg:w-fit lg:mt-4 h-fit rounded-2xl p-8">
            <h1 className="text-PrimColor text-opacity-60 font-semibold px-1">Cost</h1>
            <div className="amount text-5xl font-bold text-PrimColor mb-3 mt-2">$120</div>
            <div className="stats flex items-center justify-between gap-20 mt-4">
                <div className="">
                    <h1 className="text-yellow-400 font-semibold ">+0%</h1>
                    <p className="text-xs text-gray-400 font-bold">No Upgrades</p>
                </div>
                <div className="">
                    <h1 className="text-PrimColor font-semibold ">-0%</h1>
                    <p className="text-xs text-gray-400 font-bold">No Delay</p>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard