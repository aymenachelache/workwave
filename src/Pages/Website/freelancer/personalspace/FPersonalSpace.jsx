import { Outlet } from "react-router-dom"
import Header from "../../../../Components/header/Header"
import { useState } from "react"
import Sidebar from "../../../../Components/Dashboard/Sidebar/Sidebar"

const FPersonalSpace = () => {

    return (
        <div className="">     
        <Header /> 
            <div className="flex">
                    <Sidebar />
                    <Outlet />
            </div>
        </div>
    )
}

export default FPersonalSpace