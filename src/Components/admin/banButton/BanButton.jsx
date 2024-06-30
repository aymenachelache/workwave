import React from 'react'
import { baseURL } from '../../Variables/Variables';
import axios from 'axios';

const BanButton = ({id}) => {

    const Block = async () => {
        try {
            const response = await axios.put(`${baseURL}/api/admin/block/${id}`, {} , {
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
        Ban
    </button>
  )
}

export default BanButton
