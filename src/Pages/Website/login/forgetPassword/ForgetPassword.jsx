import React, { useState } from 'react';
import './ForgetPassword.scss';
import { Link } from 'react-router-dom';
import Logo from '../../../../Components/logo/Logo';
import BackButton from '../../../../Components/backButton/BackButton';
import TextGradient from '../../../../Components/textGradient/TextGradient';
import { Outlet  } from "react-router-dom";


export default function ForgetPassword() {
  const [email, setEmail] = useState('');
  return (
    <>
      <div className="forget-password p-5">
        <Logo />
        <Outlet  context={{ email, setEmail }}  />
      </div>
    </>
  )
}