import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const PrivateRouter = ( { children } ) => {
    const navigate = useNavigate();
    useEffect(()=>{
        if(!localStorage.getItem('token')){
            navigate("/auth");
        }
    },[]);

    return children;
}

export default PrivateRouter;