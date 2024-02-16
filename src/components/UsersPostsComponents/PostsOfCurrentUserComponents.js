import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";
import {getUserPosts} from "../../service.api/posts.api.service";
import UserPosts from "./UserPosts";

const PostsOfCurrentUserComponents = () => {

    const userId = useParams();

    const [posts, setPosts] = useState([]);

    useEffect(()=> {
        getUserPosts(userId).then(value => setPosts(value))
    }, [userId])



    return (
        <div>
            {posts.map(post => <UserPosts post={post} key={post.id}/>)}
        </div>
    );
};

export {PostsOfCurrentUserComponents};