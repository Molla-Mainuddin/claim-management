const POLICY_API_BASE_URL = process.env.REACT_APP_POLICY_API_BASE_URL; 

export const getProviderData = async (policyid) => {
    
    try {
        const response = await fetch(POLICY_API_BASE_URL + `getChainOfProviders/${policyid}`, {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem("token")
            }
        })
        
        // if (response.status === 403) {
        //     console.log('Your Session has been expired, Please login again.');
        //     return window.setTimeout(function () {
        //         localStorage.clear();
        //         window.location.href = "/";
        //     }, 1000);
        // }
        const result = await response.json();
        if (response.ok) {
            return result;
        }
        else if (response.status === 400) {
            console.log(result.errors[0])
        }
        else if(result.status === 500){
            console.log(result.message);
        }
    } catch (error) {
        console.log(error)
    }
};


export const getBenfitsData = async (policyid,memberId) => {
    try {
        
        const response = await fetch(POLICY_API_BASE_URL+`getEligibleBenefits/${policyid}/${memberId}`, {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem("token")
            }           
        })
        // if (response.status === 403) {
        //     console.log('Your Session has been expired, Please login again.');
        //     return window.setTimeout(function () {
        //         localStorage.clear();
        //         window.location.href = "/";
        //     }, 1000);
        // }
        const result = await response.json();
        if (response.ok) {
            return result;
        }
        else if (response.status === 400) {
            console.log(result.errors[0])
        }
        else if(result.status === 500){
            console.log(result.message);
        }
    } catch (error) {
        console.log('Something went wrong , Please try again later.')
    }
};

export const getEligibleCLaimAmount = async (policyid) => {
    
    try {
        const response = await fetch(POLICY_API_BASE_URL + `getEligibleClaimAmount/${policyid}/${localStorage.getItem("userid")}`, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem("token")
            }            
        })
        // if (response.status === 403) {
        //     console.log('Your Session has been expired, Please login again.');
        //     return window.setTimeout(function () {
        //         localStorage.clear();
        //         window.location.href = "/";
        //     }, 1000);
        // }
        const result = await response.json();
        if (response.ok) {
            return result;
        }
        else if (response.status === 400) {
            console.log(result.errors[0])
        }
        else if(result.status === 500){
            console.log(result.message);
        }
    } catch (error) {
        console.log('Something went wrong , Please try again later.')
    }
};