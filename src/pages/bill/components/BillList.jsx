import React from 'react'

const BillList = ( {billData, policySelector} ) => {
    return (
        <>
            <div className='flex flex-row justify-between'>
                <p className='text-white text-base font-serif font-bold'>Member Id : </p>
                <p className='text-white text-base font-serif font-bold'>{billData.memberId}</p>
            </div>
            <div className='flex flex-row justify-between'>
                <p className='text-white text-base font-serif font-bold'>Policy Name : </p>
                <p className='text-white text-base font-serif font-bold'>{policySelector(billData.policyId)}</p>
            </div>
            <div className='flex flex-row justify-between'>
                <p className='text-white text-base font-serif font-bold'>Last Paid Date : </p>
                <p className='text-white text-base font-serif font-bold pl-6'>{billData.lastPaidDate}</p>
            </div>
            <div className='flex flex-row justify-between'>
                <p className='text-white text-base font-serif font-bold'>Deu Date : </p>
                <p className='text-white text-base font-serif font-bold pl-6'>{billData.dueDate}</p>
            </div>
            <div className='flex flex-row justify-between'>
                <p className='text-white text-base font-serif font-bold'>Deu Amount : </p>
                <p className='text-white text-base font-serif font-bold pl-6'>{billData.dueAmount}</p>
            </div>
            <div className='flex flex-row justify-between'>
                <p className='text-white text-base font-serif font-bold'>Late Charge : </p>
                <p className='text-white text-base font-serif font-bold pl-6'>{billData.lateCharge}</p>
            </div>
        </>
    )
}

export default BillList;