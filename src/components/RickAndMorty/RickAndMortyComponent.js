import React from 'react';

const RickAndMortyComponent = ({hero}) => {

    return (
            <div>
                <h3>{hero.name}</h3>
                <img src={hero.image} alt={hero.name}/>
                <ul>
                    <li>id: {hero.id}</li>
                    <li>status: {hero.status}</li>
                    <li>species: {hero.species}</li>
                    <li>type: {hero.type}</li>
                    <li>gender: {hero.gender}</li>
                </ul>
            </div>
        )
};

export default RickAndMortyComponent;