import React from 'react';

const UserPosts = ({post}) => {
    const {id, userId, title, body} = post;
    return (
        <div>
            <ul>
                <li>id: {id}</li>
                <li>userId: {userId}</li>
                <li>title: {title}</li>
                <li>body: {body}</li>
            </ul>
        </div>
    );
};

export default UserPosts;