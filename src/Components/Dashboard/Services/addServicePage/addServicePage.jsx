import TextGradient from '../../../textGradient/TextGradient';
import Logo from '../../../logo/Logo';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { baseURL, CREATE_SERVICE } from '../../../Variables/Variables';
import InputComp from '../../../input/InputComp';

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
            <InputComp type="text" name="service" id="service" onchange={(event) => handleChange(event)} className='w-full text-sm outline-none px-4 py-3 mx-auto' placeholder='Title' required />
            <InputComp type="text" name="description" id="description" onchange={(event) => handleChange(event)} className='w-full text-sm outline-none px-4 py-3 mx-auto' placeholder='Description' required />
            <InputComp type="text" name="price" id="price" onchange={(event) => handleChange(event)} className='w-full text-sm outline-none px-4 py-3 mx-auto' placeholder='Price' required />
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
