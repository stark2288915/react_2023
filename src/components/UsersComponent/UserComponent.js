import React from 'react';

const UserComponent = ({user}) => {
    return (
        <div>
            <ul>
                <li>id: {user.id}</li>
                <li>name: {user.name}</li>
                <li>username: {user.username}</li>
                <li>email: {user.email}</li>
            </ul>
        </div>
    );
};

export {UserComponent};