import React from 'react';

const SpaceXComponent = ({props}) => {
    return (
        <div className='launchDiv'>
            <h3>mission name: {props.mission_name}</h3>
            <h5>launch year: {props.launch_year}</h5>
            <img src={props.links.mission_patch_small} alt={props.mission_name}/>
        </div>
    );
};

export {SpaceXComponent};