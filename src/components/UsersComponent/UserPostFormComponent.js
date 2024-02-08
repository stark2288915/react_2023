import React from 'react';
import {useForm} from "react-hook-form";
import {postUsers} from "../../services/users.api.service";

const UserPostFormComponent = ({addUser}) => {

    const {register, handleSubmit} = useForm();


    const formUser = (data) => {
        postUsers(data)
            .then(response => addUser(response.data));
    }

    return (
        <div className='userForm'>
            <form onSubmit={handleSubmit(formUser)}>
                <input type="text" placeholder={'name'} {...register('name')}/>
                <input type="text" placeholder={'username'} {...register('username')}/>
                <input type="text" placeholder={'email'} {...register('email')}/>
                <button>post user</button>
            </form>
        </div>
    );
};

export {UserPostFormComponent};