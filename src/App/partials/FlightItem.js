import React from 'react';

import west from "../../assets/img/west.png"
import east from "../../assets/img/east.png"

const FlightItem = ({ bound, flightNumber, altitude}) => {
    const getDirection = () => {
        if (bound === "W") {
            return west;
        } else {
            return east;
        }
    }

    return (
        <div className="row flightItem">
            <div className="col s3">
                <img src={ getDirection() } alt="companyLogo" />
            </div>
            <div className="col s6">
                <p className="flightNumber">{ flightNumber }</p>
            </div>
            <div className="col s3">
                <p>{ altitude }m</p>
            </div>
        </div>
    )
};

export default FlightItem;