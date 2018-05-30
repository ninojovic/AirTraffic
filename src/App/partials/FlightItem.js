import React from 'react';
import { Link } from 'react-router-dom'

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
        <Link to={`flight/${flightNumber}`}>
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
        </Link>
    )
};

export default FlightItem;