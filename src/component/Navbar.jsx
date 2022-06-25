import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-teal-500 shadow-md fixed top-0 z-50 w-full h-auto flex items-center justify-between py-2 px-5 lg:px-32">
      <div className="flex items-center flex-shrink-0 text-white">
        <NavLink to="/home">
          <img src='assets/claim-logo.png' alt='broken' className='border border-teal-500 shadow-sm h-10 w-10 rounded-full cursor-pointer lg:h-12 lg:w-12 ' />
        </NavLink>
        <span className="ml-2 font-semibold text-2xl tracking-tight">Cliam Management</span>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className="w-full hidden lg:flex lg:items-center lg:w-auto">
        <div className="text-lg lg:flex-grow">
          <button to="#" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
            Logout
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar