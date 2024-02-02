import React from 'react';
import SimpsonsComponent from "./SimpsonsComponent";

const SimpsonsArr = [
    {id: 1, name: 'Bart Simpson', image: 'https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png'},
    {id: 2, name: 'Homer Simpson', image: 'https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'},
    {id: 3, name: 'Maggi Simpson', image: 'https://upload.wikimedia.org/wikipedia/en/9/9d/Maggie_Simpson.png'},
    {id: 4, name: 'Lisa Simpson', image: 'https://upload.wikimedia.org/wikipedia/en/e/ec/Lisa_Simpson.png'},
    {id: 5, name: 'Marge Simpson', image: 'https://upload.wikimedia.org/wikipedia/uk/0/0b/Marge_Simpson.png'},
]


const SompsonsComponentsMap = () => {
    return (
        <div>
            {SimpsonsArr.map(hero => <SimpsonsComponent hero={hero} key={hero.id}/>)}
        </div>
    );
};

export default SompsonsComponentsMap;