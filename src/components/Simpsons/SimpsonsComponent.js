import React from 'react';

{/*1. Описати всю сім'ю сімпсонів (5 персонажів)*/}

const SimpsonsComponent = (props) => {
    let {name, pic} = props;
    return (
        <div>
            <h3>{name}</h3>
            <img src={pic}/>
        </div>
    );
};

export default SimpsonsComponent;