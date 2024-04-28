import "./ServicesCountSold.scss"


const ServicesCountSold = ({service}) => {
    return (
        <div className="flex flex-col gap-4 w-1/4 flex-grow  drop-shadow-lg">
            <div className="p-4 rounded-t-3xl h-1/2 rounded-b-lg shadow-xl flex items-center justify-between">
                <h1 id="title" className="text-PrimColor text-sm text-opacity-50">Service Count</h1>
                <h2 className="font-bold text-xl text-PrimColor"> {service.count} </h2>
            </div>
            <div className="p-4 rounded-b-3xl h-1/2 rounded-t-lg shadow-xl flex items-center justify-between">
                <h1 id="title" className="text-PrimColor text-sm text-opacity-50">Sold</h1>
                <h2 className="font-bold text-xl text-PrimColor"> {service.Sold} </h2>
            </div>
        </div>
    )
}

export default ServicesCountSold