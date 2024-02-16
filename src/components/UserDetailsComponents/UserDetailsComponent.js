import React from 'react';
import {useNavigate} from "react-router-dom";

const UserDetailsComponent = ({user}) => {
    const {id, name} = user;

    console.log(user)

    const navigate = useNavigate();
    return (
        <div>
            <li>{id}. {name}</li>
            <button onClick={()=>{

                navigate(`userposts`, {state: user})

            }}>user details</button>
        </div>
    );
};

export {UserDetailsComponent};