import React, { Component } from 'react';

class Main extends Component {
    state = {
        lat: null,
        lon: null,
        error: "",
    }

    componentWillMount = () => {
        if("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(this.getGeolocation, this.getError, { maximumAge: 30000 });
        }
        else {
            this.setState({ error: "We are sorry but your browser does not support geolocation." });
        }
    }

    getGeolocation = ({ coords }) => {
        const { latitude, longitude } = coords

        this.setState({
            lat: latitude,
            lon: longitude
        })
    }

    getError = ({ code }) => {
        if (code === 1) {
            this.setState({ error: "We are sorry but you did not give us access to your geolocation so we can't provide any data." });
        } else {
            this.setState({ error: "We are sorry but we can't obtain your location at the moment. Please try again later." });
        }
    }

    render() {
        return (
            <main className="container">
                {(this.state.error) && alert(this.state.error)}
            </main>
        );
    }
}

export default Main;
