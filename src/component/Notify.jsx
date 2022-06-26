import { toast } from 'react-toastify';

export const notify = (actionType,message)=>{
    switch(actionType){
        case "LOGIN_SUCCESS":
            return toast.success(message);
        case "LOGIN_ERROR":
            return toast.error(message);
        case "LOGOUT_SUCCESS":
            return toast.success(message);
    }
}