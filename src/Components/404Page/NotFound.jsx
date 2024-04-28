import bnadem from "../../assets/404/pexels-tima-miroshnichenko-5725432.png"
import bg from '../../assets/404/pexels-tima-miroshnichenko-5725432 (1).png';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
const NotFound = () => {

    return(

        <div 
        className="flex flex-col p-20 items-center h-screen relative">

            <h1 className=" relative z-10 text-[200px] text-yellow-400 font-bold">404!</h1>
            <img className=" pointer-events-none z-20  absolute bottom-0 left-0 w-full  h-screen object-cover"  src={bnadem} alt="zbi" />
            <img className=" pointer-events-none -z-0  absolute bottom-0 w-full left-0 h-screen object-cover" src={bg} alt="zbi" />
            <Link to='/' className="z-40 flex flex-col items-center gap-12 pt-28 text-center">
                <p className="font-Unbounded text-white z-30 text-2xl">It looks like we can not find what you are looking for!</p>
                <div className="bg-white px-3 py-1 flex gap-2 items-center justify-center rounded-full ">
                    <FontAwesomeIcon icon={faChevronLeft} className="text-xs text-black font-bold" />
                    <p className="font-bold">Back</p>
                </div>
            </Link>
        </div>
    )
}

export default NotFound