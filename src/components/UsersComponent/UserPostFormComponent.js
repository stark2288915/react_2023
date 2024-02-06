import React from 'react';
import {useForm} from "react-hook-form";
import {postUsers} from "../../services/users.api.service";

const UserPostFormComponent = ({addUser}) => {

    let {register, handleSubmit} = useForm();


    const formUser = (data) => {
        postUsers(data)
            .then(response => response.data)
            .then(user => addUser({user}));
    }


    return (
        <div>
            <form onSubmit={handleSubmit(formUser)}>
                <input type="text" placeholder={'id'} {...register('id')}/>
                <input type="text" placeholder={'name'} {...register('name')}/>
                <input type="text" placeholder={'username'} {...register('username')}/>
                <input type="text" placeholder={'email'} {...register('email')}/>
                <button>post user</button>
            </form>
        </div>
    );
};

export {UserPostFormComponent};