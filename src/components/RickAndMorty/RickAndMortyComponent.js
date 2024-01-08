import React from 'react';


{/*2. Створити компонент який описує персонажа (властивості id,name,status,species,gender,image) з цього апі
        https://rickandmortyapi.com/
        https://rickandmortyapi.com/api/character
        Створити 6 персонажів*/}
const RickAndMortyComponent = () => {
    let obj;

    fetch('https://rickandmortyapi.com/api/character/')
        .then(value => value.json())
        .then(value => console.log(value));



    return (
        <div>


        </div>
    );
};

export default RickAndMortyComponent;