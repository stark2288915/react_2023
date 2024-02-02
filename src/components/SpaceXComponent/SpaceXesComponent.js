import React, {useEffect, useState} from 'react';
import {getSpaseXLaunches} from "../services/spaceX.api.service";
import {SpaceXComponent} from "./SpaceXComponent";

const SpaceXesComponent = () => {
    let [launches, setLaunches] = useState([]);

    useEffect(() => {
        getSpaseXLaunches()
            .then(value => setLaunches(value.data));
    })

    return (
        <div>
            {launches.map((launch, index) => <SpaceXComponent props={launch} key={index}/>)}
        </div>
    );
};

export {SpaceXesComponent};