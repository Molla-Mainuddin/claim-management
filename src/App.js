import React from 'react'
import Login from './pages/authentication/component/Login'
import { Route, Routes } from "react-router-dom";
import Home from './pages/home/component/Home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SideBar from './component/SideBar';
import Navbar from './component/Navbar';

const App = () => {
  return (
    <div className='w-full'>
      <ToastContainer autoClose={1500} />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={
          <>
            <Navbar />
            <Home />
          </>
        }
        />
      </Routes>
    </div>
  )
}

export default App
