import React from 'react';
import {useNavigate} from "react-router-dom";

const UserComponent = ({user}) => {
    const {id, name} = user;

    const navigate = useNavigate();
    return (
        <div>
             <li>{id}. {name}</li>
            <button onClick={()=>{

                navigate(`users/${user.id}`, {state: user})

            }}>user details</button>
        </div>
    );
};

export default UserComponent;