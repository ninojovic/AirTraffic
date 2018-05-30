import React from 'react';

const SingleFlightInfo = ({ flightInfo }) => {
    const { companyName, logo, origin, destination, manufacturer, model } = flightInfo;

    return (
        <div className="row singleFlightInfo center">
            <div className="col s12">
                <h2>{companyName || "unknown"}</h2>
            </div>
            <div className="col s12">
                <img src={logo} alt="company logo" />
            </div>
            <div className="col s12">
                <p className="label">Airplane Manufacturer and model</p>
                <p className="flightDetails">{`${manufacturer || "unknown"} ${model || "unknown"}`}</p>
            </div>
            <div className="col s12">
                <p className="label">Origin</p>
                <p className="flightDetails">{origin || "unknown"}</p>
            </div>
            <div className="col s12">
                <p className="label">Destination</p>
                <p className="flightDetails">{destination || "unknown"}</p>
            </div>
            <a href="/">{`<<<< back to flight list`}</a>
        </div>
    )
};

export  { SingleFlightInfo };