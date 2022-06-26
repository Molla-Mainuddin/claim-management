import React from 'react'
import Login from './pages/authentication/component/Login'
import { Navigate, Route, Routes } from "react-router-dom";
import Home from './pages/home/component/Home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './component/Navbar';
import AddClaim from './pages/claim/component/AddClaim';
import ViewBill from './pages/bill/components/ViewBill';
import PrivateRouter from './privaterouter/PrivateRouter';
import ViewClaimStatus from './pages/claim/component/ViewClaimStatus';

const App = () => {
  return (
    <div className='w-full box-border'>
      <ToastContainer autoClose={1500} />
      <Routes>
        {/* Login Page Routing */}
        <Route exact path='/auth' element={<Login />} />

        <Route path='/*' element={<Navigate to="/" />} />

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

        {/* View Cliam Status Routing */}
        <Route exact path='/viewclaimstatus' element={
          <PrivateRouter>
            <Navbar />
            <ViewClaimStatus />
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

export default App;
