const CLAIM_API_BASE_URL = process.env.REACT_APP_CLAIM_API_BASE_URL;

export const SubmitClaimData = async (req) => {
    try {
        const response = await fetch(CLAIM_API_BASE_URL + "submitClaim", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem("token")
            },
            body : JSON.stringify ({
                "remarks": req.remarks,
                "claimAmount": req.claimAmount,
                "hospitalId": req.hospitalId,
                "policyId": req.policyId,
                "benefitId": req.benefitId,
                "memberId": req.memberId
            })
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
        else if (response.status === 400){
            console.log("Premium not paid")
        }
        else if(result.status === 500){
            console.log(result.message);
        }
    } catch (error) {
        console.log('Something went wrong , Please try again later.')
    }
};



export const FetchClaimStatusById = async (id) => {
    console.log(id);
    try {
        const response = await fetch(CLAIM_API_BASE_URL + `getClaimStatus/${id}`, {
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
        }else if(response.status === 404){
            console.log("Invalid Policy Id");
        }
    } catch (error) {
        console.log('Something went wrong , Please try again later.')
    }
};