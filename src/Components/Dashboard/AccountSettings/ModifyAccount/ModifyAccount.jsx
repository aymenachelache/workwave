import { lastlogins } from "./LastLogins"

const ModifyAccount = () => {

    return (
        
        <div className="p-8 flex gap-6">
            <div id="head" className="shadow-xl p-6 rounded-2xl">
                <p className="text-PrimColor text-opacity-60 font-semibold pb-6">Personal Information</p>
                <form action="" className="flex flex-col gap-5">
                    <div className="flex gap-5">
                        <input type="text" value={"Heythem"} className="p-2 border-2 border-gray-300 rounded-xl" />
                        <input type="text" value={"Laouici"} className="p-2 border-2 border-gray-300 rounded-xl" />
                    </div>
                    <input type="email" value={"heythem@workwave.com"} className="p-2 border-2 border-gray-300 rounded-xl" />
                    <select id="currencies" className="p-2 px-8 border-2 border-gray-300 rounded-xl font-Unbounded">
                        <option value="">US Dollars</option>
                        <option value="">DZ Dinar</option>
                        <option value="">Euro</option>
                        <option value="">Pound</option>
                    </select>
                    <select id="religion" className="p-2 border-2 border-gray-300 rounded-xl">
                        <option value="volvo">Algeria</option>
                        <option value="saab">France</option>
                        <option value="opel">Tunis</option>
                        <option value="audi">Morocco</option>
                    </select>
                    <div id="number" className="flex gap-6">
                        <input type="number" placeholder="+213" value="+213" id="" className="w-1/6 p-2 border-2 border-gray-300 rounded-xl placeholder:text-gray-900"/>
                        <input type="number" placeholder="552 55 65 55" id="" className="p-2 border-2 flex-grow border-gray-300 rounded-xl placeholder:text-gray-900"/>

                    </div>

                    <button type="button"
                    className="bg-gradient-to-r from-SecColor to-PrimColor text-white font-bold font-Unbounded text-xl p-4 rounded-2xl"
                    >
                        Apply Changes
                    </button>
                </form>
            </div>

            <div className="flex flex-col gap-4 flex-grow">
                <div id="head" className="shadow-xl p-6 rounded-2xl">
                    <p className="text-PrimColor text-opacity-60 font-semibold pb-6">Change Password</p>
                    <form action="" className="flex flex-col gap-5">
                        
                        <input type="text" placeholder="Current Password" className="p-3 border-2 rounded-2xl" />
                        <input type="text" placeholder="New Password" className="p-3 border-2 rounded-2xl" />
                        <input type="text" placeholder="Confirm New Password" className="p-3 border-2 rounded-2xl" />

                        <button type="button"
                        className="bg-gradient-to-r from-SecColor to-PrimColor text-white font-bold font-Unbounded text-xl p-4 rounded-2xl"
                        >
                        Change Password
                        </button>
                    </form>
                </div>

                <div className="flex flex-col gap-4 flex-grow">
                    <div id="head" className="shadow-xl p-6 rounded-2xl">
                        <p className="text-PrimColor text-opacity-60 font-semibold pb-6">Change Password</p>
                        <ul className="grid grid-cols-3">
                            <li className="col-span-1 text-gray-500">Date</li>
                            <li className="col-span-1 text-gray-500">IP Adress</li>
                            <li className="col-span-1 text-gray-500">Status</li>
                        </ul>
                        <div className="grid grid-cols-3">
                            {lastlogins.map((lastLogin, index) => {
                                return (
                                    <div className="pt-2 flex gap-10" key={index}>
                                        <div className="text-sm py-2">
                                            {lastLogin.date}
                                        </div>
                                        <div className="text-sm py-2">
                                            {lastLogin.ipAddress}
                                        </div>
                                        <div className="text-sm py-2">
                                            {lastLogin.status}
                                        </div>
                                    </div> 
                                )
                            })}
                        </div>
                    </div>
            
                </div>

            </div>

        </div>
    )
}

export default ModifyAccount