import React, { useEffect, useState } from 'react'
import { GET_HOME_SERVICES, baseURL } from '../../Variables/Variables';
import axios from 'axios';
import BanButton from '../banButton/BanButton';

export default function AdminClients() {
  const [clients, setClients] = useState([])

    // Generate multiple random projects
    useEffect(() => {

        const getClients = async (e) => {
            try {
                const response = await axios.get(`${baseURL}/api/admin/all_users`, {
                    withCredentials: true,
                });
                const users = response.data.filter(user => user.role === 'user');
                setClients(users);
                console.log(clients);
            } catch (error) {
                console.error("Error:", error);
            }
        };
        // console.log(projects)
        getClients();
    }, []);
  return (
    <table className='mt-5 max-h-[700px] overflow-auto'>
      <thead>
        <tr>
          <th className='px-6 py-3 text-left text-[10px] font-normal font-Unbounded uppercase tracking-wider'>Freelancer</th>
          <th className='px-6 py-3 text-left text-[10px] font-normal font-Unbounded uppercase tracking-wider'>Projects</th>
          <th className='px-6 py-3 text-left text-[10px] font-normal font-Unbounded uppercase tracking-wider'>Services</th>
          <th className='px-6 py-3 text-left text-[10px] font-normal font-Unbounded uppercase tracking-wider'>Reports</th>
          <th className='px-6 py-3 text-left text-[10px] font-normal font-Unbounded uppercase tracking-wider'>Profit</th>
          <th className='px-6 py-3 text-left text-[10px] font-normal font-Unbounded uppercase tracking-wider'></th>
        </tr>
      </thead>
      <tbody>
      {clients.map((client, index) => (
          <tr key={index} >
            <td className='px-6 py-4 whitespace-nowrap text-SecColor font-Unbounded flex items-center'>
              <img src={client.photo} alt="photo" className='rounded-full w-8 h-8 border border-SecColor mr-2' />
              <div className="">{`${client.firstName} ${client.lastName}`}</div>
            </td>
            <td className='px-6 py-4 whitespace-nowrap font-Unbounded text-sm'>10</td>
            <td className='px-6 py-4 whitespace-nowrap font-Unbounded'>3</td>
            <td className='px-6 py-4 whitespace-nowrap font-Unbounded'>12</td>
            <td className='px-6 py-4 whitespace-nowrap font-Unbounded font-bold text-SecColor'>$0</td>
            <td className='px-6 py-4 whitespace-nowrap'>
              <BanButton id={client._id} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
