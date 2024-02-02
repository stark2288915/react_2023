import React from 'react';

const SpaceXComponent = ({props}) => {
    return (
        <div>
            <h1>mission_name: {props[0].mission_name}</h1>
            <h3>launch_year: {props[1].launch_year}</h3>
            <h3>mission_patch_small: {props['link']['mission_patch_small']}</h3>
        </div>
    );
};

export {SpaceXComponent};