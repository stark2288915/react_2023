import React from 'react';
import UserComponent from "./UserComponent";

const UsersComponents = ({users}) => {
    return (
        <div>
            {users.map(user => <UserComponent user={user} key={user.id}/>)}
        </div>
    );
};

export default UsersComponents;