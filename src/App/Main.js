import React, { Component } from 'react';

import fetchService from "../services/fetchService"
import Flight from "../entities/flight"
import FlightItem from "./partials/FlightItem"

class Main extends Component {
    state = {
        flightData: [],
        error: "",
        intervalId: null,
    }

    componentWillMount = () => {
        const lat = sessionStorage.getItem("latitude");
        const lon = sessionStorage.getItem("longitude");

        if (lat == null) {
            this.requestGeolocationAccess();
        } else {
            this.fetchAndSchedule(lat, lon)
        }
    }

    componentWillUnmount = () => {
        clearInterval(this.state.intervalId);
    }

    requestGeolocationAccess = () => {
        if("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(this.getGeolocation, this.getError, { maximumAge: 30000 });
        }
        else {
            this.setState({ error: "We are sorry but your browser does not support geolocation." });
        }
    }
    
    fetchAndMapData = (lat, lon) => {
        fetchService.getRequest(lat, lon)
            .then(rawData => {
                const flightData = rawData.map(flight => new Flight(flight.Id, flight.Alt, flight.Call, flight.Brng, flight.Man, flight.Mdl, flight.From, flight.To, flight.Op));
                flightData.sort((flightA, flightB) => flightB.altitude - flightA.altitude);

                this.setState({ flightData });
            })
    }

    fetchAndSchedule = (lat, lon) => {
        this.fetchAndMapData(lat, lon)
        const intervalId = setInterval(()=>{ this.fetchAndMapData(lat, lon) }, 60000);
        this.setState({ intervalId });
    }

    getGeolocation = ({ coords }) => {
        const { latitude, longitude } = coords

        this.fetchAndSchedule(latitude, longitude)

        sessionStorage.setItem("latitude", latitude)
        sessionStorage.setItem("longitude", longitude)
    }

    getError = ({ code }) => {
        if (code === 1) {
            this.setState({ error: "We are sorry but you did not give us access to your geolocation so we can't provide any data." });
        } else {
            this.setState({ error: "We are sorry but we can't obtain your location at the moment. Please try again later." });
        }
    }

    render() {
        const { error, flightData } = this.state
        const componentToRender = (flightData.length !== 0) ?
            flightData.map(({ bound, flightNumber, altitude }) => <FlightItem bound={bound} flightNumber={flightNumber} altitude={altitude} key={flightNumber}/>)
            :
            <div></div>

        return (
            <main className="container">
                { error && alert(error) }
                <div className="row flightList">
                    <div className="col s3">
                        <p className="logoLabel">direction</p>
                    </div>
                    <div className="col s6">
                        <p className="numberLabel">flight number</p>
                    </div>
                    <div className="col s3">
                        <p className="altLabel">altitude(m)</p>
                    </div>
                </div>
                {componentToRender}
            </main>
        );
    }
}

export default Main;
