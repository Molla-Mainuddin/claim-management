import React, { useState } from 'react'
import { FetchClaimStatusById } from '../../../apis/claim';
import { notify } from '../../../component/Notify';
import SideBar from '../../../component/SideBar';

const ViewClaimStatus = () => {

    const [claimId, setClaimId] = useState('');
    const [claimResponse, setClaimResponse] = useState({});
   
    const onSubmit = async (claimid) => {
        if (claimid !== '') {
            FetchClaimStatusById(claimid).then((res) => {
                // console.log(res);
                if(res.message === "Invalid Claim ID"){
                    notify("INVALID_DATA","Invalid Claim Id");
                    return;
                }
                setClaimResponse(res);
            }).catch((err) => {
                console.log("The error is : " + err);
            });
        } else {
            // console.log("Enter claim Id first");
            notify("EMPTY_FIELD", "claim id is required");
        }
    }

    return (
        <div className='flex flex-row'>
            <SideBar />
            <div className='w-full lg:w-4/5 lg:pt-20 px-10'>
                {/* For Claim Id input field */}
                <div className='p-4 flex items-center'>
                    <label htmlFor="claimid" className="ml-8 text-lg font-semibold font-serif text-gray-900">
                        Enter your Claim Id :
                    </label>
                    <input className="w-1/3 border-b-2 border-teal-500 bg-transparenttext-gray-700 ml-4 mr-4 py-1 px-2 leading-tight focus:outline-none"
                        type="text"
                        placeholder="Claim Id"
                        aria-label="Full name"
                        onChange={(event) => setClaimId(event.target.value)}
                    />
                    <button type="button"
                        className=" text-white bg-teal-500 hover:bg-teal-700 
                                focus:outline-none font-medium rounded-full 
                                text-sm px-3.5 py-1.5 mb-2 text-center"
                        onClick={() => onSubmit(claimId)}
                    >
                        View Status
                    </button>
                </div>

                {/* For Claim Details */}
                <div className='flex justify-center h-auto mt-6'>
                    <div className='border rounded-xl w-1/2  shadow-lg px-8 py-8 space-y-8'>
                        <div className='border w-1/2 mx-auto text-center bg-teal-500 rounded-3xl p-1'>
                            <p className='text-white text-2xl font-serif font-bold'>Claim Status</p>
                        </div>
                        <div className='flex flex-row justify-between'>
                            <p className='text-gray-800 text-base font-serif font-bold'>Claim Id: </p>
                            <p className='text-gray-800 text-base font-serif font-bold'>{claimResponse.claimId}</p>
                        </div>
                        <div className='flex flex-row justify-between'>
                            <p className='text-gray-800 text-base font-serif font-bold'>Claim Status: </p>
                            <p className='text-gray-800 text-base font-serif font-bold'>{claimResponse.claimStatus}</p>
                        </div>
                        <div className='flex flex-row justify-between'>
                            <p className='text-gray-800 text-base font-serif font-bold'>Description: </p>
                            <p className='text-gray-800 text-base font-serif font-bold pl-6'>{claimResponse.claimDescription}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ViewClaimStatus;