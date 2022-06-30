import React, { useEffect, useState } from 'react'
import { SubmitClaimData } from '../../../apis/claim';
import { getBenfitsData, getProviderData } from '../../../apis/policy';
import { notify } from '../../../component/Notify';
import SideBar from '../../../component/SideBar';
import { PolicyListItems } from './ListItem';

const AddClaim = () => {

    const [policyId, setPolicyId] = useState('');
    const [memberId, setMemberId] = useState('');
    const [hospitalId, setHospitalId] = useState('');
    const [benefitId, setBenefitId] = useState('');
    const [remarks, setRemarks] = useState('');
    const [amount, setAmount] = useState('');


    const [hospitalList, setHospitalList] = useState([]);
    const [benefitList, setBenefitList] = useState([]);

    useEffect(() => {
        setMemberId(localStorage.getItem('mid'));
    }, [])


    const onChangeHandler = (event) => {
        loadHospitals(event.target.value);
        loadBenefits(event.target.value);
        setPolicyId(event.target.value);
    }

    const loadHospitals = async (pId) => {
        getProviderData(pId).then((res) => {
            setHospitalList(res.providers);
        }).catch((err) => {
            console.log(err);
        })
    }

    const loadBenefits = async (policyId) => {
        getBenfitsData(policyId, memberId).then((res) => {
            // console.log(res);
            setBenefitList(res.benefits);
        }).catch((err) => {
            console.log(err);
        })
    }

    const onSubmit = async () => {
        // console.log("Data is : " + memberId, policyId, hospitalId, benefitId, remarks, amount);
        document.getElementById("submitButton").innerHTML = "Data Processing...";
        var reqData = {
            "memberId": memberId,
            "policyId": policyId,
            "hospitalId": hospitalId,
            "benefitId": benefitId,
            "remarks": remarks,
            "claimAmount": Number(amount)
        }
        if (policyId !== '' && hospitalId !== '' && benefitId !== '' && remarks !== '' && amount !== '') {
            SubmitClaimData(reqData).then((res) => {
                console.log(res);
                // console.log("Data Submitted Successfully");
                notify("SUBMIT_SUCCESS", "Data Submitted Successfully");
                document.getElementById("submitButton").innerHTML = "Submit Claim";
                setHospitalList([]);
                setBenefitList([]);
                setRemarks('');
                setAmount('');
            }).catch((err) => {
                console.log(err);
            })
        } else {
            document.getElementById("submitButton").innerHTML = "Submit Claim";
            notify("SUBMIT_FAILED", "all fields are required");
        }
    };

    return (
        <div className='flex flex-row'>
            <SideBar />
            <div className='bg-home-image bg-no-repeat bg-cover bg-right flex justify-center w-full lg:w-4/5 lg:pt-24 px-10'>
                <div className='h-[85%] w-[90%] shadow-2xl rounded-xl p-4'>
                    <div className='w-[30%] mx-auto text-center bg-teal-500 rounded-3xl py-2 '>
                        <p className='text-white text-2xl font-serif font-bold '>Add Claim</p>
                    </div>
                    <div className='px-8 mt-12 w-full h-auto flex flex-row mr-6'>

                        {/* First Column */}
                        <div className='h-full w-1/2 space-y-8'>
                            {/* Member Id Field */}
                            <div>
                                <label
                                    htmlFor="memberId"
                                    className="block mb-2 text-sm font-medium text-gray-800"
                                >
                                    Member Id
                                </label>
                                <input
                                    type="text"
                                    name="memberId"
                                    id="memberId"
                                    className="bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm outline-none
                                    rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    placeholder="Member Id"
                                    value={memberId}
                                    readOnly
                                />
                            </div>

                            {/* Hospital Field */}
                            <div>
                                <label
                                    htmlFor="hospital"
                                    className="block mb-2 text-sm font-medium text-gray-800"
                                >
                                    Hospital
                                </label>
                                <select className="bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm outline-none rounded-lg 
                                    focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    id="hospital"
                                    onChange={(event) => setHospitalId(event.target.value)}
                                >
                                    <option value="">Choose Hospital</option>
                                    {
                                        policyId === '' ? <option value=''>Choose a policy first</option> : hospitalList.length === 0 ? <option value=''>Loading...</option> : (
                                            hospitalList.map((data) => {
                                                return <option value={data.hospitalId}>{data.name}</option>
                                            })
                                        )
                                    }
                                </select>
                            </div>

                            {/* Remarks Field */}
                            <div>
                                <label
                                    htmlFor="remarks"
                                    className="block mb-2 text-sm font-medium text-gray-800"
                                >
                                    Remarks
                                </label>
                                <input
                                    type="text"
                                    name="remarks"
                                    id="remarks"
                                    className="bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm outline-none
                                    rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    placeholder="Remarks"
                                    value={remarks}
                                    onChange={(event) => setRemarks(event.target.value)}
                                    required
                                />
                            </div>

                            {/* Claim Submit Button */}
                            <div>
                                <button type="button" className="text-white bg-teal-500 hover:bg-teal-700 focus:outline-none 
                                    font-medium rounded-full text-base px-5 py-2.5 text-center mr-2 mb-2"
                                    onClick={onSubmit}
                                    id="submitButton"
                                >
                                    Submit Claim
                                </button>
                            </div>

                        </div>

                        {/* Second Column */}
                        <div className='h-full w-1/2 ml-6 space-y-8'>

                            {/* Policy Name Field */}
                            <div>
                                <label
                                    htmlFor="Policy Name"
                                    className="block mb-2 text-sm font-medium text-gray-800"
                                >
                                    Policy Name
                                </label>
                                <select className="bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm outline-none rounded-lg 
                                    focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    id="policyName"
                                    onChange={onChangeHandler}
                                >
                                    <PolicyListItems />
                                </select>
                            </div>

                            {/* Benefit Name Filed */}
                            <div>
                                <label
                                    htmlFor="benefitName"
                                    className="block mb-2 text-sm font-medium text-gray-800"
                                >
                                    Benefit Name
                                </label>
                                <select className="bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm outline-none rounded-lg 
                                    focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    id="benefitName"
                                    onChange={(event) => setBenefitId(event.target.value)}
                                >
                                    <option value="">Choose Benefit</option>
                                    {

                                        policyId === '' ? <option value=''>Choose a policy first</option> : benefitList.length === 0 ? <option value=''>Loading...</option> : (
                                            benefitList.map((data) => {
                                                return <option value={data.benefitId}>{data.benefitName}</option>
                                            })
                                        )
                                    }
                                </select>
                            </div>

                            {/* Cliam Amount Filed */}
                            <div>
                                <label
                                    htmlFor="cliamAmount"
                                    className="block mb-2 text-sm font-medium text-gray-800"
                                >
                                    Claim Amount
                                </label>
                                <input
                                    type="text"
                                    name="cliamAmount"
                                    id="cliamAmount"
                                    className="bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm outline-none
                                    rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    placeholder="Claim Amount"
                                    value={amount}
                                    onChange={(event) => setAmount(event.target.value)}
                                    required
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddClaim;