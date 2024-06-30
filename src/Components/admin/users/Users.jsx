import React from 'react'
import HeaderButton from '../adminComponents/HeaderButton'
import Header from '../../header/Header'
import { Outlet } from 'react-router-dom'

export default function Users() {
  return (
    <div className='flex flex-col items-center'>
      <Header />
      <div className="bg-white shadow-md rounded-lg flex justify-center gap-2 p-1 mt-24 mb-4">
        <HeaderButton content={
          {path : "freelancers", title : "Freelancers"}
        } />
        <HeaderButton content={
          {path : "clients", title : "Clients"}
        } />
      </div>

      <Outlet />
    </div>
  )
}
