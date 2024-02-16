import React from 'react';
import {useNavigate} from "react-router-dom";

const UserComponent = ({user}) => {
    const {id, name} = user;

    const navigate = useNavigate()
    return (
        <div>
            <div>{id}. {name}</div>
            <button onClick={()=>{
                navigate(`user/${id}`, {state: user})
            }
            }>user-details</button>
        </div>
    );
};

export {UserComponent};