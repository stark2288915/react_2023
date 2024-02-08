import React from 'react';
import {useForm} from "react-hook-form";
import {postCars} from "../../services/cars.api.service";

const PostCarsForm = () => {

    const {register, handleSubmit, formState: {isValid, errors}, setValue} = useForm();

    const formCar = (dataF) => {
        postCars(dataF).then(response => console.log(response));
    }

    return (
        <div>
            <hr/>
            <h3>Post Car</h3>
            <form onSubmit={handleSubmit(formCar)}>
                <input type="text" placeholder={'brand'} {...register('brand',{
                    pattern:/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/}
                )}/>
                <input type="text" placeholder={'price'} {...register('price', {
                    valueAsNumber: true,
                    min: 0,
                    max: 1000000
                })}/>
                <input type="text" placeholder={'year'} {...register('year', {
                    valueAsNumber: true,
                    min: 1990,
                    max: new Date().getFullYear()
                })}/>
                <button>post car</button>
            </form>
            <hr/>
        </div>
    );
};

export default PostCarsForm;