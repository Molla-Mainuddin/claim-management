import React, { useContext } from 'react'
import SideBar from '../../../component/SideBar';
import { UserClaimContext } from '../../../context/UserClaimContext';

const Home = () => {
  const { userClaimDetails } = useContext(UserClaimContext);
  // console.log(userClaimDetails);
  return (
    <div className='flex flex-row'>
      <SideBar />
      <div className='h-auto w-full lg:w-4/5 px-10 bg-home-image bg-no-repeat bg-cover bg-right lg:pt-20'>
        {/* <div className='p-4 flex items-center'>
          <p className="ml-2 text-lg font-semibold font-serif text-gray-900">
            Welcome! {localStorage.getItem('username')}
          </p>
        </div> */}

        {/* For Claim Details */}
        <div className='flex justify-center h-auto mt-5'>
           {/* This is cliam main container */}
          <div className='rounded-xl w-full  shadow-2xl px-10 py-3 space-y-6'>
            {/* This is container heading */}
            <div className='w-1/2 mx-auto text-center bg-teal-500 rounded-3xl py-2'>
              <p className='text-white text-2xl font-serif font-bold'>Your Claims</p>
            </div>
            {/* This is table div */}
            <div className="overflow-x-auto rounded-md">
              <table className="w-full text-base text-center text-gray-500">
                {/* This is table heading */}
                <thead className="text-xs uppercase bg-gray-800">
                  <tr className='text-white'>
                    <th scope="col" className="px-6 py-3">
                      SL No.
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Claim Id
                    </th>
                    <th scope="col" className="px-6 py-3">
                      claim Description
                    </th>
                  </tr>
                </thead>
                {/* This is table body */}
                <tbody>
                  {
                    userClaimDetails.length === 0 ? <p className='p-2 text-base text-white'>You done have any claim record</p> : (
                      userClaimDetails.map((data, index) => {
                        return (
                          <tr className='odd:bg-gray-700 even:bg-gray-600 text-white'>
                            <td className="px-6 py-4">
                              {index + 1}
                            </td>
                            <td className="px-6 py-4">
                              {data.claimId}
                            </td>
                            <td className="px-6 py-4">
                              {data.claimDescription}
                            </td>
                          </tr>
                        );
                      })
                    )
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;