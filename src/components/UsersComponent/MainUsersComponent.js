import React, {useEffect, useState} from 'react';
import {getUsers} from "../services/users.api.service";
import UserComponent from "./UserComponent";

const MainUsersComponent = () => {
    let [users, setUsers] = useState([]);


    useEffect(() => {
        getUsers()
            .then(value => setUsers(value.data));
    })


    return (
        <div>
            {users.map(user => <UserComponent user={user} key={user.id}/>)}
        </div>
    );
};

export default MainUsersComponent;