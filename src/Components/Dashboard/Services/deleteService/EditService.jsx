import TextGradient from '../../../textGradient/TextGradient';
import Logo from '../../../logo/Logo';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { baseURL, GET_SERVICE, UPDATE_SERVICE } from '../../../Variables/Variables';
import InputComp from '../../../input/InputComp';

export default function EditService() {
    const navigate = useNavigate()
    const [form, setForm] = useState({
    });
    const { id } = useParams();

    useEffect(() => {
        console.log(id)
        try {
            const response = axios.get(`${baseURL}/${GET_SERVICE}/${id}`, {
                withCredentials: true,
            }).then((res) =>
                setForm({
                    service: res.data.data.service,
                    description: res.data.data.description,
                    price: res.data.data.price
                })
            );
        } catch (err) {
            console.error("Delete Error", err);
        }

    }, [])

    const handleChange = (e) => {
        setForm((form) => ({ ...form, [e.target.name]: e.target.value }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = await axios.put(`${baseURL}/${UPDATE_SERVICE}/${id}`, form, {
                withCredentials: true,
            }).then((res) => {
                navigate('/work/personalspace/services')
            });
        } catch (err) {
            console.log("Updating service Error");
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
                        <h2 className='text-center'><TextGradient size='36px' weight='900' text='Edit a Service' /></h2>
                        <p className=' text-center text-[#777775] mb-10'>Get paid using your skills.</p>
                    </div>
                    <form onSubmit={handleSubmit} className='flex flex-col gap-4 items-center w-1/2 max-md:w-4/5 max-lg:2/3'>
                        <InputComp type="text" name="service" id="service" onchange={(event) => handleChange(event)} value={form.service} className='w-full text-sm outline-none px-4 py-3 mx-auto' placeholder='Name' required />
                        <InputComp type="text" name="description" id="description" onchange={(event) => handleChange(event)} value={form.description} className='w-full text-sm outline-none px-4 py-3 mx-auto' placeholder='Description' required />
                        <InputComp type="text" name="price" id="price" onchange={(event) => handleChange(event)} value={form.price} className='w-full text-sm outline-none px-4 py-3 mx-auto' placeholder='Price' required />
                        <button type='submit'
                            className='bg-gradient-to-r from-SecColor to-PrimColor mt-16 font-Unbounded font-bold text-xl w-full px-2 text-white py-3 rounded-2xl'>
                            Update Service
                        </button>
                    </form>


                </motion.div>
            </div>
        </>
    )
}