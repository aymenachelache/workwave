import { Outlet } from "react-router-dom"
import Header from "../../../../Components/header/Header"
import { useState } from "react"
import Sidebar from "../../../../Components/Dashboard/Sidebar/Sidebar"
import FDashboard from "./freelancerDashboard/FDashboard"

const FPersonalSpace = () => {

    return (
        <div className="">     
        <Header /> 
            <div className="grid grid-cols-12 px-20 pt-20 max-lg:px-12 max-md:flex max-md:flex-col max-md:px-0 max-md:justify-center">
                    <div className="col-span-3 max-md:flex max-md:justify-center">
                        <Sidebar isClient={false}/>
                    </div>
                    <div className="col-span-9">
                        <Outlet />
                    </div>
            </div>
        </div>
    )
}

export default FPersonalSpace