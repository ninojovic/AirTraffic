import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom'

import "./App.css"

import Header from "./common/Header"
import Footer from "./common/Footer"
import MainPage from "./pages/MainPage"
import FlightInfoPage from "./pages/FlightInfoPage"

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Route exact path='/' component={MainPage} />
        <Route exact path='/flight/:flightNumber' component={FlightInfoPage} />
        <Footer />
      </Fragment>
    );
  }
}

export default App;
