import React from 'react';
import {useForm} from "react-hook-form";
import {postComments} from "../../services/comment.api.service";

const CommentPostFormComponent = ({addComment}) => {

    const {register, handleSubmit} = useForm();

    const formComment = (data) => {
        console.log({data});

        postComments(data)
            .then(({response}) => addComment(data))
    }

    return (
        <div>
            <form onSubmit={handleSubmit(formComment)}>
                <input type="text" placeholder={'postId'} {...register('postId')}/>
                <input type="text" placeholder={'id'} {...register('id')}/>
                <input type="text" placeholder={'name'} {...register('name')}/>
                <input type="text" placeholder={'email'} {...register('email')}/>
                <input type="text" placeholder={'body'} {...register('body')}/>
                <button>post comment</button>
            </form>
        </div>
    );
};

export {CommentPostFormComponent};