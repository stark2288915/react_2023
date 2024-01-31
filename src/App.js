
import './App.css';
import SimpsonsComponent from "./components/Simpsons/SimpsonsComponent";
import RickAndMortyComponent from "./components/RickAndMorty/RickAndMortyComponent";

const SimpsonsArr = [
    {name: 'Bart Simpson', pic: 'https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png'},
    {name: 'Homer Simpson', pic: 'https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'},
    {name: 'Maggi Simpson', pic: 'https://upload.wikimedia.org/wikipedia/en/9/9d/Maggie_Simpson.png'},
    {name: 'Lisa Simpson', pic: 'https://upload.wikimedia.org/wikipedia/en/e/ec/Lisa_Simpson.png'},
    {name: 'Marge Simpson', pic: 'https://upload.wikimedia.org/wikipedia/uk/0/0b/Marge_Simpson.png'},
]

const RickAndMortyArr = [
    {id: 581, name:"Anchosnake", status:"Alive", species:"Animal", type:"Snake", gender:"Male", image:"https://rickandmortyapi.com/api/character/avatar/581.jpeg"},
    {id: 494, name:"Crystal Poacher", status:"Dead", species:"Alien", type:"hzz",gender:"Male", image:"https://rickandmortyapi.com/api/character/avatar/494.jpeg"},
    {id: 536, name:"Josiah", status:"Alive", species:"Human", type:"hzz", gender:"Male", image:"https://rickandmortyapi.com/api/character/avatar/536.jpeg"},
    {id: 306, name:"Scary Terry", status:"Alive", species:"Mythological Creature", type:"Monster", gender:"Male", image:"https://rickandmortyapi.com/api/character/avatar/306.jpeg"},
    {id: 42, name:"Big Head Morty",status:"unknown",species:"Human", type:"Human with giant head", gender:"Male", image:"https://rickandmortyapi.com/api/character/avatar/42.jpeg"},
    {id: 81, name:"Crocubot", status:"Dead", species:"Animal", type:"Robot-Crocodile hybrid", gender:"Male", image:"https://rickandmortyapi.com/api/character/avatar/81.jpeg"}
]


function App() {


  return (
    <div className="App">


        <>
            {/*1. Описати всю сім'ю сімпсонів (5 персонажів)*/}

            <SimpsonsComponent SimpsonsArr={SimpsonsArr}/>



            {/*2. Створити компонент який описує персонажа (властивості id,name,status,species,gender,image) з цього апі
            https://rickandmortyapi.com/
            https://rickandmortyapi.com/api/character
            Створити 6 персонажів*/}

            <RickAndMortyComponent RickAndMortyArr={RickAndMortyArr}/>
        </>

        {/*<SimpsonsComponent name={'Bart Simpson'} pic={'https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png'}/>
        <SimpsonsComponent name={'Homer Simpson'} pic={'https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'}/>
        <SimpsonsComponent name={'Maggi Simpson'} pic={'https://upload.wikimedia.org/wikipedia/en/9/9d/Maggie_Simpson.png'}/>
        <SimpsonsComponent name={'Lisa Simpson'} pic={'https://upload.wikimedia.org/wikipedia/en/e/ec/Lisa_Simpson.png'}/>
        <SimpsonsComponent name={'Marge Simpson'} pic={'https://upload.wikimedia.org/wikipedia/uk/0/0b/Marge_Simpson.png'}/>*/}



        {/*2. Створити компонент який описує персонажа (властивості id,name,status,species,gender,image) з цього апі
        https://rickandmortyapi.com/
        https://rickandmortyapi.com/api/character
        Створити 6 персонажів*/}

        {/*<RickAndMortyComponent/>*/}



    </div>
  );
}

export {App};
