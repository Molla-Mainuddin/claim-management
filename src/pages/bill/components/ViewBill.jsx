import React, { useEffect, useState } from 'react'
import { getBillDataById } from '../../../apis/bills';
import SideBar from '../../../component/SideBar';
import Spinner from '../../../component/Spinner';
import BillList from './BillList';

const ViewBill = () => {

    const [billData, setBillData] = useState({});


    useEffect(() => {
        const memberId = localStorage.getItem('mid');
        fetchBillData(memberId);
    }, [])

    const fetchBillData = (memberId) => {
        getBillDataById(memberId).then((res) => {
            setBillData(res);
        }).catch((err) => {
            console.log(err);
        })
    }

    const policySelector = (policyId)=>{
        // console.log(policyId);
        if(policyId === 'P101'){
            return "Health Plus Classic";
        }else if(policyId === 'P102'){
            return "Health Plus Enhanced";
        }else if(policyId === 'P103'){
            return "Health Plus Premium";
        } 
    }

    return (
        <div className='flex flex-row'>
            <SideBar />
            <div className='w-full lg:w-4/5 lg:pt-20 px-10'>
                {/* <button className='border' onClick={fetchBillData}>Click</button> */}

                {/* For View Bill Details */}
                <div className='flex justify-center h-auto mt-6'>
                    <div className='border rounded-xl w-1/2  shadow-lg px-8 py-8 space-y-8'>
                        <div className='border w-1/2 mx-auto text-center bg-teal-500 rounded-3xl p-1'>
                            <p className='text-white text-2xl font-serif font-bold'>Bill Details</p>
                        </div>
                        {
                            Object.keys(billData).length === 0 ? <Spinner /> : <BillList billData={billData} policySelector={policySelector} />
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewBill;