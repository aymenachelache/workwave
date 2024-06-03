import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CREATE_PROJECT, EDIT_NEED, GET_SINGLE_NEED, baseURL } from '../../../Variables/Variables';
import TextGradient from '../../../textGradient/TextGradient';
import Logo from '../../../logo/Logo';
import InputComp from '../../../input/InputComp';

export default function EditNeed() {
    const navigate = useNavigate()
    const {id} = useParams();
    const [form, setForm] = useState({})
    useEffect( () => {
        const getNeed = async() => {
            try{
                const data = await axios
                    .get(`${baseURL}/${GET_SINGLE_NEED}/${id}`, {
                        withCredentials: true,
                    })
                    .then((res) => {
                        console.log(res.data);
                        setForm({
                            title: res.data.title,
                            description: res.data.description,
                            amount: res.data.amount
                        });
                    });
            } catch(err){
                console.log(err)
            }
        }
        getNeed()
    } , [])    

    const handleChange = (e) => {
        setForm((form) => ({ ...form, [e.target.name]: e.target.value }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        try {
            const data = await axios
                .put(`${baseURL}/${EDIT_NEED}/${id}`, form, {
                    withCredentials: true,
                })
                .then((res) => {
                    navigate('/hire/personalspace/needs')
                });
        } catch (err) {
            console.log("creating project Error");
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
                    className="boxx sm:w-8/12 md:w-4/6 mx-auto mt-5 flex flex-col items-center ">
                    <div className="title my-10">
                        <h2 className='text-center'><TextGradient size='36px' weight='900' text='Edit Your Need' /></h2>
                    </div>
                    <form onSubmit={handleSubmit} className='flex flex-col gap-4 items-center w-1/2 max-md:w-4/5 max-lg:2/3'>
                        <InputComp type="text" value={form.title} name="title" id="title" onchange={(event) => handleChange(event)} className='w-full text-sm outline-none px-4 py-3 mx-auto' placeholder='Title' required />
                        <InputComp type="text" value={form.description} name="description" id="description" onchange={(event) => handleChange(event)} className='w-full text-sm outline-none px-4 pt-3 pb-20 mx-auto' placeholder='Description' required />
                        <InputComp type="number" value={form.amount} name="amount" id="amount" onchange={(event) => handleChange(event)} className='w-full text-sm outline-none px-4 py-3 mx-auto' placeholder='Amount' required />

                        <button type='submit'
                            className='bg-gradient-to-r from-SecColor to-PrimColor mt-5 font-Unbounded font-bold text-xl w-full px-2 text-white py-3 rounded-2xl'>
                            Save
                        </button>
                    </form>


                </motion.div>
            </div>
        </>
    )
}