import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function Navbar() {
  return (
    <div className=' '>
      <div className=' flex justify-between sticky top-0 bg-[#141C2E] p-6 text-[#CDD1D4]'>
        <div>
          <p className=' text-2xl'>Tu rf<a>BOOK</a></p>
        </div>

        <div className=' flex gap-4'>
          <NavLink className={({isActive}) => (isActive ? 'text-orange-600' : '') } to="/">Home</NavLink>
          <NavLink className={({isActive}) => (isActive ? 'text-orange-600' : '') } to="/about">About</NavLink>
          <NavLink className={({isActive}) => (isActive ? 'text-orange-600' : '') } to="/whyus">Why us</NavLink>
          <NavLink className={({isActive}) => (isActive ? 'text-orange-600' : '') } to="/contact">Contact</NavLink>
        </div>
        <div>
          <button className=' bg-[#2A3543] px-4 py-1 rounded-md hover:bg-gray-600'>Log in</button>
        </div>
      </div>
      <div>
        <Outlet />
      </div>

    </div>
  )
}

export default Navbar