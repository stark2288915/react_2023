import React from 'react';

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