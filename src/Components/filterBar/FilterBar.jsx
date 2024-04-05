import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faMagnifyingGlass, faSliders, faThumbTack } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom";
import "./FilterBar.scss"
import { useState, useEffect } from "react";



const FilterBar = () => {
    const [isFixed, setIsFixed] = useState(true)
    
    return(

        <form id="FilterBar" className={`flex justify-center mt-16 mx-20 drop-shadow-xl bg-white rounded-br-3xl fixed top-0 rounded-bl-3xl p-5 w-[70%] z-10 ${isFixed ? "" : "opacity-0 hover:opacity-100 transition-all duration-300"}`}>
                <FontAwesomeIcon icon={faThumbTack} className={`absolute right-4 top-2 rotate-45 text-gray-300 text-sm hover:text-gray-400 cursor-pointer ${isFixed ? "text-gray-500" : ""}`}
                    onClick={() => setIsFixed(pv => !pv)}
                />
                <div id="clientNeeds" className="p-10 flex gap-3 justify-center text-sm w-full">
                    <div id="search" className="border border-gray-200 flex justify-between items-center text-gray-300 rounded-xl w-1/5">
                        <input type="search" placeholder="Search" className="outline-none placeholder:text-gray-300" />
                        <FontAwesomeIcon icon={faMagnifyingGlass} className=""/>
                    </div>
                    <div id="search" className="border border-gray-200 flex justify-between items-center text-gray-300 rounded-xl w-1/6">
                        <select name="" id="categorie" className="outline-none">
                            <option value="Categorie" className="">Categorie</option>
                        </select>
                        <FontAwesomeIcon icon={faChevronDown} className=""/>
                        
                    </div>
                    
                    <div id="search" className="border border-gray-200 flex justify-between items-center text-gray-300 rounded-xl w-1/5">
                    <select name="" id="sub-categorie" className="outline-none">
                            <option value="Sub-Categorie" className="">Sub-Categorie</option>
                        </select>
                        <FontAwesomeIcon icon={faChevronDown} className=""/>
                    </div>
                    <div className="border relative border-gray-200 flex justify-between items-center text-gray-300 rounded-xl w-1/4">
                        <input type="number" name="" id="" placeholder="Min-Budget" className="placeholder:text-gray-300 outline-none appearance-none bg-transparent w-1/2" />
                        <input type="number" name="" id="" placeholder="Max-Budget" className="placeholder:text-gray-300 outline-none appearance-none bg-transparent w-1/2" />
                        
                    </div>
                    <Link className={'btn block w-1/5 flex justify-around items-center'} >
                        <span className='text-lg font-extrabold primaryfont block'>Filter</span>
                        <FontAwesomeIcon icon={faSliders} className="h-5"/>
                    </Link>
                </div>
            </form>
    )
}

export default FilterBar