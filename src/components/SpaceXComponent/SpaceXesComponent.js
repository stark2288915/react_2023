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
        <div>
            <h1 className='titleLaunches'>Launches except 2020</h1>
            <div className='mainLaunchesDiv'>
                {launches.map((launch, index) => <SpaceXComponent props={launch} key={index}/>)}
            </div>
        </div>
    );
};

export {SpaceXesComponent};