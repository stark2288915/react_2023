import React from 'react';
import {Outlet, useLocation} from "react-router-dom";
import UserDetailsComponent from "../../components/UserDatailsComponents/UserDetailsComponent";

const UserDetailsPage = () => {
    const {state} = useLocation();

    return (
        <div>
            <UserDetailsComponent user={state}/>
            <Outlet/>
        </div>
    );
};

export {UserDetailsPage};