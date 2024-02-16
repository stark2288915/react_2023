import React, {useEffect, useState} from 'react';
import {UserDetailsComponent} from "../../components/UserDetailsComponents/UserDetailsComponent";
import {Outlet, useLoaderData, useParams} from "react-router-dom";

const UserDetailsPage = () => {

   /* const {id} = useParams() // дає ті параметри які знаїодяться в url

    const [user, setUser] = useState();

    useEffect(()=> {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
            .then(value => value.json())
            .then(value => setUser(value))
    }, [id])*/

    const loaderData = useLoaderData() //хук який дає нам данні при завантаженні сторінки

    console.log(loaderData)


    return (
        <div>
            <UserDetailsComponent user={loaderData}/>
            <Outlet/>
        </div>
    );
};

export default UserDetailsPage;