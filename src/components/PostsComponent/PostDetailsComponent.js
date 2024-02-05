import React from 'react';

const PostDetailsComponent = ({post, chosePost}) => {

    return (
        <div className='postDetailsDiv'>
            <h2>Posts details</h2>
            <ul>
                <li>userId: {post.userId}</li>
                <li>id: {post.id}</li>
                <li>title: {post.title}</li>
                <li>body: {post.body}</li>
            </ul>
            <button onClick={()=>{
                chosePost(null)
            }
            }>hide details</button>
        </div>
    );
};

export {PostDetailsComponent};