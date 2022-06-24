import axios from "axios";

const API_Base_Url = process.env.REACT_APP_LOGIN_API_BASE_URL;

export const LoginApi = async (reqdata) => {

    const data = {"username": reqdata.username, "password": reqdata.password}
    
    try {
        const response = await axios.post(API_Base_Url + "login", data);
        return response;
    } catch (error) {
        console.log('Something went wrong , Please try again later.');
    }
};