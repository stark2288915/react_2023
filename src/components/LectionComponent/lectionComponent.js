import React from 'react';
import {useForm} from "react-hook-form";

const LectionComponent = () => {

    const onSubmit = (data) => {
        console.log(data.title);

    }

    let {register, handleSubmit} = useForm()

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register('title', {required: true})}/>
                <input {...register('body')}/>
                <button>click</button>
            </form>
        </div>
    );
};

export {LectionComponent};