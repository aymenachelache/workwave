import Header from '../../../Components/header/Header'
import { Link, Outlet } from 'react-router-dom';

export default function Setting() {

    
    return (
        <>
            <Header />
            <div className="bg-white w-full flex flex-col gap-5 px-3 md:px-16 lg:px-28 md:flex-row text-[#161931] py-24">
                <aside className="hidden py-4 md:w-1/3 lg:w-1/4 md:block">
                    <div className="sticky flex flex-col gap-2 p-4 text-sm border-r border-indigo-100 top-12">
                        <h2 className="pl-3 mb-4 text-2xl font-semibold">Settings</h2>
                        <Link to="publicprofile" className="flex items-center px-3 py-2.5 font-bold bg-white  text-[#00AEEF] border rounded-full">
                            Pubic Profile
                        </Link>
                        <Link to="accountsetting"
                            className="flex items-center px-3 py-2.5 font-semibold  hover:text-indigo-900 hover:border hover:rounded-full">
                            Account Settings
                        </Link>
                        <Link to="notification"
                            className="flex items-center px-3 py-2.5 font-semibold hover:text-indigo-900 hover:border hover:rounded-full  ">
                            Notifications
                        </Link>
                        <Link to="/contactus"
                            className="flex items-center px-3 py-2.5 font-semibold hover:text-indigo-900 hover:border hover:rounded-full  ">
                            Contact Us
                        </Link>
                    </div>
                </aside>
                <Outlet />
            </div>


        </>
    )
}
