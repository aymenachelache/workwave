import SendBtn from "../SendBtn/SendBtn"



export const deliver = [
    ['Lorem ipsum dolor sit amet elit.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    'Pending',
    'None',
    '120'
    ],
    ['Lorem ipsum dolor sit amet elit.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    'Revise',
    'None',
    '80'
    ]
]

const Deliverables = () => {

    return (
        <div className="cursor-pointer shadow-xl transition-all duration-300 w-full lg:mt-4 rounded-2xl p-8 mt-4">
            <h1 className="text-PrimColor text-opacity-60 font-semibold mb-4">Deliverables</h1>
            {deliver.map((delivery, index) => (
                <div className={`${index != deliver.length - 1 ? "mb-12" : ""} bg-amber-100 bg-opacity-75 rounded-3xl p-4`} key={index}>
                    <div className={`flex gap-6 lg:gap-4 max-md:gap-2 flex-wrap items-baseline mt-4 mb-6 max-lg:text-xs`}>
                        <h1 id="Name" className="w-1/4 text-sm"> {delivery[0]} </h1>
                        <p id="description" className="w-full text-gray-400"> {delivery[1]} </p>
                        {delivery[2].toLowerCase() === "pending" ? <p className="bg-yellow-400 px-2 py-1 rounded-full text-white font-bold">Pending...</p> : <p className="bg-yellow-400 px-2 py-1 rounded-full text-white font-bold">Revise</p>}
                        <h2 id="Extra cost" className="text-gray-400 text-sm"> {delivery[3]} </h2>
                        <h2 id="Final cost" className="text-PrimColor font-bold"> +${delivery[4]} </h2>
                    </div>
                    {delivery[2].toLowerCase() === "pending" && (
                        <form onSubmit={() => handleSubmit(e)} className="flex gap-6 max-lg:flex-col">
                            <div className="bg-white flex justify-between rounded-full max-sm:flex-col max-sm:bg-transparent">
                                <input type="text" placeholder="Deliverable Link" className="outline-none rounded-full px-5 py-3" />
                                <SendBtn />
                            </div>
                            <div className="bg-white flex justify-between rounded-full max-sm:flex-col max-sm:bg-transparent">
                                <input type="text" placeholder="Preview Link" className="outline-none rounded-full px-5 py-3" />
                                <SendBtn />
                            </div>
                        </form>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Deliverables