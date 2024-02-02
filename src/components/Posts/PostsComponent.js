import React, {useEffect, useState} from 'react';
import {PostComponent} from "./PostComponent";
import {getPosts} from "../services/posts.api.service";

const PostsComponent = () => {

    let [posts, setUsers] = useState([]);

    useEffect(() => {
            getPosts()
                .then(value => setUsers(value));
    },[]);

    return (
        <div>
            {posts.map((post, index) => <PostComponent props={post} key={index}/>)}
        </div>
    );
};

export {PostsComponent};