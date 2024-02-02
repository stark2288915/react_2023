import React from 'react';
import RickAndMortyComponent from "./RickAndMortyComponent";


const RickAndMortyArr = [
    {id: 581, name:"Anchosnake", status:"Alive", species:"Animal", type:"Snake", gender:"Male", image:"https://rickandmortyapi.com/api/character/avatar/581.jpeg"},
    {id: 494, name:"Crystal Poacher", status:"Dead", species:"Alien", type:"hzz",gender:"Male", image:"https://rickandmortyapi.com/api/character/avatar/494.jpeg"},
    {id: 536, name:"Josiah", status:"Alive", species:"Human", type:"hzz", gender:"Male", image:"https://rickandmortyapi.com/api/character/avatar/536.jpeg"},
    {id: 306, name:"Scary Terry", status:"Alive", species:"Mythological Creature", type:"Monster", gender:"Male", image:"https://rickandmortyapi.com/api/character/avatar/306.jpeg"},
    {id: 42, name:"Big Head Morty",status:"unknown",species:"Human", type:"Human with giant head", gender:"Male", image:"https://rickandmortyapi.com/api/character/avatar/42.jpeg"},
    {id: 81, name:"Crocubot", status:"Dead", species:"Animal", type:"Robot-Crocodile hybrid", gender:"Male", image:"https://rickandmortyapi.com/api/character/avatar/81.jpeg"}
]


const RickAndMortyComponentsMap = () => {
    return (
        <div>
            {RickAndMortyArr.map(hero => <RickAndMortyComponent hero={hero} key={hero.id}/>)}
        </div>
    );
};

export default RickAndMortyComponentsMap;