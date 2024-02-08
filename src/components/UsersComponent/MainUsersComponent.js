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

        const objUser = {
            id: newUser.id,
            name: newUser.data.name,
            username: newUser.data.username,
            email: newUser.data.email,
        }

        setUsers([...users, objUser]);
    }

    return (
        <div>
            <UserPostFormComponent addUser={addUser}/>
            {users.map(user => <UserComponent user={user} key={user.id}/>)}
        </div>
    );
};

export {MainUsersComponent};