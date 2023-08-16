import React from 'react';
import './Launch.css';
const Launch = ({launch}) => {
    const{mission_name, launch_year, links:{mission_patch_small}} = launch;
    return (
        <div className="missionStyle">
           <div className="textStyle"><div className="nameStyle">mission_name: {mission_name}</div>
            <div className="launchStyle">launch_year: {launch_year}</div></div>
            <img className="imageStyle" src={mission_patch_small} alt={mission_name}/>
        </div>

    );
};

export {Launch};