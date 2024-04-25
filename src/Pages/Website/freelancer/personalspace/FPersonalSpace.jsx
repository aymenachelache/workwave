import { Outlet } from "react-router-dom"
import Header from "../../../../Components/header/Header"
import { useState } from "react"
import Sidebar from "../../../../Components/Dashboard/Sidebar/Sidebar"
import FDashboard from "./freelancerDashboard/FDashboard"

const FPersonalSpace = () => {

    return (
        <div className="">     
        <Header /> 
            <div className="flex">
                    <Sidebar />
                    <div className="w-2/3">
                        <Outlet context={<FDashboard />} />
                    </div>
            </div>
        </div>
    )
}

export default FPersonalSpace