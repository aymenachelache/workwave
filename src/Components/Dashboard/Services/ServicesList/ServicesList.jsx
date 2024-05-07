import Service from "./Service"



const ServicesList = ({data}) => {
    return (
        <div className="shadow-xl rounded-2xl mt-10 p-5 h-[500px] overflow-auto">
            <p className="text-PrimColor text-opacity-60 font-semibold pb-3">Services</p>
            {
                data.map((dataPiece, index) => {
                    return (
                        <Service dataPiece={dataPiece} key={index} />
                    )
                })
            }
        </div>
    )
}

export default ServicesList