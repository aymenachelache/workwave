import { Avatar } from "@mui/material"

const ClientCard = () => {
    return (
        <div className="hover:-translate-y-3 cursor-pointer w-[40%] shadow-xl transition-all duration-300 lg:mt-4 max-lg:w-fit h-fit hover:shadow-emerald-200 rounded-2xl p-8">
            <h1 className="text-PrimColor text-opacity-60 font-semibold mb-4">Contact Client</h1>
            <div className="flex items-center gap-2">
                <Avatar alt="Remy Sharp" src="/static/images/avatar/3.jpg" />
                <div id="text" className="w-[70%]">
                    <h1 className="clientname text-SecColor font-bold w-[80%]">Heythem Laouici</h1>
                    <p id="description" className="text-xs font-Unbounded w-3/4 line-clamp-2 overflow-hidden text-gray-500 ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat tempora nihil consectetur voluptatum voluptas earum alias, libero esse, laborum excepturi dignissimos, facere aliquam! Eaque eos labore neque voluptate suscipit aperiam!
                    </p>
                </div>
                <div className="">
                    <div id="time" className="text-gray-400">58m</div>
                    <div id="notifs" className="bg-red-500 rounded-full p-[2px] text-center text-white font-bold">2</div>
                </div>

            </div>
        </div>
    );
};

export default ClientCard