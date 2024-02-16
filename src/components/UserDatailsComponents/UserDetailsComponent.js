import React from 'react';
import {useNavigate} from "react-router-dom";

const UserDetailsComponent = ({user}) => {

    const navigate = useNavigate()

    return (
        <div>
            <ul>
                <li>{user.id}</li>
                <li>{user.name}</li>
                <li>{user.email}</li>
            </ul>
            <button onClick={()=> {
                navigate('userposts', {state: user.id})
            }
            }>post of current user</button>
        </div>
    );
};

export default UserDetailsComponent;