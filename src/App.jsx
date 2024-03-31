import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './Pages/Website/landingPage/LandingPage'
import Login from './Pages/Website/login/Login'
import Register from './Pages/Website/register/Register'
import LandingHire from './Pages/Website/landingPage/LandingHire'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/hire' element={<LandingHire />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />}>
          <Route path='work' element={<Login />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
