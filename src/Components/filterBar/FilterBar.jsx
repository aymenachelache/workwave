import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faMagnifyingGlass, faSliders, faThumbTack } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom";
import "./FilterBar.scss"
import { useState, useEffect } from "react";



const FilterBar = () => {
    const [isFixed, setIsFixed] = useState(true)
    
    return(

        <form id="FilterBar" className={`max-sm:hidden mt-16 drop-shadow-xl bg-white rounded-br-3xl fixed top-0 rounded-bl-3xl p-4 w-2/3 z-10 ${isFixed ? "" : "opacity-0 hover:opacity-100 transition-all duration-300"}`}>
                <FontAwesomeIcon icon={faThumbTack} className={`max-md absolute right-4 top-2 rotate-45 text-gray-300 text-sm hover:text-gray-400 cursor-pointer ${isFixed ? "text-gray-500" : ""}`}
                    onClick={() => setIsFixed(pv => !pv)}
                />
                <div id="" className="max-md:text-xs p-10 flex gap-3 justify-center text-sm w-full">
                    <div id="search" className="border border-gray-200 flex justify-between items-center text-gray-300 rounded-xl">
                        <input type="search" placeholder="Search" className="outline-none placeholder:text-gray-300" />
                        <FontAwesomeIcon icon={faMagnifyingGlass} className=""/>
                    </div>
                    <div id="search" className="border border-gray-200 flex justify-between items-center text-gray-300 rounded-xl">
                        <select name="" id="categorie" className="outline-none">
                            <option value="Categorie" className="">Categorie</option>
                        </select>
                        <FontAwesomeIcon icon={faChevronDown} className=""/>
                        
                    </div>
                    
                    <div id="search" className="border border-gray-200 flex justify-between items-center text-gray-300 rounded-xl">
                        <select name="" id="sub-categorie" className="outline-none">
                                <option value="Sub-Categorie" className="">Sub-Categorie</option>
                        </select>
                        <FontAwesomeIcon icon={faChevronDown} className=""/>
                    </div>
                    
                    <button className={'btn flex justify-around max-sm:flex-col" items-center'} >
                        <span className='max-md:text-sm text-lg font-extrabold font-Unbounded pr-10 block'>Filter</span>
                        <FontAwesomeIcon icon={faSliders} className="max-md:h-3 ml-1 h-4"/>
                    </button>
                </div>
            </form>
    )
}

export default FilterBar