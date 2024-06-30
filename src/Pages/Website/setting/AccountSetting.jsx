
export default function AccountSetting() {
    return (
        <div className="w-full min-h-screen py-1 md:w-2/3 lg:w-3/4">
            <div className="p-2 md:p-4">
                <div className="w-full px-6 pb-8 mt-8 sm:max-w-xl sm:rounded-lg">
                    <h2 className="pl-6 text-2xl font-bold sm:text-xl">Account Setting</h2>
                    <div className="grid max-w-2xl mx-auto mt-8">
                        <div className="items-center text-[#202142]">
                            <div
                                className="flex flex-col items-center w-full mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6">
                                <div className="w-1/2">
                                    <label htmlFor="firstName"
                                        className="block mb-2 text-sm font-medium text-[#000]">Your Are a :</label>
                                    <input type="text" id="firstName" name="firstName"
                                        className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:focus:ring-[#00AEEF] focus:border-[#00AEEF] outline-[#00AEEF] block w-full p-2.5 "
                                        placeholder="Your first name" value={"Freelancer"} disabled required />
                                </div>

                            </div>



                            <div className="flex justify-start">
                                <button type="submit"
                                    className="text-white bg-[#00AEEF]  hover:bg-[#06a2dc] focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Save</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
