import React from 'react';
import {CarComponent} from "./CarComponent";

const AllCarsComponent = ({cars}) => {
    return (
        <div>
            {cars.map(car => <CarComponent car={car} key={car.id}/>)}
        </div>
    );
};

export default AllCarsComponent;