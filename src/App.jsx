import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './Pages/Website/landingPage/LandingPage'
import Login from './Pages/Website/login/Login'
import Register from './Pages/Website/register/Register'
import LandingHire from './Pages/Website/landingPage/LandingHire'
import Work from './Pages/Website/register/work/Work'
import CreateAccount from './Pages/Website/register/work/createAccount/CreateAccount'
import PhoneAndPassword from './Pages/Website/register/work/phoneAndPassword/PhoneAndPassword'
import PaymentMethods from './Pages/Website/register/work/paymentMethods/PaymentMethods'
import WelcomePage from './Pages/Website/register/work/welcomePage/WelcomePage'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/hire' element={<LandingHire />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/register/work' element={<Work />}>
          <Route path='createaccount' element={<CreateAccount />} />
          <Route path='createaccount/phoneandpassword' element={<PhoneAndPassword />} />
          <Route path='createaccount/phoneandpassword/paymentmethods' element={<PaymentMethods />} />
          <Route path='createaccount/phoneandpassword/paymentmethods/welcome' element={<WelcomePage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
