import { Outlet } from "react-router-dom"
import Header from "../../../../Components/header/Header"
import { useState } from "react"
import Sidebar from "../../../../Components/Dashboard/Sidebar/Sidebar"
import FDashboard from "./freelancerDashboard/FDashboard"

const FPersonalSpace = () => {

    return (
        <div className="">     
        <Header /> 
            <div className="grid grid-cols-12 px-20 pt-20">
                    <div className="col-span-3">
                        <Sidebar />
                    </div>
                    <div className="col-span-9">
                        <Outlet />
                    </div>
            </div>
        </div>
    )
}

export default FPersonalSpace