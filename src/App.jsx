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
import CreditCardInfo from './Pages/Website/register/work/creditCard/CreditCardInfo'
import AddSkills from './Pages/Website/register/work/addSkills/AddSkills'
import AddCertificate from './Pages/Website/register/work/addCertificate/AddCertificate'
import ProfileDetails from './Pages/Website/register/work/profileDetails/ProfileDetails'
import CongratulationsPage from './Pages/Website/register/work/congratulationsPage/CongratulationsPage'
import ForgetPassword from './Pages/Website/login/forgetPassword/ForgetPassword'
import AddInformation from './Pages/Website/login/forgetPassword/addInformation/AddInformation'
import VerificationCode from './Pages/Website/login/forgetPassword/verificationCode/VerificationCode'
import HelloAgain from './Pages/Website/login/forgetPassword/helloAgain/HelloAgain'
import HireSecondWelcome from './Pages/Website/register/work/HireSecondWelcome/HireSecondWelcome'
import Categories from './Pages/Website/landingPage/categories/Categories'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/hire' element={<LandingHire />} />
        <Route path='/categories' element={<Categories />} />
        <Route path='/login' element={<Login />} />
        <Route path='/login/forgetpassword' element={<ForgetPassword />}>
          <Route path='/login/forgetpassword/addinformation' element={<AddInformation />} />
          <Route path='/login/forgetpassword/addinformation/verificationcode' element={<VerificationCode />} />
          <Route path='/login/forgetpassword/addinformation/verificationcode/helloagain' element={<HelloAgain />} />
        </Route>
        <Route path='/register' element={<Register />} />
        <Route path='/register' element={<Work />}>
          {/* I Wnat to Work */}
          <Route path='work/createaccount' element={<CreateAccount />} />
          <Route path='work/createaccount/phoneandpassword' element={<PhoneAndPassword />} />
          <Route path='work/createaccount/phoneandpassword/paymentmethods' element={<PaymentMethods />} />
          <Route path='work/createaccount/phoneandpassword/paymentmethods/welcome' element={<WelcomePage />} />
          <Route path='work/createaccount/phoneandpassword/paymentmethods/creditcardinformation' element={<CreditCardInfo />} />
          <Route path='work/createaccount/phoneandpassword/paymentmethods/creditcardinformation/welcome' element={<WelcomePage />} />
          <Route path='work/createaccount/phoneandpassword/paymentmethods/creditcardinformation/welcome/addskills' element={<AddSkills />} />
          <Route path='work/createaccount/phoneandpassword/paymentmethods/creditcardinformation/welcome/addskills/addcertificate' element={<AddCertificate />} />
          <Route path='work/createaccount/phoneandpassword/paymentmethods/creditcardinformation/welcome/addskills/addcertificate/profiledetails' element={<ProfileDetails />} />
          <Route path='work/createaccount/phoneandpassword/paymentmethods/creditcardinformation/welcome/addskills/addcertificate/profiledetails/congratulations' element={<CongratulationsPage />} />
          {/* I Wnat to Hire */}
          <Route path='hire/createaccount' element={<CreateAccount />} />
          <Route path='hire/createaccount/phoneandpassword' element={<PhoneAndPassword />} />
          <Route path='hire/createaccount/phoneandpassword/paymentmethods' element={<PaymentMethods />} />
          <Route path='hire/createaccount/phoneandpassword/paymentmethods/welcome' element={<WelcomePage />} />
          <Route path='hire/createaccount/phoneandpassword/paymentmethods/creditcardinformation' element={<CreditCardInfo />} />
          <Route path='hire/createaccount/phoneandpassword/paymentmethods/creditcardinformation/welcome' element={<WelcomePage />} />
          <Route path='hire/createaccount/phoneandpassword/paymentmethods/creditcardinformation/welcome/profiledetails' element={<ProfileDetails />} />
          <Route path='hire/createaccount/phoneandpassword/paymentmethods/creditcardinformation/welcome/profiledetails/congratulations' element={<HireSecondWelcome />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
