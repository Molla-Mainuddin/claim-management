import React from 'react'
import { FetchClaimStatusById } from '../../../apis/claim';
import SideBar from '../../../component/SideBar';

const AddClaim = () => {

    

    return (
        <div className='flex flex-row'>
            <SideBar />
            <div className='border-2 border-red-400 w-full lg:w-4/5 lg:pt-20 px-10 mt-4'>
                {/* <button onClick={onSubmit} className='border hover:bg-red-400'>Submit</button> */}
                Add claim
            </div>    
        </div>
    );
}

export default AddClaim;