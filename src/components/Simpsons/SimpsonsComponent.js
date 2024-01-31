import React from 'react';

const SimpsonsComponent = ({SimpsonsArr}) => {

    return (
            SimpsonsArr.map(hero =>
            <div>
                <h3>{hero.name}</h3>
                <img src={hero.img} alt={hero.name}/>

            </div>
            )
    );
};

export default SimpsonsComponent;