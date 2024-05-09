import TextGradient from '../../../textGradient/TextGradient';
import Logo from '../../../logo/Logo';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { baseURL, CREATE_SERVICE } from '../../../Variables/VariablesColors';

export default function AddServicePage() {
    const navigate = useNavigate()
    const [form, setForm] = useState({
        service: "",
        description: "",
        price: ""
      });

    const handleChange = (e) => {
        setForm((form) => ({ ...form, [e.target.name]: e.target.value }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        try {
          const data = await axios
            .post(`${baseURL}/${CREATE_SERVICE}`, form, {
              withCredentials: true,
            })
            .then(() => {
              navigate('/work/personalspace/services')
            });
        } catch (err) {
          setInvalidaDta(true);
          console.log("creating service Error");
          console.log(err);
        }
      };


    return (
        <>
            <div className="forget-password p-5">
                <Logo />
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="boxx sm:w-8/12 md:w-7/12 mx-auto mt-5 flex flex-col items-center ">
                        <div className="title mt-10">
                            <h2 className='text-center'><TextGradient size='36px' weight='900' text='Add a Service' /></h2>
                            <p className=' text-center text-[#777775] mb-10'>Get paid using your skills.</p>
                        </div>
                        <form action="" onSubmit={handleSubmit} className='flex flex-col gap-4 items-center w-1/2 max-md:w-4/5 max-lg:2/3'>
                            <input name='service' id='service' type="text" onChange={(event) => handleChange(event)} placeholder='Name' className='outline-none border-2 px-5 py-3 rounded-2xl w-full bg-gray-50 text-lg'/>
                            <input name='description' id='description'  type="text" onChange={(event) => handleChange(event)} placeholder='Description' className='outline-none border-2 px-5 py-3 rounded-2xl w-full bg-gray-50 text-lg'/>
                            <input name='price' id='price' type="text" onChange={(event) => handleChange(event)} placeholder='Price' className='outline-none border-2 px-5 py-3 rounded-2xl w-full bg-gray-50 text-lg'/>
                            <button type='submit'
                            className='bg-gradient-to-r from-SecColor to-PrimColor mt-16 font-Unbounded font-bold text-xl w-full px-2 text-white py-3 rounded-2xl'> 
                                Add a Service
                            </button>
                        </form>

                      
                </motion.div>
            </div>
        </>
    )
}