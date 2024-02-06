import React, {useEffect, useState} from 'react';
import CommentComponent from "./CommentComponent";
import {CommentPostFormComponent} from "./CommentPostFormComponent";
import {getComments} from "../../services/comment.api.service";

const MainCommentComponent = () => {

    const [comments, setComments] = useState([]);

    useEffect(()=> {
        getComments()
            .then(value => setComments(value.data))

    }, []);


    const addComment = (newComment) => {
        setComments([...comments, newComment])
    }



    return (
        <div>
            <CommentPostFormComponent addComment={addComment}/>
            {comments.map(comment => <CommentComponent comment={comment} key={comment.id}/>)}
        </div>
    );
};

export default MainCommentComponent;