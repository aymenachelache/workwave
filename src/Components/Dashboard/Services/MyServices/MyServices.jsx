
export const services = [
    ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur iste voluptatem dicta ea eligendi accusantium, deleniti corporis. Maxime exercitationem adipisci quibusdam tempore, incidunt magnam. Atque minima earum quo alias harum.",
    "Packaging Design",
    "4",
    "120"
    ],
    ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur iste voluptatem dicta ea eligendi accusantium, deleniti corporis. Maxime exercitationem adipisci quibusdam tempore, incidunt magnam. Atque minima earum quo alias harum.",
    "Packaging Design",
    "4",
    "120"
    ],
    ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur iste voluptatem dicta ea eligendi accusantium, deleniti corporis. Maxime exercitationem adipisci quibusdam tempore, incidunt magnam. Atque minima earum quo alias harum.",
    "Packaging Design",
    "4",
    "120"
    ]
]
const MyServices = () => {

    return (
        <div className="hover:-translate-y-3 cursor-pointer shadow-xl w-full transition-all duration-300 hover:shadow-emerald-200 rounded-2xl p-8">
            <p className="font-semibold font-Unbounded text-PrimColor text-opacity-50 mb-2 px-1">My Services</p>
            <div className="flex gap-8 max-md:gap-2 max-md:text-sm">
                <div className="Name w-[35%]">
                    <p className="font-semibold text-gray-400 text-xs mb-2 px-1 ">Name</p>
                    {services.map((service, index) => {
                        return(
                            <p key={index} className="truncate font-semibold hover:bg-PrimColor hover:bg-opacity-25 py-2 px-1 rounded-xl">{service[0]}</p> 
                        )
                    })}
                </div>
                <div className="Skill">
                    <p className="font-semibold text-gray-400 text-xs mb-2 px-1">Skill</p>
                    {services.map((service, index) => {
                        return(
                            <p key={index} className=" font-semibold text-gray-400 hover:bg-PrimColor hover:bg-opacity-25 py-2 px-1 rounded-xl">{service[1]}</p> 
                        )
                    })}
                </div>
                <div className="Sold">
                    <p className="font-semibold text-gray-400 text-xs mb-2 mr-4">Sold</p>
                    {services.map((service, index) => {
                        return(
                            <p key={index} className="font-semibold hover:bg-PrimColor hover:bg-opacity-25 py-2 px-1 rounded-xl">{service[2]}</p> 
                        )
                    })}
                </div>
                <div className="Cost">
                    <p className="font-semibold text-gray-400 text-xs mb-2 px-1">Cost</p>
                    {services.map((service, index) => {
                        return(
                            <p key={index} className="text-PrimColor font-extrabold hover:bg-PrimColor hover:bg-opacity-25 py-2 px-1 rounded-xl">+${service[3]}</p> 
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default MyServices