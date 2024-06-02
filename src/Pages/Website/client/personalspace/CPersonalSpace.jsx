import { Outlet } from "react-router-dom"
import Header from "../../../../Components/header/Header"
import { useState } from "react"
import Sidebar from "../../../../Components/Dashboard/Sidebar/Sidebar"
const CPersonalSpace = () => {
    const themeClass = "client-theme";
    return (
        <div className={themeClass}>     
        <Header /> 
            <div className="grid grid-cols-12 px-20 pt-20 max-lg:px-12 max-md:px-6 max-md:flex max-md:flex-col max-md:px-0 max-md:justify-center">
                    <div className="col-span-3 max-md:flex max-md:justify-center">
                        <Sidebar isClient={true} />
                    </div>
                    <div className="col-span-9">
                        <Outlet />
                    </div>
            </div>
        </div>
    )
}

export default CPersonalSpace