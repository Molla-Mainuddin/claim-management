import React, { useState } from 'react';
import { UserClaimContext } from './UserClaimContext';

const UserClaimState = (props) => {

    const [userClaimDetails, setUserClaimDetails] = useState([]);

    return (
        <UserClaimContext.Provider value={ {userClaimDetails, setUserClaimDetails} }>
            {props.children}
        </UserClaimContext.Provider>
    );
}

export default UserClaimState;