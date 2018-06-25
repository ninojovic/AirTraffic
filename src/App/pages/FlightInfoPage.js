import React, { Component } from 'react';

import fetchService from "../../services/fetchService"

import Flight from "../../entities/flight"
import { SingleFlightInfo } from "../partials/SingleFlightInfo"
import Loading from "../partials/Loading"


class FlightInfoPage extends Component {
    state = {
        flightInfo: {}
    }

    componentDidMount() {
        const flightNumber = this.props.match.params;

        this.fetchData(flightNumber)
    }

    fetchData(flightNumber){
        return fetchService.getFlightInfo(this.props.match.params.flightNumber)
            .then(flight => {
                const flightInfo = new Flight(flight.Id, flight.Alt, flight.Call, flight.Brng, flight.Man, flight.Mdl, flight.From, flight.To, flight.Op);
                
                this.setState({ flightInfo })
            })
    }

    render() {
        const componentToRender = (this.state.flightInfo.id) ? <SingleFlightInfo flightInfo={ this.state.flightInfo }/> : <Loading />;

        return (
            <main className="container">
                {componentToRender}
            </main>
        );
    }
}

export default FlightInfoPage;
