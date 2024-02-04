import React, {useEffect, useState} from 'react';
import {getSpaseXLaunches} from "../services/spaceX.api.service";
import {SpaceXComponent} from "./SpaceXComponent";

const SpaceXesComponent = () => {
    let [launches, setLaunches] = useState([]);

    useEffect(() => {
        getSpaseXLaunches()
            .then(value => value.data)
            .then(value => value.filter(launch => launch.launch_year < 2020))
            .then(value => setLaunches(value));
    },[])

    return (
        <div className='mainLaunchesDiv'>
            {launches.map((launch, index) => <SpaceXComponent props={launch} key={index}/>)}
        </div>
    );
};

export {SpaceXesComponent};