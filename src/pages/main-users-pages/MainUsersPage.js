import React from 'react';
import {UsersComponents} from "../../components/MainUsersComponents/UsersComponents";
import {Outlet, useLoaderData} from "react-router-dom";

const MainUsersPage = () => {
    const loaderData = useLoaderData();

    return (
        <div>
            <UsersComponents users={loaderData.data}/>
        </div>
    );
};

export default MainUsersPage;