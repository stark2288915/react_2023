import React, {useEffect, useState} from 'react';
import {getUsers} from "../services/users.api.service";
import {UserComponent} from "./UserComponent";
import {UserPostFormComponent} from "./UserPostFormComponent";

const MainUsersComponent = () => {
    let [users, setUsers] = useState([]);


    useEffect(() => {
        getUsers()
            .then(value => setUsers(value.data));
    })


    return (
        <div>
            <UserPostFormComponent/>
            {users.map(user => <UserComponent user={user} key={user.id}/>)}
        </div>
    );
};

export {MainUsersComponent};