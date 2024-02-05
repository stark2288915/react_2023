import React from 'react';
import {useForm} from "react-hook-form";
import {getUsers} from "../services/users.api.service";

const UserPostFormComponent = () => {

    let {register, handleSubmit} = useForm();
    const postUser = (data) => {
        console.log(data);
        fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            body: JSON.stringify({
                id: data.id,
                name: data.name,
                username: data.username,
                email: data.email
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }).then(response => response.json()).then(json => console.log(json));
    }

    return (
        <div>
            <form onSubmit={handleSubmit(postUser)}>
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