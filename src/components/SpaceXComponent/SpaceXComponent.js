import React from 'react';

const SpaceXComponent = ({props}) => {
    console.log(props);

    return (
        <div>
            <h1>mission_name: {props.mission_name}</h1>
            <h3>launch_year: {props.launch_year}</h3>
            <h3>mission_patch_small: {props.links.mission_patch_small}</h3>
        </div>
    );
};

export {SpaceXComponent};