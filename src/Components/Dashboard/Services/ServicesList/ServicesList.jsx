import Service from "./Service"

const dataPiece = {
    title : "Lorem ipsum dolor sit amet, elit elit elit elit ",
    description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    skills : ["Packaging Design", "Design", "Packaging Design"],
    cost : "120",
    sold : "4",
    totalProfit : "480"
}

const ServicesList = ({data}) => {
    return (
        <div className="shadow-xl rounded-2xl p-5">
            <p className="text-PrimColor text-opacity-60 font-semibold pb-3">Services</p>
            <Service dataPiece={dataPiece} />
        </div>
    )
}

export default ServicesList