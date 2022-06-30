const BILL_API_BASE_URL = process.env.REACT_APP_MEMBER_API_BASE_URL;

export const getBillDataById = async (memberId) => {
    try {
        const response = await fetch(BILL_API_BASE_URL + `viewBills/${memberId}`, {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem("token")
            }
        })
        
        // if (response.status === 403) {
        //     toast.error('Your Session has been expired, Please login again.');
        //     return window.setTimeout(function () {
        //         localStorage.clear();
        //         window.location.href = "/";
        //     }, 1000);
        // }
        const result = await response.json();
        // console.log(result);
        if (response.ok) {
            return result;
        }
        else if (response.status === 400) {
            console.log(result.errors[0])
        }
        else if(result.status === 500){
            console.log(result.message);
        }else if(response.status === 404){
            // console.log(result);
            return result;
        }
    } catch (error) {
        console.log('Something went wrong , Please try again later.')
    }
};