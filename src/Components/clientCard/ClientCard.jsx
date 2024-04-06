
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./ClientCard.scss"
import { faCircleExclamation, faUser } from "@fortawesome/free-solid-svg-icons"



const FreelanceCard = ({props, isSlides}) => {
    return (
        <div id="container" className={`max-md:w-[80%] max-sm:w-[95%] w-[60%] rounded-3xl mt-10 ${isSlides ? "max-sm:p-5 p-10" : "w-full p-5"}`}>
            <div className="flex justify-between h-[30%] max-sm:flex-col">
                <div id="text" className={isSlides ? "" : "w-[80%]"}>
                    <h1 className={`max-md:text-lg text-2xl font-bold ${isSlides ? "" : "text-lg"}`}>
                        {props.title}
                    </h1>
                    <h2 className={`font-light opacity-65 text-sm ${isSlides ? "" : "text-xs mt-1"}`}>
                        {props.type}
                    </h2>
                </div>
                <div id="price" className={isSlides ? "mt-2" : "w-[30%]"}>
                    <div id="price" className="text-xl font-bold"> {props.price} </div>
                    <div id="age" className="opacity-65 text-sm"> {props.age} </div>
                </div>
            </div>
            <div id="description" className={`${isSlides ? "mt-8" : "text-sm mt-8"} h-[14%]`}>
                {props.description}
            </div>
            <div className="flex justify-between mt-12">
                <div id="client" className="flex items-center">
                    <FontAwesomeIcon icon={faUser} className="border-2 mr-1 p-2 h-6 border-gray-300 text-gray-400 rounded-full" />
                    <div className="text">
                        <div id="client-name" className="mx-2 font-bold"> {props.client} </div>
                        <div id="client-job" className="mx-2 text-xs font-light"> {props.job} </div>
                    </div>
                </div>
                <div id="buttons" className="flex items-center justify-center">
                    <button id="report" className="text-red-500 max-sm:hidden border-2 border-red-500 hover:bg-red-500 transition-all duration-200 hover:text-gray-50 rounded-xl flex justify-between items-center px-2 py-2">
                        {isSlides ? <h3 className='text-sm mr-2 max-md:hidden'>Report</h3> : ""}
                        <FontAwesomeIcon icon={faCircleExclamation} />
                    </button>
                    <button id="place-a-bid" className={`text-gray-50 px-4 py-2 rounded-xl font-bold ml-3 transition-all duration-300 hover:-translate-y-1 hover:drop-shadow-xl`}>
                        {isSlides ? "Hire Freelancer" : "Hire"}
                    </button>
                </div>
            </div>
        </div>
    )
}


export default FreelanceCard