import React from 'react';
import UsersComponents from "../../components/UsersComponents/UsersComponents";
import {useLoaderData} from "react-router-dom";

const UsersPage = () => {
    const loaderData = useLoaderData() //хук який дає нам данні при завантаженні сторінки

    console.log(loaderData)


    return (
        <div>
            <UsersComponents users={loaderData}/>
        </div>
    );
};

export default UsersPage;