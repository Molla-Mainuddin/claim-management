import React from 'react'
import Login from './pages/authentication/component/Login'
import { Route, Routes } from "react-router-dom";
import Home from './pages/home/component/Home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SideBar from './component/SideBar';
import Navbar from './component/Navbar';
import AddClaim from './pages/claim/component/AddClaim';

const App = () => {
  return (
    <div className='w-full'>
      <ToastContainer autoClose={1500} />
      <Routes>
        <Route exact path='/' element={<Login />} />
        <Route exact path='/home' element={
          <>
            <Navbar />
            <Home />
          </>
        }
        />
        <Route exact path='/addclaim' element={
          <>
            <Navbar />
            <AddClaim />
          </>
        }
        />
      </Routes>
    </div>
  )
}

export default App
