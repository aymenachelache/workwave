import './App.scss'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import LandingPage from './Pages/Website/landingPage/LandingPage'
import Login from './Pages/Website/login/Login'
import Register from './Pages/Website/register/Register'
import LandingHire from './Pages/Website/landingPage/LandingHire'
import Work from './Pages/Website/register/Work'
import CreateAccount from './Pages/Website/register/work/createAccount/CreateAccount'
import PhoneAndPassword from './Pages/Website/register/work/phoneAndPassword/PhoneAndPassword'
import PaymentMethods from './Pages/Website/register/work/paymentMethods/PaymentMethods'
import FreelancerHomePage from './Pages/Website/freelancer/freelancerHomePage/freelancerHomePage'
import ClientHomePage from './Pages/Website/clientHomePage/ClientHomePage'
import FDashboard from './Pages/Website/freelancer/personalspace/freelancerDashboard/FDashboard'
import FPersonalSpace from './Pages/Website/freelancer/personalspace/FPersonalSpace'
import WorkingOn from './Pages/Website/freelancer/personalspace/Projects/WorkingOn/WorkingOn'
import { useEffect } from 'react'
import ProjectsHistory from './Pages/Website/freelancer/personalspace/Projects/History/ProjectsHistory'


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/hire' element={<LandingHire />} /> 
        <Route path='/hire/home' element={<ClientHomePage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/register/work' element={<Work />}>
          <Route path='createaccount' element={<CreateAccount />} />
          <Route path='createaccount/phoneandpassword' element={<PhoneAndPassword />} />
          <Route path='createaccount/phoneandpassword/paymentmethods' element={<PaymentMethods />} />
        </Route>
        <Route path='/work/home' element={<FreelancerHomePage />} />
        <Route path='/work/personalspace' element={<FPersonalSpace />} >
          <Route  path='dashboard' element={<FDashboard />} /> 
          <Route  path='myprojects/workingon' element={<WorkingOn />} /> 
          <Route  path='myprojects/history' element={<ProjectsHistory />} /> 
        </Route>
      </Routes>
    </>
  )
}

export default App
