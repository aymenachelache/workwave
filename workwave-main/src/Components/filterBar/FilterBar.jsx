import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faMagnifyingGlass, faSliders, faThumbTack } from "@fortawesome/free-solid-svg-icons";
import "./FilterBar.scss";
import { useState } from "react";

const FilterBar = ({ filterForm, setFilterForm }) => {
    const [isFixed, setIsFixed] = useState(true);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFilterForm((prevForm) => ({
            ...prevForm,
            [name]: value,
        }));
    };

    return (
        <form id="FilterBar" className={`max-sm:hidden mt-16 drop-shadow-xl bg-white rounded-br-3xl fixed top-0 rounded-bl-3xl p-4 w-2/3 z-10 ${isFixed ? "" : "opacity-0 hover:opacity-100 transition-all duration-300"}`}>
            <FontAwesomeIcon icon={faThumbTack} className={`max-md absolute right-4 top-2 rotate-45 text-gray-300 text-sm hover:text-gray-400 cursor-pointer ${isFixed ? "text-gray-500" : ""}`}
                onClick={() => setIsFixed(pv => !pv)}
            />
            <div id="" className="max-md:text-xs p-10 flex gap-3 justify-center text-sm w-full">
                <div id="search" className="border border-gray-400 flex justify-between items-center text-gray-400 rounded-xl">
                    <input type="search" name="searchParam" id="searchParam" value={filterForm.searchParam} onChange={handleInputChange} placeholder="Search" className="outline-none placeholder:text-gray-300" />
                    <FontAwesomeIcon icon={faMagnifyingGlass} className="" />
                </div>
                <div id="search" className="border border-gray-400 flex justify-between items-center text-gray-400 rounded-xl">
                    <input type="number" name="minAmount" value={filterForm.minAmount} onChange={handleInputChange} placeholder="Min Budget" id="minAmount" className="outline-none placeholder:text-gray-300" />
                </div>
                <div id="search" className="border border-gray-400 flex justify-between items-center text-gray-400 rounded-xl">
                    <input type="number" name="maxAmount" value={filterForm.maxAmount} onChange={handleInputChange} placeholder="Max Budget" id="maxAmount" className="outline-none placeholder:text-gray-300" />
                </div>
            </div>
        </form>
    );
};

export default FilterBar;
