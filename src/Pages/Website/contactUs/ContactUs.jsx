import React, { useEffect, useState } from 'react';
import TextGradient from '../../../Components/textGradient/TextGradient';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Header from '../../../Components/header/Header';
import InputComp from '../../../Components/input/InputComp';
import axios from 'axios';
import { baseURL } from '../../../Components/Variables/Variables';

export default function ContactUs() {
    const navigate = useNavigate()
    const [message, setMessage] = useState("");
    const [projectId, setProjectId] = useState("");
    const [serviceId, setServiceId] = useState("");
    const { id } = useParams();

    useEffect(() => {
        setProjectId(id);
        setServiceId(id);
    }, []);

    console.log(id);

    const createReport = async (msg, projId, servId) => {
        try {
            console.log("Request payload:", { comment: message, projectId: projId, serviceId: servId }); // Log the request payload
            const response = await axios.post(`${baseURL}/api/enquiry/create`,
            {
                comment: message,
                projectId: projId,
                serviceId: servId
            },
            {
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true,
            }).then( () => navigate("/") );
            console.log(message)
            console.log(response.data);
        } catch (error) {
            console.error("Error:", error.response ? error.response.data : error.message);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        createReport(message, projectId, serviceId);
    }

    return (
        <>
            <Header />
            <section className="text-gray-600 body-font relative">
                <div className="container px-5 pt-24 pb-16 mx-auto">
                    <div className="flex flex-col text-center w-full mb-12">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900"></h1>
                        <TextGradient size='35px' weight='800' text='Report' />
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Please get in touch</p>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="lg:w-1/2 md:w-2/3 mx-auto">
                            <div className="flex flex-wrap -m-2">
                                
                                <div className="p-2 w-full">
                                    <div className="relative">
                                        <InputComp type="text" name="comment" id="comment" className='w-full text-sm outline-none px-4 pt-3 pb-16 mx-auto' 
                                        placeholder='Message' 
                                        value={message} 
                                        onchange={(e) => setMessage(e.target.value)} required />
                                    </div>
                                </div>

                                <div className="p-2 w-full">
                                    <button type='submit' className={'btn-gradient block w-full'}>
                                        <span className='text-lg font-extrabold primaryfont block'>Send</span>
                                    </button>
                                </div>
                                <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                                    <Link className="text-indigo-500" to="/">Go to Home</Link>
                                    <p className="leading-normal my-5">Amizour.
                                        <br />Béjaïa, Algeria
                                    </p>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}
