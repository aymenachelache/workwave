
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./FreelanceCard.scss"
import { faCircleExclamation, faUser } from "@fortawesome/free-solid-svg-icons"



const FreelanceCard = ({props, isSlides}) => {
    return (
        <div id="container" className={`w-[60%] rounded-3xl mt-10 ${isSlides ? "p-10" : "w-full p-5"}`}>
            <div className="flex justify-between h-[30%]">
                <div id="text" className={isSlides ? "" : "w-[80%]"}>
                    <h1 className={`text-2xl font-bold ${isSlides ? "" : "text-lg"}`}>
                        {props.title}
                    </h1>
                    <h2 className={` font-light opacity-65 text-sm ${isSlides ? "" : "text-xs mt-1"}`}>
                        {props.type}
                    </h2>
                </div>
                <div id="price" className={isSlides ? "" : "w-[30%]"}>
                    <div id="price" className="text-xl font-bold"> {props.price} </div>
                    <div id="age" className="opacity-65 text-sm"> {props.age} </div>
                </div>
            </div>
            <div id="description" className={`${isSlides ? "mt-8" : "text-sm mt-8"} h-[14%]`}>
                {props.description}
            </div>
            <div id="tags" className="flex my-8">
                {props.tags.map((tag, index) => {
                    return <div id="tag" key={index} className={`px-[2%] py-[0.8%] mx-2 rounded-full text-xs font-semibold cursor-pointer ${index == 0 ? "ml-0" : "mx-2"}`}> {tag} </div>
                })}
            </div>
            <div className="flex justify-between mt-12">
                <div id="client" className="flex items-center">
                    <FontAwesomeIcon icon={faUser} className="border-2 p-1 border-gray-300 text-gray-400 rounded-full" />
                    <div id="client-name" className="mx-2"> {props.client} </div>
                </div>
                <div id="buttons" className="flex items-center justify-center">
                    <button id="report" className="text-red-500 border-2 border-red-500 hover:bg-red-500 transition-all duration-200 hover:text-gray-50 rounded-xl flex justify-between items-center px-2 py-2">
                        {isSlides ? <h3 className='text-sm mr-2'>Report</h3> : ""}
                        <FontAwesomeIcon icon={faCircleExclamation} />
                    </button>
                    <button id="place-a-bid" className="text-gray-50 px-4 py-2 rounded-xl font-semibold ml-3 transition-all duration-300 hover:-translate-y-1 hover:drop-shadow-xl">
                        Place a bid
                    </button>
                </div>
            </div>
        </div>
    )
}


export default FreelanceCard