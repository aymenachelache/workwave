import { useState } from "react"



const SendBtn = () => {
    const [clicked, setClicked] = useState(false);

    return (
       <button 
       className={`${!clicked ? "bg-PrimColor px-3" : "bg-green-800 px-4"}  py-2 rounded-full font-Unbounded text-white mr-1 my-1`}
       onClick={
        () => setClicked(true)
       }
       >
        {clicked ? "Sent" : "Send"}
       </button>
    )
}
export default SendBtn