import React, { useEffect, useState } from 'react'
import { GET_HOME_SERVICES, baseURL } from '../../Variables/Variables';
import axios from 'axios';
import UnbanButton from '../banButton/UnbanButton';
import Header from '../../header/Header';

export default function BannedUsers() {
  const [bannedUsers, setBannedUsers] = useState([])

    // Generate multiple random projects
    useEffect(() => {

        const getBannedUsers = async (e) => {
            try {
                const response = await axios.get(`${baseURL}/api/admin/all_users`, {
                    withCredentials: true,
                });
                const users = response.data.filter(user => user.blocked === true);
                setBannedUsers(users);
                console.log(bannedUsers);
            } catch (error) {
                console.error("Error:", error);
            }
        };
        // console.log(projects)
        getBannedUsers();
    }, []);
  return (
    <div className='flex justify-center'>
        <Header />
        <table className='mt-20 max-h-[700px] overflow-auto'>
        <thead>
            <tr>
            <th className='px-6 py-3 text-left text-[10px] font-normal font-Unbounded uppercase tracking-wider'>Freelancer</th>
            <th className='px-6 py-3 text-left text-[10px] font-normal font-Unbounded uppercase tracking-wider'>Reports</th>
            <th className='px-6 py-3 text-left text-[10px] font-normal font-Unbounded uppercase tracking-wider'>Profit</th>
            <th className='px-6 py-3 text-left text-[10px] font-normal font-Unbounded uppercase tracking-wider'></th>
            </tr>
        </thead>
        <tbody>
        {bannedUsers.map((user, index) => (
            <tr key={index} >
                <td className='px-6 py-4 whitespace-nowrap text-SecColor font-Unbounded flex items-center'>
                <img src={user.photo} alt="photo" className='rounded-full w-8 h-8 border border-SecColor mr-2' />
                <div className="">{`${user.firstName} ${user.lastName}`}</div>
                </td>
                <td className='px-6 py-4 whitespace-nowrap font-Unbounded'>3</td>
                <td className='px-6 py-4 whitespace-nowrap font-Unbounded font-bold text-SecColor'>$0</td>
                <td className='px-6 py-4 whitespace-nowrap'>
                <UnbanButton id={user._id} />
                </td>
            </tr>
            ))}
        </tbody>
        </table>
    </div>
  )
}
