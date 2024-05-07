import React, { useContext } from 'react';
import './Register.scss';
import Logo from '../../../Components/logo/Logo';
import Button from './../../../Components/Button/Button';
import BackButton from '../../../Components/backButton/BackButton';
import TextGradient from '../../../Components/textGradient/TextGradient';
import { Link } from 'react-router-dom';

export default function Register() {
  function handleClient() {
    localStorage.setItem("role", 'user');
  }
  function handleFreelancer() {
    localStorage.setItem("role", 'freelancer');
  }
  return (
    <>
      <div className="register p-5">
        <Logo />
        <div className="box sm:w-8/12 md:w-7/12 mx-auto mt-5">
          <BackButton />
          <div className="title my-10">
            <h2 className='text-center'><TextGradient size='26px' weight='900' text='Welcome to WorkWave!' /></h2>
            <p className='text-sm text-center text-[#777775] mb-10'>What brings you here?</p>
          </div>
        </div>
        <div className="cont flex flex-col lg:flex-row items-center justify-center gap-10 mt-10">
          <div className="left">
            <Link onClick={handleClient} to='/register/welcome'>
              <div className="hire cursor-pointer">
                <h3 className='text-2xl font-extrabold'>I want to hire</h3>
                <p className='text-sm'>Hire reliable freelancers from around the globe to work on your projects.</p>
              </div>
            </Link>
          </div>
          <div className="right">
            <Link onClick={handleFreelancer} to='/register/welcome'>
              <div className="work cursor-pointer">
                <h3 className='text-2xl font-extrabold'>I want to work</h3>
                <p className='text-sm'>Work as a freelancer on a projects of various categories and get paid.</p>
              </div>
            </Link>
          </div>
        </div>


      </div>
    </>
  )
}
