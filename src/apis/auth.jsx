// import axios from "axios";

const API_Base_Url = process.env.REACT_APP_LOGIN_API_BASE_URL;

export const LoginApi = async (reqdata) => {

    try {
        // const response = await axios.post(API_Base_Url + "login",{
        //     "username": reqdata.username,
        //     "password": reqdata.password
        // })
        // console.log(response);
        const response = await fetch(API_Base_Url + "login", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                // 'Authorization': 'Bearer ' + this.state.AccessToken
            },
            body: JSON.stringify({
                "username": reqdata.username,
                "password": reqdata.password
            })
        })
        const result = await response.json();

        if (response.ok) {
            localStorage.setItem("username",result.username)
            // localStorage.setItem("userid",result.mid)
            return result;
        }
        else if(response.status === 400) {
            console.log(result.errors[0])
        }
        else if(result.status === 500){
            console.log(result.message);
        }

    } catch (error) {
        console.log('Something went wrong , Please try again later.');
    }
};