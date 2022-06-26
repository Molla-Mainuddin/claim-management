import React from 'react'
import SideBar from '../../../component/SideBar';

const Home = () => {
  return (
    <div className='flex flex-row'>
      <SideBar />
      <div className='w-full lg:w-4/5 lg:pt-20 px-10'>
        Your All Cliam
      </div>
    </div>
  )
}

export default Home;