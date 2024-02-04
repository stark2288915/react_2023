import React, {useEffect, useState} from 'react';
import {PostComponent} from "./PostComponent";
import {getAxiosPosts, getFetchPosts} from "../services/posts.api.service";
import {PostDetailsComponent} from "./PostDetailsComponent";

const PostsComponent = () => {

    let [posts, setUsers] = useState([]);

    useEffect(() => {
        getAxiosPosts()
                .then(value => setUsers(value.data));
    },[]);


    const [postDetails, setPostDetails] = useState(null);

    const chosePost = (obj) => {
        setPostDetails(obj)
    }

    return (
        <div className='mainPostsDiv'>
            <h1>Posts info</h1>
            {postDetails && <PostDetailsComponent post={postDetails} chosePost={chosePost}/>}
            {posts.map((post, index) => <PostComponent props={post} key={index} chosePost={chosePost}/>)}
        </div>
    );
};

export {PostsComponent};