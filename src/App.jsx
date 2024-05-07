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
import RequireAuth from './Pages/Auth/RequireAuth'
import Page404 from './Pages/Auth/Page404'
import ContactUs from './Pages/Website/contactUs/ContactUs'
import Setting from './Pages/Website/setting/Setting'
import RequireBack from './Pages/Auth/RequireBack'
import PubicProfile from './Pages/Website/setting/PubicProfile'
import AccountSetting from './Pages/Website/setting/AccountSetting'
import VerificationEmail from './Pages/Website/verificationEmail/VerificationEmail'
import RequireEmail from './Pages/Auth/RequireEmail'
import FreelancerHomePage from './Pages/Website/freelancer/freelancerHomePage/freelancerHomePage'
import ClientHomePage from './Pages/Website/clientHomePage/ClientHomePage'
import FDashboard from './Pages/Website/freelancer/personalspace/freelancerDashboard/FDashboard'
import FPersonalSpace from './Pages/Website/freelancer/personalspace/FPersonalSpace'
import WorkingOn from './Pages/Website/freelancer/personalspace/Projects/WorkingOn/WorkingOn'
import { useEffect } from 'react'
import ProjectsHistory from './Pages/Website/freelancer/personalspace/Projects/History/ProjectsHistory'
import Services from './Pages/Website/freelancer/personalspace/Services/Services'
import NotFound from './Components/404Page/NotFound'


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/hire' element={<LandingHire />} />
        <Route path='/categories' element={<Categories />} />
        <Route element={<RequireBack />}>
          <Route path='/login' element={<Login />} />
        </Route>
        <Route path='/choice' element={<Register />} />
        <Route path='emailverfication' element={<VerificationEmail />} />
        <Route path='/register' element={<Work />}>
          <Route path='' element={<CreateAccount />} />
          <Route path='phoneandpassword' element={<PhoneAndPassword />} />
          <Route path='welcome' element={<WelcomePage />} />
          <Route path='welcome/addskills' element={<AddSkills />} />
          <Route path='welcome/addskills/addcertificate' element={<AddCertificate />} />
          <Route path='welcome/addskills/addcertificate/profiledetails' element={<ProfileDetails />} />
          <Route path='welcome/addskills/addcertificate/profiledetails/congratulations' element={<CongratulationsPage />} />
          <Route path='welcome/profiledetails' element={<ProfileDetails />} />
          <Route path='welcome/profiledetails/congratulations' element={<HireSecondWelcome />} />
        </Route>

        <Route path='/login/forgetpassword' element={<ForgetPassword />}>
          <Route path='/login/forgetpassword/addinformation' element={<AddInformation />} />
          <Route path='/login/forgetpassword/addinformation/verificationcode' element={<VerificationCode />} />
          <Route path='/login/forgetpassword/addinformation/verificationcode/helloagain' element={<HelloAgain />} />
        </Route>


        {/* 404 Not found */}
        <Route path='*' element={<NotFound />} />

        {/* Contact US */}
        <Route path='/contactus' element={<ContactUs />} />

        <Route element={<RequireAuth />}>
          {/* Setting */}
          <Route path='/setting' element={<Setting />}>
            <Route path='publicprofile' element={<PubicProfile />} />
            <Route path='accountsetting' element={<AccountSetting />} />
          </Route>
        </Route>


        <Route path='/hire/home' element={<ClientHomePage />} />
        <Route path='/work/home' element={<FreelancerHomePage />} />
        <Route path='/work/personalspace' element={<FPersonalSpace />} >
          <Route  index  path='dashboard' element={<FDashboard />} /> 
          <Route  path='myprojects/workingon' element={<WorkingOn />} /> 
          <Route  path='myprojects/history' element={<ProjectsHistory />} /> 
          <Route  path='services' element={<Services />} /> 
        </Route>


      </Routes>
    </>
  )
}

export default App
