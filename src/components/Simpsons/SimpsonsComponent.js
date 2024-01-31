import React from 'react';

const SimpsonsComponent = ({hero}) => {

    return (
            <div>
                <h3>{hero.name}</h3>
                <img src={hero.image} alt={hero.name}/>
            </div>
    );
};

export default SimpsonsComponent;