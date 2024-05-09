import { Link } from "react-router-dom"

const AddService = () => {
    return(
        <div className="flex flex-col justify-center items-center gap-6 p-4 pb-16">
            <p className="font-Unbounded text-center">You don't have any services, you can add 3 services at maximum</p>
            <Link to="/work/addService">
                <p className="bg-PrimColor text-white px-4 py-3 font-Unbounded rounded-2xl hover:-translate-y-1 transition-all duration-300">Add a service</p>
            </Link>
        </div>
    )
}

export default AddService