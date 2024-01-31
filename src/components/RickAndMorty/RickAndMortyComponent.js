import React from 'react';

const RickAndMortyComponent = ({RickAndMortyArr}) => {

    return (
        RickAndMortyArr.map(hero =>
            <div>
                <h3>{hero.name}</h3>
                <img src={hero.pic} alt={hero.name}/>
                <ul>
                    <li>{hero.id}</li>
                    <li>{hero.status}</li>
                    <li>{hero.species}</li>
                    <li>{hero.type}</li>

                </ul>
            </div>
        )
    );
};

export default RickAndMortyComponent;