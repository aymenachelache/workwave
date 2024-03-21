import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './Pages/Website/landingPage/LandingPage'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage />} />
      </Routes>
    </>
  )
}

export default App
