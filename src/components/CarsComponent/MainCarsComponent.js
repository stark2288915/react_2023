import React, {useEffect, useState} from 'react';

import PostCarsForm from "./PostCarsForm";
import {getCars} from "../../services/cars.api.service";
import AllCarsComponent from "../CommentsComponent/AllCarsComponent";
import {CarComponent} from "../CommentsComponent/CarComponent";

const MainCarsComponent = () => {

    const [cars, setCars] = useState([]);

    useEffect(()=> {
        getCars().then(cars => setCars(cars.data));
    }, [])



    return (
        <div>
            <PostCarsForm/>
            {/*{cars.map(car => <CarComponent car={car} key={car.id}/>)}*/}
            <AllCarsComponent cars={cars}/>
        </div>
    );
};

export default MainCarsComponent;