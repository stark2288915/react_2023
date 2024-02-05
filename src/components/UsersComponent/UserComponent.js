import React from 'react';

const UserComponent = ({user}) => {
    return (
        <div>
            <ul>
                <li>{user.id}</li>
                <li>{user.name}</li>
                <li>{user.username}</li>
                <li>{user.email}</li>
            </ul>
        </div>
    );
};

export {UserComponent};