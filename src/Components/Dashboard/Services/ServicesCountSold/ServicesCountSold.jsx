import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./ServicesCountSold.scss"
import { faArrowCircleUp } from "@fortawesome/free-solid-svg-icons"


const ServicesCountSold = ({service}) => {
    return (
        <div className="flex flex-col gap-4 w-1/4 max-md:text-xs flex-grow  drop-shadow-lg">
            <div className="p-4 rounded-t-3xl h-1/2 rounded-b-lg shadow-xl flex items-center justify-between">
                <h1 id="title" className="text-PrimColor text-sm text-opacity-50">Service Count</h1>
                <h2 className="font-bold text-xl text-PrimColor"> {service.count} </h2>
            </div>
            <div className="p-4 rounded-b-3xl h-1/2 rounded-t-lg shadow-xl flex items-center justify-between">
                <h1 id="title" className="text-PrimColor text-sm text-opacity-50">Sold</h1>
                <div className="flex text-PrimColor items-center gap-1">
                    <h2 className="font-bold text-xl "> {service.Sold} </h2>
                    <FontAwesomeIcon icon={faArrowCircleUp} className="text-3xl" />
                </div>
            </div>
        </div>
    )
}

export default ServicesCountSold