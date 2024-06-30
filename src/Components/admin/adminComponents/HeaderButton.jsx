import React from 'react'
import { NavLink } from 'react-router-dom'

export default function HeaderButton({content}) {

  return (
    <NavLink to={content.path}
    activeClassName = "active"
    className={({ isActive }) =>
    isActive ? 'px-3 py-2 text-white text-xs rounded-lg bg-PrimColor active' : 'px-3 py-2 text-black text-xs rounded-lg'}
    >
    <h1>{content.title}</h1>
    </NavLink>
  )
}
