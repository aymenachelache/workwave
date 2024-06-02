import React from 'react'
import { baseURL } from '../../Variables/Variables';
import axios from 'axios';

const UnbanButton = ({id}) => {

    const Block = async () => {
        try {
            const response = await axios.put(`${baseURL}/api/admin/deblock/${id}`, {} , {
                withCredentials: true,
            });
            console.log(response);
        } catch (error) {
            console.error("Error:", error);
        }
    };

  return (
    <button 
    onClick={Block}
    className='border-2 border-red-500 px-3 py-2 text-red-500 font-Unbounded rounded-xl hover:bg-red-500 hover:text-white'>
        Enable
    </button>
  )
}

export default UnbanButton
