import React from 'react'
import Login from './pages/authentication/component/Login'
import { Route, Routes } from "react-router-dom";
import Home from './pages/home/component/Home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SideBar from './component/SideBar';
import Navbar from './component/Navbar';
import AddClaim from './pages/claim/component/AddClaim';
import ViewBill from './pages/bill/components/ViewBill';

const App = () => {
  return (
    <div className='w-full'>
      <ToastContainer autoClose={1500} />
      <Routes>
        {/* Login Page Routing */}
        <Route exact path='/' element={<Login />} />

        {/* Home Page Routing */}
        <Route exact path='/home' element={
          <>
            <Navbar />
            <Home />
          </>
        }
        />

        {/* Add Cliam Page Routing */}
        <Route exact path='/addclaim' element={
          <>
            <Navbar />
            <AddClaim />
          </>
        }
        />

        {/* View BIll Routing */}
        <Route exact path='/viewbill' element={
          <>
            <Navbar />
            <ViewBill />
          </>
        }
        />
      </Routes>
    </div>
  )
}

export default App
