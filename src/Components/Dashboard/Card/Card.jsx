import { faArrowDown, faArrowUp, faChevronUp } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


const Card = ({profit}) => {

    return (
        <div className="hover:-translate-y-3 cursor-pointer shadow-xl transition-all duration-300 w-full lg:mt-4 h-fit hover:shadow-emerald-200 rounded-2xl p-8">
            <div id="head" className="flex items-center justify-between">
                <p className="text-PrimColor text-opacity-60 font-semibold px-1">Profit</p>
                <select name="" id="" className="text-gray-400 outline-none hover:text-gray-600 cursor-pointer text-xs">
                    <option value="Total">Total</option>
                    <option value="This month">This month</option>
                </select>
            </div>
            <div className="amount text-5xl font-bold text-PrimColor mb-3 mt-2">{profit.amount}</div>
            <div className="stats flex items-center ">
                {profit.gain[0] == "+" ? <FontAwesomeIcon icon={faArrowUp} className="bg-PrimColor text-white p-2 mr-1 rounded-full" /> : <FontAwesomeIcon icon={faArrowDown} className="bg-red-500 text-white p-2 mr-1 rounded-full" />}
                
                <div className="">
                    <div id="pourcentage" className={`text-lg font-bold ${profit.gain[0] == "+" ? "text-PrimColor" : "text-red-500"}`}>{profit.gain}</div>
                    <div className="text-xs text-gray-400">Over last month</div>
                </div>
            </div>
        </div>
    )
}

export default Card