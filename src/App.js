import React from 'react'
import Login from './pages/authentication/component/Login'
import { Navigate, Route, Routes } from "react-router-dom";
import Home from './pages/home/component/Home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SideBar from './component/SideBar';
import Navbar from './component/Navbar';
import AddClaim from './pages/claim/component/AddClaim';
import ViewBill from './pages/bill/components/ViewBill';
import PrivateRouter from './privaterouter/PrivateRouter';

const App = () => {
  return (
    <div className='w-full'>
      <ToastContainer autoClose={1500} />
      <Routes>
        {/* Login Page Routing */}
        <Route exact path='/auth' element={<Login />} />
        <Route exact path='/*' element={<Navigate to="/" />} />
        
        {/* Home Page Routing */}
        <Route exact path='/' element={
          <PrivateRouter>
            <Navbar />
            <Home />
          </PrivateRouter>
        }
        />

        {/* Add Cliam Page Routing */}
        <Route exact path='/addclaim' element={
          <PrivateRouter>
            <Navbar />
            <AddClaim />
          </PrivateRouter>
        }
        />

        {/* View BIll Routing */}
        <Route exact path='/viewbill' element={
          <PrivateRouter>
            <Navbar />
            <ViewBill />
          </PrivateRouter>
        }
        />
      </Routes>
    </div>
  )
}

export default App
