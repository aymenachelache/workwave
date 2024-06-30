import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { GETUSERBYID, baseURL } from '../../../Components/Variables/Variables';
import Logo from '../../../Components/logo/Logo';

export default function ProfilePage() {
    const { userId } = useParams();
    const [data, setData] = useState();
    console.log(userId)
    useEffect(() => {
        const getProfile = async () => {
            try {
                const response = await axios.get(`${baseURL}/${GETUSERBYID}/${userId}`, {
                    withCredentials: true,
                }).then((res) => { setData(res.data.data), console.log(res.data.data) });
            } catch (error) {
                console.error("Error:", error);
            }
        }
        getProfile();

    }, []);

    console.log(data);
    return (
        <div>
            <div className="bg-gray-100">
                <div className="container mx-auto py-8">
                    <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
                        <div className="col-span-4 sm:col-span-3">
                            <div className="bg-white shadow rounded-lg p-6">
                                <div className='text-center flex justify-center items-center mb-6'>
                                    <Logo />
                                </div>
                                <div className="flex flex-col items-center">
                                    <img
                                        src={data?.photo == "" || data?.photo == null ? "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" : data?.photo}
                                        className="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0"
                                    />
                                    <h1 className="text-xl font-bold text-nowrap">{data?.firstName}</h1>
                                    <h1 className="text-xl font-bold text-nowrap">{data?.lastName}</h1>
                                    <p className="text-gray-700 uppercase">{data?.role == "user" ? "CLIENT" : data?.role}</p>
                                    <div className="mt-6 flex flex-col gap-4 items-center">
                                        <a
                                            href="#"
                                            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
                                        >
                                            Contact
                                        </a>
                                        <div>

                                        </div>
                                    </div>
                                </div>
                                {data?.role == "freelencer" &&
                                    <div className="flex flex-col">
                                        <span className="text-gray-700 uppercase font-bold tracking-wider mb-2">
                                            Portfolio URL :
                                        </span>
                                        <a
                                            href={data?.portfolio_url}
                                            target='_blank'
                                            className="overflow-hidden text-gray-700 px-4 rounded"
                                        >
                                            {data?.portfolio_url}

                                        </a>
                                    </div>
                                }

                                <hr className="my-6 border-t border-gray-300" />
                                {data?.role == "freelencer" &&
                                    <div className="flex flex-col">
                                        <span className="text-gray-700 uppercase font-bold tracking-wider mb-2">
                                            Skills
                                        </span>
                                        <ul>
                                            {data?.skills.map((skill, key) =>
                                                <div key={key}>
                                                    <li key={key} className="mb-2">{skill}</li>
                                                </div>
                                            )}
                                        </ul>
                                    </div>
                                }
                            </div>
                        </div>
                        <div className="col-span-4 sm:col-span-9">
                            <div className="bg-white shadow rounded-lg p-6">
                                <h2 className="text-xl font-bold mb-4">About Me</h2>
                                <p className="text-gray-700">
                                    {data?.description}
                                </p>                                
                                {data?.role == "freelencer" &&
                                    <h2 className="text-xl font-bold mt-6 mb-4">Certificates</h2>

                                }
                                <div>
                                    {data?.certificate.map((el, key) =>
                                        <div className="mb-6" key={key}>
                                            <div className="flex justify-between flex-wrap gap-2 w-full">
                                                <img src={el?.url} className='mx-auto' alt="" />
                                            </div>
                                        </div>)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
