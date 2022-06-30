import React from 'react'
import SideBar from '../../../component/SideBar';

const Home = () => {

  return (
    <div className='flex flex-row'>
      <SideBar />
      <div className='w-full lg:w-4/5 px-10 bg-home-image bg-no-repeat bg-cover bg-right lg:pt-20'>
        <p className='text-xl font-semibold'>Welcome! {localStorage.getItem('username')}</p>
      </div>
    </div>
  )
}

export default Home;