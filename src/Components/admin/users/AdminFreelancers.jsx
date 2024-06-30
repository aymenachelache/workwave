import React, { useEffect, useState } from 'react'
import { GET_HOME_SERVICES, baseURL } from '../../Variables/Variables';
import axios from 'axios';
import BanButton from '../banButton/BanButton';

export default function AdminFreelancers() {
  const [freelancers, setFreelancers] = useState([])

    // Generate multiple random projects
    useEffect(() => {

        const getFreelancers = async (e) => {
            try {
                const response = await axios.get(`${baseURL}/api/admin/all_users`, {
                    withCredentials: true,
                });
                const users = response.data.filter(user => user.role === 'freelencer');
                setFreelancers(users);
                console.log(freelancers);
            } catch (error) {
                console.error("Error:", error);
            }
        };
        // console.log(projects)
        getFreelancers();
    }, []);
  return (
    <table className='mt-5'>
      <thead>
        <tr>
          <th className='px-6 py-3 text-left text-[10px] font-normal font-Unbounded uppercase tracking-wider w-1/4'>Freelancer</th>
          <th className='px-6 py-3 text-left text-[10px] font-normal font-Unbounded uppercase tracking-wider w-1/6'>Skills</th>
          <th className='px-6 py-3 text-left text-[10px] font-normal font-Unbounded uppercase tracking-wider w-1/12'>Services</th>
          <th className='px-6 py-3 text-left text-[10px] font-normal font-Unbounded uppercase tracking-wider w-1/12'>Projects</th>
          <th className='px-6 py-3 text-left text-[10px] font-normal font-Unbounded uppercase tracking-wider w-1/12'>Reports</th>
          <th className='px-6 py-3 text-left text-[10px] font-normal font-Unbounded uppercase tracking-wider w-1/12'>Profit</th>
          <th className='px-6 py-3 text-left text-[10px] font-normal font-Unbounded uppercase tracking-wider w-1/12'></th>
        </tr>
      </thead>
      <tbody>
      {freelancers.map((freelancer, index) => (
          <tr key={index} >
            <td className='px-6 py-4 whitespace-nowrap text-PrimColor font-Unbounded flex items-center'>
              <img src={freelancer.photo} alt="photo" className='rounded-full w-8 h-8 border border-PrimColor mr-2' />
              <div className="">{`${freelancer.firstName} ${freelancer.lastName}`}</div>
            </td>
            <td className='px-6 py-4 whitespace-nowrap font-Unbounded text-sm'>
            {freelancer.skills.map((skill, index) => (
              <div key={index}>{skill}</div>
            ))}</td>
            <td className='px-6 py-4 whitespace-nowrap font-Unbounded'>3</td>
            <td className='px-6 py-4 whitespace-nowrap font-Unbounded'>15</td>
            <td className='px-6 py-4 whitespace-nowrap font-Unbounded'>12</td>
            <td className='px-6 py-4 whitespace-nowrap font-Unbounded font-bold text-PrimColor'>$0</td>
            <td className='px-6 py-4 whitespace-nowrap'>
              <BanButton id={freelancer._id} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
