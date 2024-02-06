import React, {useEffect, useState} from 'react';
import {getUsers} from "../../services/users.api.service";
import {UserComponent} from "./UserComponent";
import {UserPostFormComponent} from "./UserPostFormComponent";

const MainUsersComponent = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers()
            .then(value => setUsers(value.data));
    }, []);

    const addUser = (newUser) => {
        setUsers([...users, newUser]);
    }

    return (
        <div>
            <UserPostFormComponent addUser={addUser}/>
            {users.map(user => <UserComponent user={user} key={user.id}/>)}
        </div>
    );
};

export {MainUsersComponent};