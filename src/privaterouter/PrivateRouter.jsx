import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Login from '../pages/authentication/component/Login';

const PrivateRouter = ( { children } ) => {
    const navigate = useNavigate();
    useEffect(()=>{
        if(!localStorage.getItem('token')){
            navigate("/auth");
        }
    }, []);
    
    return children;
}

export default PrivateRouter;