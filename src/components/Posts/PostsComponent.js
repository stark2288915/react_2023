import React, {useEffect, useState} from 'react';
import {PostComponent} from "./PostComponent";
import {getAxiosPosts, getFetchPosts} from "../services/posts.api.service";

const PostsComponent = () => {

    let [posts, setUsers] = useState([]);

    useEffect(() => {
        getAxiosPosts()
                .then(value => setUsers(value.data));
    },[]);

    return (
        <div>
            {posts.map((post, index) => <PostComponent props={post} key={index}/>)}
        </div>
    );
};

export {PostsComponent};