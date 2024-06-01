import './App.scss'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './Pages/Website/landingPage/LandingPage'
import Login from './Pages/Website/login/Login'
import Register from './Pages/Website/register/Register'
import LandingHire from './Pages/Website/landingPage/LandingHire'
import Work from './Pages/Website/register/work/Work'
import CreateAccount from './Pages/Website/register/work/createAccount/CreateAccount'
import PhoneAndPassword from './Pages/Website/register/work/phoneAndPassword/PhoneAndPassword'
import WelcomePage from './Pages/Website/register/work/welcomePage/WelcomePage'
import AddSkills from './Pages/Website/register/work/addSkills/AddSkills'
import AddCertificate from './Pages/Website/register/work/addCertificate/AddCertificate'
import ProfileDetails from './Pages/Website/register/work/profileDetails/ProfileDetails'
import CongratulationsPage from './Pages/Website/register/work/congratulationsPage/CongratulationsPage'
import ForgetPassword from './Pages/Website/login/forgetPassword/ForgetPassword'
import AddInformation from './Pages/Website/login/forgetPassword/addInformation/AddInformation'
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
import ClientHomePage from './Pages/Website/client/clientHomePage/ClientHomePage'
import FDashboard from './Pages/Website/freelancer/personalspace/freelancerDashboard/FDashboard'
import FPersonalSpace from './Pages/Website/freelancer/personalspace/FPersonalSpace'
import WorkingOn from './Pages/Website/freelancer/personalspace/Projects/WorkingOn/WorkingOn'
import { useEffect } from 'react'
import ProjectsHistory from './Pages/Website/freelancer/personalspace/Projects/History/ProjectsHistory'
import Services from './Pages/Website/freelancer/personalspace/Services/Services'
import NotFound from './Components/404Page/NotFound'
import ModifyAccount from './Pages/Website/freelancer/personalspace/ModifyAccount/ModifyAccount'
import addServicePage from './Components/Dashboard/Services/addServicePage/addServicePage'
import AddServicePage from './Components/Dashboard/Services/addServicePage/addServicePage'
import CheckEmail from './Pages/Website/login/checkEmail/CheckEmail'
import AddNeed from './Components/Dashboard/Projects/AddNeed/AddNeed'
import CPersonalSpace from './Pages/Website/client/personalspace/CPersonalSpace'
import CDashboard from './Pages/Website/client/personalspace/ClientDashboard/CDashboard'
import EditService from './Components/Dashboard/Services/deleteService/EditService'
import MyNeeds from './Pages/Website/client/personalspace/MyNeeds/MyNeeds'
import EditNeed from './Components/Dashboard/Projects/EditNeed/EditNeed'
import {Chat} from './Components/Chat/Chat'
import Admin from './Pages/Website/admin/Admin'
import Users from './Components/admin/users/Users'
import AdminFreelancers from './Components/admin/users/AdminFreelancers'
import AdminClients from './Components/admin/users/AdminClients'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={localStorage.getItem("role") == "freelancer" ? <FreelancerHomePage /> : localStorage.getItem("role") == "user" ? <ClientHomePage /> : <LandingPage />} />

        {/* PUBLIC ROUTES */}
        <Route path='chat' element={<Chat />} />
        <Route path='/hire' element={<LandingHire />} />
        <Route path='/categories' element={<Categories />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Work />}>
          <Route path='' element={<CreateAccount />} />
          <Route path='phoneandpassword' element={<PhoneAndPassword />} />
        </Route>
        <Route path='admin' element={<Admin />} >
          <Route path='users' element={<Users />} >
            <Route path='freelancers' element={<AdminFreelancers />} />
            <Route path='clients' element={<AdminClients />} />
          </Route>
        </Route>
          {/* PRIVATE ROUTES */}
        <Route element={<RequireAuth />}>
        <Route path='/choice' element={<Register />} />
        <Route path='/emailverfication' element={<VerificationEmail />} />
        <Route path='/register' element={<Work />}>
          <Route path='welcome' element={<WelcomePage />} />
          <Route path='welcome/addskills' element={<AddSkills />} />
          <Route path='welcome/addskills/addcertificate' element={<AddCertificate />} />
          <Route path='welcome/addskills/addcertificate/profiledetails' element={<ProfileDetails />} />
          <Route path='welcome/addskills/addcertificate/profiledetails/congratulations' element={<CongratulationsPage />} />
          <Route path='welcome/profiledetails' element={<ProfileDetails />} />
          <Route path='welcome/profiledetails/congratulations' element={<HireSecondWelcome />} />
        </Route>


          
        {/* FORGET PASSWORD */}
        <Route path='/login/forgetpassword' element={<ForgetPassword />}>
          <Route path='addinformation' element={<AddInformation />} />
          <Route path='addinformation/checkemail' element={<CheckEmail />} />
          {/* <Route path='/login/forgetpassword/addinformation' element={<HelloAgain />} /> */}
        </Route>
        <Route path='/api/user/reset-password/:token' element={<HelloAgain />} />

        {/* FREELANCER */}
        <Route path='/work/home' element={<FreelancerHomePage />} />
        <Route path='/work/addService' element={<AddServicePage />} />
        <Route path='/work/editservice/:id' element={<EditService />} />
        {/* Freelancer Dashboard */}
        <Route path='/work/personalspace' element={<FPersonalSpace />} >
          <Route path='dashboard' element={<FDashboard />} />
          <Route path='myprojects/workingon' element={<WorkingOn />} />
          <Route path='myprojects/history' element={<ProjectsHistory />} />
          <Route path='services' element={<Services />} />
          <Route path='settings/modifyaccount' element={<ModifyAccount />} />
        </Route>

        {/* CLIENT */}
        <Route path='/hire/home' element={<ClientHomePage />} />
        <Route path='/hire/addneed' element={<AddNeed />} />
        {/* ClientDashboard*/}
        <Route path='/hire/personalspace' element={<CPersonalSpace />} >
          <Route path='dashboard' element={<CDashboard />} />
          <Route path='myprojects/workingon' element={<WorkingOn />} />
          <Route path='myprojects/history' element={<ProjectsHistory />} />
          <Route path='needs' element={<MyNeeds />} />
          <Route path='needs/:id' element={<EditNeed />} />
          <Route path='settings/modifyaccount' element={<ModifyAccount />} />
          <Route path='chat' element={<Chat />} />
        </Route>
        </Route>

        {/* Contact US */}
        <Route path='/contactus' element={<ContactUs />} />
        {/* 404 Not found */}
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
